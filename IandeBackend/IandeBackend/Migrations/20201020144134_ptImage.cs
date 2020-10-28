using Microsoft.EntityFrameworkCore.Migrations;

namespace IandeBackend.Migrations
{
    public partial class ptImage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "imagePath",
                table: "ProductTypes",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "imagePath",
                table: "ProductTypes");
        }
    }
}
