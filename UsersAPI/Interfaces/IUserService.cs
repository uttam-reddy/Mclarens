using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IUserService
    {
        Task<ResponseModel<List<User>>> GetUsers();
        Task<ResponseModel<User>> GetUserById(Guid id);
        Task<ResponseModel<User>> UpdateUser(User user);

        Task<ResponseModel<User>> CreateUser(User user);
        Task<ResponseModel<User>> DeleteUser(Guid id);
    }
}
