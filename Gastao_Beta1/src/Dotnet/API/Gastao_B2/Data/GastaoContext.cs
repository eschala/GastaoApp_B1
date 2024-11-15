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

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=127.0.0.1;port=3306;database=gastao;uid=GastaoApiUser;pwd=Yondaime29", ServerVersion.Parse("10.4.32-mariadb"));

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

            entity.HasIndex(e => e.EmailUser, "Email_User").IsUnique();

            entity.Property(e => e.IdUser)
                .HasColumnType("bigint(20) unsigned")
                .HasColumnName("Id_User");
            entity.Property(e => e.DniUser)
                .HasColumnType("bigint(20)")
                .HasColumnName("DNI_User");
            entity.Property(e => e.EmailUser).HasColumnName("Email_User");
            entity.Property(e => e.LastNameUser)
                .HasMaxLength(255)
                .HasColumnName("LastName_User");
            entity.Property(e => e.NameUser)
                .HasMaxLength(255)
                .HasColumnName("Name_User");
            entity.Property(e => e.PassUser)
                .HasMaxLength(255)
                .HasColumnName("Pass_User");
            entity.Property(e => e.TipoUserId)
                .HasColumnType("bigint(20)")
                .HasColumnName("Tipo_User_Id");
        });

        modelBuilder.Entity<AzTbTipoUser>(entity =>
        {
            entity.HasKey(e => e.IdTipoUser).HasName("PRIMARY");

            entity.ToTable("az_tb_tipo_users");

            entity.Property(e => e.IdTipoUser)
                .HasColumnType("bigint(20) unsigned")
                .HasColumnName("Id_Tipo_User");
            entity.Property(e => e.TipoUser)
                .HasMaxLength(255)
                .HasColumnName("Tipo_User");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
