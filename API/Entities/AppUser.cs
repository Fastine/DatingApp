namespace API.Entities
{
    public class AppUser
    {
        // Columns for the table in DB
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}