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
        public async Task<ActionResult<ResponseModel<List<User>>>> GetUsers()
        {
            ResponseModel<List<User>> response = new ResponseModel<List<User>>();
            try
            {
                response = await _userService.GetUsers();
                if (!response.Status)
                {
                    return BadRequest(response);
                }
                return Ok(response);
            }
            catch (Exception ex) 
            {
                response.Status = false;
                return BadRequest(response);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ResponseModel<User>>> GetUserById(Guid id)
        {
            ResponseModel<User> response = new ResponseModel<User>();
            try
            {
                response = await _userService.GetUserById(id);
                if (!response.Status)
                {
                    return BadRequest(response);
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Status = false;
                return BadRequest(response);
            }
        }

        [HttpPost("CreateUser")]
        public async Task<ActionResult<ResponseModel<User>>> CreateUser(User user)
        {
            ResponseModel<User> response = new ResponseModel<User>();
            try
            {
                response = await _userService.CreateUser(user);
                if (!response.Status)
                {
                    return BadRequest(response);
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Status = false;
                return BadRequest(response);
            }
        }

        [HttpPost]
        public async Task<ActionResult<ResponseModel<User>>> UpdateUser(User user)
        {
            ResponseModel<User> response = new ResponseModel<User>();
            try
            {
                response = await _userService.UpdateUser(user);
                if (!response.Status)
                {
                    return BadRequest(response);
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Status = false;
                return BadRequest(response);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ResponseModel<User>>> DeleteUser(Guid id)
        {
            ResponseModel<User> response = new ResponseModel<User>();
            try
            {
                response = await _userService.DeleteUser(id);
                if (!response.Status)
                {
                    return BadRequest(response);
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Status = false;
                return BadRequest(response);
            }
        }


    }
}
