using Microsoft.EntityFrameworkCore;
using Models;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UsersAPI.Data;


namespace Services.Services
{
    class UserService : IUserService
    {
        public AppDbContext _context;
        public UserService(AppDbContext context) 
        {
            _context = context;
        }
        public bool DeleteUser(int id)
        {
            try
            {
                var user = _context.Users.FindAsync(id).Result;
                user.IsDeleted = true;
                _context.Users.Update(user);
                _context.SaveChangesAsync();
                return true;
            }
            catch(Exception e) 
            {
                return false;
            }
            
            
        }

        public User GetUser(int id)
        {
            try
            {
                var user = _context.Users.FindAsync(id).Result;
                return user;
            }
            catch (Exception e) 
            
            {
                return null;
            }
                
        }

        public List<User> GetUsers()
        {
            try
            {
                var users = _context.Users.ToListAsync().Result;
                return users;

            }
            catch (Exception e) {
                return null;
            
            }
        }

        public User UpdateUser(User user)
        {
            var userbyid = new User();
            try
            {
                userbyid = _context.Users.FindAsync(user.Id).Result;
                userbyid.IsDeleted = false;
                userbyid.Address = user.Address;
                userbyid.City = user.City;
                userbyid.Email = user.Email;
                userbyid.DepartmentId = user.DepartmentId;
                _context.Users.Update(userbyid);
                _context.SaveChangesAsync();
            }
            catch (Exception ex) 
            { 

            }
            
            
            return userbyid;
        }
    }
}
