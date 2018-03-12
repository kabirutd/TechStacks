﻿using System;
using System.IO;
using System.Net;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using System.Collections.Generic;
using System.Linq;
using ServiceStack;
using ServiceStack.Web;
using ServiceStack.Data;
using ServiceStack.Logging;
using ServiceStack.OrmLite;
using TechStacks.ServiceModel;
using TechStacks.ServiceModel.Types;

namespace TechStacks.ServiceInterface
{
    public static class TechExtensions
    {
        private static ILog Log = LogManager.GetLogger(typeof(TechExtensions));

        public static TechnologyInStack ToTechnologyInStack(this TechnologyChoice technologyChoice)
        {
            var result = technologyChoice.ConvertTo<TechnologyInStack>();
            result.PopulateWith(technologyChoice.Technology);
            result.Id = technologyChoice.Id;
            return result;
        }

        private static readonly Regex InvalidCharsRegex = new Regex(@"[^a-z0-9\s-]", RegexOptions.Compiled);
        private static readonly Regex CollapseSpacesRegex = new Regex(@"\s+", RegexOptions.Compiled);
        private static readonly Regex SpacesRegex = new Regex(@"\s", RegexOptions.Compiled);
        private static readonly Regex CollapseHyphensRegex = new Regex("-+", RegexOptions.Compiled);

        /// <summary>
        /// From http://stackoverflow.com/a/2921135/670151
        /// </summary>
        /// <param name="phrase"></param>
        /// <returns></returns>
        public static string GenerateSlug(this string phrase)
        {
            var str = phrase.RemoveAccent().ToLower()
                .Replace("#", "sharp")  // c#, f# => csharp, fsharp
                .Replace("++", "pp");   // c++ => cpp

            str = InvalidCharsRegex.Replace(str, "-");
            //// convert multiple spaces into one space   
            //str = CollapseSpacesRegex.Replace(str, " ").Trim();
            // cut and trim 
            str = str.Substring(0, str.Length <= 100 ? str.Length : 100).Trim();
            str = SpacesRegex.Replace(str, "-");
            str = CollapseHyphensRegex.Replace(str, "-");

            if (string.IsNullOrEmpty(str))
                return null;

            if (str[0] == '-')
                str = str.Substring(1);
            if (str[str.Length - 1] == '-')
                str = str.Substring(0, str.Length - 1);

            return str;
        }

        public static string RemoveAccent(this string txt)
        {
            // https://github.com/dotnet/corefx/issues/9158
            // byte[] bytes = System.Text.Encoding.GetEncoding("Cyrillic").GetBytes(txt);
            // return System.Text.Encoding.ASCII.GetString(bytes);
            return txt;
        }

        public static Task RegisterPageView(this IDbConnectionFactory dbFactory, string id)
        {
            var db = dbFactory.Open();

            return db.ExecuteSqlAsync("UPDATE page_stats SET view_count = view_count + 1 WHERE id = @id", new { id })
                .ContinueWith(t =>
                {
                    var parts = id.Substring(1).SplitOnFirst('/');
                    if (t.Result == 0 && parts.Length == 2)
                    {
                        var type = parts[0];
                        var slug = parts[1];

                        return db.InsertAsync(new PageStats
                        {
                            Id = id,
                            RefType = type,
                            RefSlug = slug,
                            ViewCount = 1,
                            LastModified = DateTime.UtcNow,
                        })
                        .ContinueWith(t2 => (int)t2.Result);
                    }

                    return t;
                }).ContinueWith(_ => db.Dispose());
        }

        public static string UploadToImgur(this IHttpFile image, string imgurClientId, string paramName,
            int? minWidth = null, int? minHeight = null,
            int? maxWidth = null, int? maxHeight = null)
        {
            try
            {
                var imgurReq = WebRequest.Create("https://api.imgur.com/3/image");
                imgurReq.Headers[HttpHeaders.Authorization] = $"Client-ID {imgurClientId}";
                UploadFile(imgurReq, image.InputStream, image.FileName, MimeTypes.GetMimeType(image.FileName), field:"image");

                try
                {
                    using (var imgurRes = imgurReq.GetResponse())
                    using (var stream = imgurRes.GetResponseStream())
                    {
                        var resText = stream.ReadFully().FromUtf8Bytes();
                        var jsonRes = JSON.parse(resText);
                        if (jsonRes is Dictionary<string, object> jsonObj)
                        {
                            if (jsonObj["data"] is Dictionary<string, object> data)
                            {
                                if (minWidth != null || maxWidth != null || minHeight != null || maxWidth != null)
                                {
                                    var width = (int)data["width"];
                                    var height = (int)data["height"];

                                    if (width < minWidth || height < minHeight)
                                        throw new ArgumentException($"Minimum Dimensions {minWidth} x {minHeight}", paramName);

                                    if (width > maxWidth || height > maxHeight)
                                        throw new ArgumentException($"Maximum Dimensions {maxWidth} x {maxHeight}", paramName);
                                }

                                if (data["link"] is string link && !string.IsNullOrEmpty(link))
                                {
                                    return link.Replace("\\/", "/");
                                }
                            }
                        }
                    }
                }
                catch (WebException e)
                {
                    var errorMessage = GetImgurErrorMessage(e.GetResponseBody());
                    if (errorMessage != null)
                        throw new ArgumentException(errorMessage);

                    throw;
                }

                throw new ArgumentException("Invalid Upload Image Response", paramName);
            } 
            catch (Exception ex)
            {
                throw new ArgumentException("Could not upload image: " + ex.Message, paramName, ex);
            }
        }

        private static string GetImgurErrorMessage(string body)
        {
            if (body == null || !body.StartsWith("{"))
                return null;

            try
            {
                var obj = JSON.parse(body);
                if (obj is Dictionary<string, object> response)
                {
                    if (response.TryGetValue("data", out var data) && data is Dictionary<string, object> oData)
                    {
                        if (oData.TryGetValue("error", out var error) && error is Dictionary<string, object> oError)
                        {
                            var code = 0;
                            string type = null;
                            string message = null;

                            if (oError.TryGetValue("code", out var oCode))
                                code = (int)oCode;
                            if (oError.TryGetValue("type", out var oType))
                                type = (string)oType;
                            if (oError.TryGetValue("message", out var oMessage))
                                message = (string)oMessage;

                            return $"{type} ({code}): {message}";
                        }
                    }
                }
            }
            catch (Exception) { }

            return null;
        }

        // Use UploadFile in v5.1.0
        public static void UploadFile(WebRequest webRequest, Stream fileStream, string fileName, string mimeType,
            string accept = null, Action<HttpWebRequest> requestFilter = null, string method = "POST", string field = "file")
        {
            var httpReq = (HttpWebRequest)webRequest;
            httpReq.Method = method;

            if (accept != null)
                httpReq.Accept = accept;

            requestFilter?.Invoke(httpReq);

            var boundary = Guid.NewGuid().ToString("N");

            httpReq.ContentType = "multipart/form-data; boundary=\"" + boundary + "\"";

            var boundarybytes = ("\r\n--" + boundary + "--\r\n").ToAsciiBytes();

            var header = "\r\n--" + boundary +
                         $"\r\nContent-Disposition: form-data; name=\"{field}\"; filename=\"{fileName}\"\r\nContent-Type: {mimeType}\r\n\r\n";

            var headerbytes = header.ToAsciiBytes();

            var contentLength = fileStream.Length + headerbytes.Length + boundarybytes.Length;
            PclExport.Instance.InitHttpWebRequest(httpReq,
                contentLength: contentLength, allowAutoRedirect: false, keepAlive: false);

            using (var outputStream = PclExport.Instance.GetRequestStream(httpReq))
            {
                outputStream.Write(headerbytes, 0, headerbytes.Length);

                fileStream.CopyTo(outputStream, 4096);

                outputStream.Write(boundarybytes, 0, boundarybytes.Length);

                PclExport.Instance.CloseStream(outputStream);
            }
        }
    }
}
