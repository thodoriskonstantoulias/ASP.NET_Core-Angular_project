using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Udemy_Web_API_core_angular_project.Models;

namespace Udemy_Web_API_core_angular_project.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string username, string password);
        Task<bool> UserExists(string username);
    }
}
