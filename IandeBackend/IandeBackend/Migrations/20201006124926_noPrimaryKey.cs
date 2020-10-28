using Microsoft.EntityFrameworkCore.Migrations;

namespace IandeBackend.Migrations
{
    public partial class noPrimaryKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProductTypeid",
                table: "Products",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Carts_Products",
                columns: table => new
                {
                    productId = table.Column<int>(nullable: false),
                    cartId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Carts_Products", x => new { x.cartId, x.productId });
                    table.ForeignKey(
                        name: "FK_Carts_Products_Carts_cartId",
                        column: x => x.cartId,
                        principalTable: "Carts",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Carts_Products_Products_productId",
                        column: x => x.productId,
                        principalTable: "Products",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProductTypes",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductTypes", x => x.id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Products_ProductTypeid",
                table: "Products",
                column: "ProductTypeid");

            migrationBuilder.CreateIndex(
                name: "IX_Carts_Products_productId",
                table: "Carts_Products",
                column: "productId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_ProductTypes_ProductTypeid",
                table: "Products",
                column: "ProductTypeid",
                principalTable: "ProductTypes",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_ProductTypes_ProductTypeid",
                table: "Products");

            migrationBuilder.DropTable(
                name: "Carts_Products");

            migrationBuilder.DropTable(
                name: "ProductTypes");

            migrationBuilder.DropIndex(
                name: "IX_Products_ProductTypeid",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "ProductTypeid",
                table: "Products");
        }
    }
}
