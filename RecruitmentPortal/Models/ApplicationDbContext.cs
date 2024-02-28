using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace RecruitmentPortal.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext() : base("DefaultConnection")
        {

        }
        //public DbSet<Employee> Employees { get; set; }
        public DbSet<User> Users { get; set; }
    }
}