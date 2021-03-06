﻿using System.Collections.Generic;
using System.Net;
using ServiceStack;
using ServiceStack.Auth;

namespace TechStacks.ServiceInterface.Auth
{
    public class DiscourseAuthProvider : CredentialsAuthProvider
    {        
        public string DiscourseUrl { get; set; }
        
        public override bool TryAuthenticate(IServiceBase authService, string userName, string password)
        {
            var valid = base.TryAuthenticate(authService, userName, password);
            if (valid)
                return true;
            
            var csrfUrl = DiscourseUrl.CombineWith("/session/csrf");
            
            var cookies = new CookieContainer();
            var csrfJson = csrfUrl.GetJsonFromUrl(
                requestFilter:req => req.CookieContainer = cookies);
            var csrfObj = (Dictionary<string,object>)JSON.parse(csrfJson);

            var csrf = csrfObj["csrf"] as string;
            
            var loginUrl = DiscourseUrl.CombineWith("/session");
            
            var sessionJson = loginUrl.PostToUrl(new {
                login = userName,
                password = password,
            }, requestFilter: req => {
                req.CookieContainer = cookies;
                req.Headers["X-CSRF-Token"] = csrf;
                req.Accept = MimeTypes.Json;
            });

            var jsonObj = (Dictionary<string, object>) JSON.parse(sessionJson);
            if (jsonObj.TryGetValue("user", out var oUser) && 
                oUser is Dictionary<string, object> user &&
                user.TryGetValue("username", out var oUserName))
            {
                var authRepo = authService.TryResolve<IAuthRepository>();
                var userAuth = authRepo.GetUserAuthByUserName((string) oUserName);
                
                var isMatch = userAuth.UserName == (string) oUserName;
                if (isMatch)
                {
                    authRepo.UpdateUserAuth(userAuth, userAuth, password);
                    return true;
                }
            }

            return false;
        }

        public override bool IsAuthorized(IAuthSession session, IAuthTokens tokens, Authenticate request = null)
        {
            var ret = base.IsAuthorized(session, tokens, request);
            return ret;
        }
    }
}