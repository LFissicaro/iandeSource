using Microsoft.EntityFrameworkCore.Migrations;

namespace IandeBackend.Migrations
{
    public partial class ProductTypeName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "name",
                table: "ProductTypes",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "name",
                table: "ProductTypes");
        }
    }
}
