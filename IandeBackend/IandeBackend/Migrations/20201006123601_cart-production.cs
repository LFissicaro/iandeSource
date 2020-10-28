using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IandeBackend.Migrations
{
    public partial class cartproduction : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Cartid",
                table: "Products",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "finalizedTime",
                table: "Carts",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateIndex(
                name: "IX_Products_Cartid",
                table: "Products",
                column: "Cartid");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Carts_Cartid",
                table: "Products",
                column: "Cartid",
                principalTable: "Carts",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Carts_Cartid",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_Cartid",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Cartid",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "finalizedTime",
                table: "Carts");
        }
    }
}
