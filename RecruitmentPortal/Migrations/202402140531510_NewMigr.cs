namespace RecruitmentPortal.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class NewMigr : DbMigration
    {
        public override void Up()
        {
            DropTable("dbo.Employees");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        EmployeeID = c.Int(nullable: false, identity: true),
                        EmpName = c.String(),
                    })
                .PrimaryKey(t => t.EmployeeID);
            
        }
    }
}
