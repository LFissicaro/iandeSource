using IandeBackend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IandeBackend.Data
{
    public class IandeContext : DbContext
    {
        public IandeContext(DbContextOptions<IandeContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<Cart_Product> Carts_Products { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Product>(entity =>
            {
                entity.ToTable("Products").HasKey(p => p.id);
            });

            builder.Entity<Cart>(entity =>
            {
                entity.ToTable("Carts").HasKey(c => c.id);
            });

            builder.Entity<User>(entity =>
            {
                entity.ToTable("Users").HasKey(u => u.id);
            });

            builder.Entity<ProductType>(entity =>
            {
                entity.ToTable("ProductTypes").HasKey(pt => pt.id);
            });

            //define que a entidade nao possui chave primaria
            builder.Entity<Cart_Product>(entity =>
            {
                entity.HasNoKey();
            });
        }
    }
}
