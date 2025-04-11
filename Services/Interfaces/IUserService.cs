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
        List<User> GetUsers();
        User GetUser(int id);
        User UpdateUser(User user);
        bool DeleteUser(int id);
    }
}
