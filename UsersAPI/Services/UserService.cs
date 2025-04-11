using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.Json;
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

        public User CreateUser(User user)
        {
            try
            {
                var userdto = new User();
                userdto.Id = Guid.NewGuid();
                userdto.Address = user.Address;
                userdto.City = user.City;
                userdto.Email = user.Email;
                userdto.CreatedDate = DateTime.Now;
                userdto.UpdatedDate = DateTime.Now;
                userdto.IsDeleted = false;
                userdto.DepartmentId = user.DepartmentId;
                _context.Users.Add(userdto);
                _context.SaveChangesAsync();
                return _context.Users.FindAsync(userdto.Id).Result;

            }
            catch(Exception ex)
            {
                return null;
            }
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

        public User GetUser(Guid id)
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
                return null;

            }
            
            
            return userbyid;
        }
    }
}
