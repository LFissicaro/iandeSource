using Microsoft.EntityFrameworkCore.Migrations;

namespace IandeBackend.Migrations
{
    public partial class keys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_ProductTypes_ProductTypeid",
                table: "Products");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Carts_Products",
                table: "Carts_Products");

            migrationBuilder.RenameColumn(
                name: "ProductTypeid",
                table: "Products",
                newName: "productTypeId");

            migrationBuilder.RenameIndex(
                name: "IX_Products_ProductTypeid",
                table: "Products",
                newName: "IX_Products_productTypeId");

            migrationBuilder.AlterColumn<int>(
                name: "productTypeId",
                table: "Products",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Carts_Products_cartId",
                table: "Carts_Products",
                column: "cartId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_ProductTypes_productTypeId",
                table: "Products",
                column: "productTypeId",
                principalTable: "ProductTypes",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_ProductTypes_productTypeId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Carts_Products_cartId",
                table: "Carts_Products");

            migrationBuilder.RenameColumn(
                name: "productTypeId",
                table: "Products",
                newName: "ProductTypeid");

            migrationBuilder.RenameIndex(
                name: "IX_Products_productTypeId",
                table: "Products",
                newName: "IX_Products_ProductTypeid");

            migrationBuilder.AlterColumn<int>(
                name: "ProductTypeid",
                table: "Products",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Carts_Products",
                table: "Carts_Products",
                columns: new[] { "cartId", "productId" });

            migrationBuilder.AddForeignKey(
                name: "FK_Products_ProductTypes_ProductTypeid",
                table: "Products",
                column: "ProductTypeid",
                principalTable: "ProductTypes",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
