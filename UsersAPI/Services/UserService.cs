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

        public async Task<ResponseModel<User>> CreateUser(User user)
        {
            ResponseModel<User> response = new ResponseModel<User>();
            try
            {
                var userdto = new User();
                userdto.Id = Guid.NewGuid();
                userdto.Name = user.Name;
                userdto.Address = user.Address;
                userdto.City = user.City;
                userdto.Email = user.Email;
                userdto.CreatedDate = DateTime.Now;
                userdto.UpdatedDate = DateTime.Now;
                userdto.IsDeleted = false;
                userdto.DepartmentId = user.DepartmentId;
                _context.Users.Add(userdto);
                await _context.SaveChangesAsync();
                response.Entity = await _context.Users.FindAsync(userdto.Id);
                response.Status = true;
                return response;

            }
            catch(Exception ex)
            {
                response.Status = false;
                response.ReturnMessage.Add(ex.Message);
                return null;
            }
        }

        public async Task<ResponseModel<User>> DeleteUser(Guid id)
        {
            ResponseModel<User> response = new ResponseModel<User>();

            try
            {
                var user = await _context.Users.FindAsync(id);
                if(user == null)
                {
                    response.Status = false;
                    response.ReturnMessage.Add("user noy found");
                    return response;
                }
                user.IsDeleted = true;
                _context.Entry(user).Property(x => x.IsDeleted).IsModified=true;
                await _context.SaveChangesAsync();
                response.Entity = await _context.Users.FindAsync(id);
                response.Status= true;
                return response;
            }
            catch(Exception e) 
            {
                response.Status = false;
                response.ReturnMessage.Add(e.Message);
                return response;
            }
            
            
        }

        public async Task<ResponseModel<User>> GetUserById(Guid id)
        {
            ResponseModel<User> response = new ResponseModel<User>();
            try
            {
                var user = await _context.Users.FindAsync(id);
                response.Entity = user;
                response.Status = true;
                return response;
            }
            catch (Exception e) 
            
            {
                response.Status = false;
                response.ReturnMessage.Add(e.Message);
                return null;
            }
                
        }

        public async Task<ResponseModel<List<User>>> GetUsers()
        {
            ResponseModel<List<User>> response = new ResponseModel<List<User>>();

            try
            {
                var users = await _context.Users.ToListAsync();
                response.Entity = users;
                return response;

            }
            catch (Exception e) 
            {
                response.Status = false;
                response.ReturnMessage.Add(e.Message);
                return response;

            
            }
        }

        public async Task<ResponseModel<User>> UpdateUser(User user)
        {
            ResponseModel<User> response = new ResponseModel<User>();
            try
            {
                var userbyid = _context.Users.FindAsync(user.Id).Result;
                userbyid.IsDeleted = user.IsDeleted;
                userbyid.Address = user.Address;
                userbyid.City = user.City;
                userbyid.Email = user.Email;
                userbyid.DepartmentId = user.DepartmentId;
                userbyid.UpdatedDate = DateTime.Now;
                _context.Users.Update(userbyid);
                await _context.SaveChangesAsync();
                response.Status = true;
                response.Entity = _context.Users.FindAsync(user.Id).Result;
                return response;
            }
            catch (Exception ex) 
            {
                response.Status = false;
                response.ReturnMessage.Add(ex.Message);
                return response;

            }
            
            
        }
    }
}
