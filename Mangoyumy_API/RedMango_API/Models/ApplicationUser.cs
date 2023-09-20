using Microsoft.AspNetCore.Identity;

namespace Mangoyumy_API.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Name { get; set; }
    }
}
