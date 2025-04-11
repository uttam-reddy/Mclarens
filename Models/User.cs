using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    [Table("User")]
    public class User
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }

        public bool IsDeleted { get; set; }

        public Guid DepartmentId { get; set; }


    }
}
