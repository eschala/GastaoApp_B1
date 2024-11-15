using System;
using System.Collections.Generic;
using Gastao_B2.Data.Models;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;

namespace Gastao_B2.Data;

public partial class GastaoContext : DbContext
{
    public GastaoContext()
    {
    }

    public GastaoContext(DbContextOptions<GastaoContext> options)
        : base(options)
    {
    }

    public virtual DbSet<ATbUser> ATbUsers { get; set; }

    public virtual DbSet<AzTbTipoUser> AzTbTipoUsers { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_general_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<ATbUser>(entity =>
        {
            entity.HasKey(e => e.IdUser).HasName("PRIMARY");

            entity.ToTable("a_tb_users");

            entity.HasIndex(e => e.DniUser, "DNI_User").IsUnique();

            entity.HasIndex(e => e.IdUser, "ID_User").IsUnique();

            entity.HasIndex(e => e.TipoUserId, "Tipo_User_Id");

            entity.Property(e => e.IdUser)
                .HasColumnType("bigint(20)")
                .HasColumnName("ID_User");
            entity.Property(e => e.DniUser)
                .HasColumnType("bigint(20)")
                .HasColumnName("DNI_User");
            entity.Property(e => e.EmailUser)
                .HasColumnType("text")
                .HasColumnName("Email_User");
            entity.Property(e => e.LastNameUser)
                .HasColumnType("text")
                .HasColumnName("LastName_User");
            entity.Property(e => e.NameUser)
                .HasColumnType("text")
                .HasColumnName("Name_User");
            entity.Property(e => e.TipoUserId)
                .HasColumnType("bigint(20)")
                .HasColumnName("Tipo_User_Id");

            entity.HasOne(d => d.TipoUser).WithMany(p => p.ATbUsers)
                .HasForeignKey(d => d.TipoUserId)
                .HasConstraintName("a_tb_users_ibfk_1");
        });

        modelBuilder.Entity<AzTbTipoUser>(entity =>
        {
            entity.HasKey(e => e.IdTipoUser).HasName("PRIMARY");

            entity.ToTable("az_tb_tipo_users");

            entity.Property(e => e.IdTipoUser)
                .HasColumnType("bigint(20)")
                .HasColumnName("ID_Tipo_User");
            entity.Property(e => e.TipoUser)
                .HasMaxLength(255)
                .IsFixedLength()
                .HasColumnName("Tipo_User");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
