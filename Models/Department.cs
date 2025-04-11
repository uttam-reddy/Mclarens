﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    class Department
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }

        public bool IsDeleted { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }
}
