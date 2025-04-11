using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using Services;
using Services.Interfaces;

namespace UsersAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpGet]
        public List<User> GetUsers()
        {
            var users = _userService.GetUsers();
            return users;
        }

        [HttpGet("{id}")]
        public User GetUserById(Guid id)
        {
            var users = _userService.GetUser(id);
            return users;
        }

        [HttpPost]
        public User CreateUser(User user)
        {
            var users = _userService.CreateUser(user);
            return users;
        }

        [HttpPost]
        public User UpdateUser(User user)
        {
            var users = _userService.UpdateUser(user);
            return users;
        }

        [HttpDelete("id")]
        public bool DeleteUser(int id)
        {
            var isdeleted = _userService.DeleteUser(id);
            return isdeleted;
        }


    }
}
