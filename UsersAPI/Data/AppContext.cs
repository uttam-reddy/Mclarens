using Microsoft.EntityFrameworkCore;
using Models;
using System;

namespace UsersAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
