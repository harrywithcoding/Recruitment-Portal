using RecruitmentPortal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RecruitmentPortal.Controllers
{
    public class DataController : ApiController
    {
        private ApplicationDbContext context;

        public DataController()
        {
            context = new ApplicationDbContext();
        }
        [HttpPost]
        public IHttpActionResult Register(User usr)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            try
            {
                // Call the stored procedure to register the user
                var result = context.Database.SqlQuery<string>(
                    "RegisterUser @UserName, @Password",
                    new SqlParameter("UserName", usr.UserName),
                    new SqlParameter("Password", usr.Password)
                ).FirstOrDefault();

                if (result.Contains("successfully"))
                {
                    return Ok(result);
                }
                else
                {
                    return BadRequest(result);
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
            finally
            {
                context.Dispose();
            }
        }


        [HttpGet]
        public IHttpActionResult Login(string userName, string password)
        {
            try
            {
                var result = context.Database.SqlQuery<string>(
                    "LoginUser @UserName, @Password",
                    new SqlParameter("UserName", userName),
                    new SqlParameter("Password", password)
                ).FirstOrDefault();

                if (result.Contains("Login successful"))
                {
                    return Ok(result);
                }
                else
                {
                    return BadRequest(result);
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
            finally
            {
                context.Dispose();
            }
        }

        [HttpGet]
        public List<User> GetAllUserData()
        {
            
                List<User> userData = context.Users.ToList();  // Assuming your User entity is named 'User'
                return userData;
            
        }
        
    }
}
