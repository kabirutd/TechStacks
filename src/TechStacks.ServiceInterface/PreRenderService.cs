﻿using System;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.OrmLite;
using TechStacks.ServiceModel;

namespace TechStacks.ServiceInterface
{
    public class PreRenderService : PostServicesBase
    {
//        [Authenticate]
        public async Task Put(StorePreRender request)
        {
            var user = GetUser();
            
            var bytes = request.RequestStream.ReadFully();

            var path = request.Path ?? "/";
            
            var updated = await Db.UpdateOnlyAsync(() =>
                new PreRender {
                    Data = bytes,
                    ContentType = Request.ContentType,
                    Modified = DateTime.Now,
                    ModfiedBy = user.UserName,
                },
                where:x => x.Path == path);

            if (updated == 0)
            {
                Db.Insert(new PreRender {
                    Path = path,
                    Data = bytes,
                    ContentType = Request.ContentType,
                    Created = DateTime.Now,
                    CreatedBy = user.UserName,
                    Modified = DateTime.Now,
                    ModfiedBy = user.UserName,
                });
            }
        }

        public async Task Get(GetPreRender request)
        {
            var path = request.Path ?? "/";
            var prerender = Db.SingleById<PreRender>(path);
            if (prerender == null)
                throw HttpError.NotFound(path);

            await Response.WriteBytesToResponse(prerender.Data, prerender.ContentType);
        }
    }
}