using Microsoft.EntityFrameworkCore.Migrations;

namespace IandeBackend.Migrations
{
    public partial class deleted : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "deleted",
                table: "Users",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "deleted",
                table: "ProductTypes",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "deleted",
                table: "Products",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "deleted",
                table: "Carts",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "deleted",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "deleted",
                table: "ProductTypes");

            migrationBuilder.DropColumn(
                name: "deleted",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "deleted",
                table: "Carts");
        }
    }
}
