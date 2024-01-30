using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RastreamentoWorkshop.Migrations
{
    /// <inheritdoc />
    public partial class Migration001 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Data",
                table: "WorkShops",
                newName: "DataRealizacao");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DataRealizacao",
                table: "WorkShops",
                newName: "Data");
        }
    }
}
