using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PassportApi.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Passports",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    holderName = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    passportNumber = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    expiryDate = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    ppoCode = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Passports", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Passports");
        }
    }
}
