using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class AppRole : IdentityRole<int>
    {
        // Navigation property to join table
        public ICollection<AppUserRole> UserRoles { get; set; }
    }
}