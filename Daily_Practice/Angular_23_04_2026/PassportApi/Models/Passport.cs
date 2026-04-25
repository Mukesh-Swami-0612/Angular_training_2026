using System.ComponentModel.DataAnnotations;

namespace PassportApi.Models
{
    public class Passport
    {

        [Key]
        public int id { get; set; }

        [Required]
        [StringLength(20)]
        public string holderName { get; set; } = string.Empty;

        [Required]
        [StringLength(20)]
        public string passportNumber { get; set; } = string.Empty;

        [Required]
        [StringLength(20)]
        public string expiryDate { get; set; } = string.Empty;

        [Required]
        [StringLength(20)]
        public string ppoCode { get; set; } = string.Empty;
    }
}
