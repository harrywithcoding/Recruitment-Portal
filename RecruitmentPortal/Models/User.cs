using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecruitmentPortal.Models
{
    public class User
    {
        [Key]
        public int U_ID { get; set; }

        [Required]
        [Index(IsUnique = true)]
        [MaxLength(50)] // Adjust the length as needed
        public string UserName { get; set; }

        [Required]
        [MaxLength(50)] // Adjust the length as needed
        public string Password { get; set; }
    }
}