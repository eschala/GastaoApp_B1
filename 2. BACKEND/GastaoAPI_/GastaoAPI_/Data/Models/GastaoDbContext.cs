using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace GastaoAPI_.Data.Models;

public partial class GastaoDbContext : DbContext
{
    public GastaoDbContext()
    {
    }

    public GastaoDbContext(DbContextOptions<GastaoDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Egreso> Egresos { get; set; }

    public virtual DbSet<Ingreso> Ingresos { get; set; }

    public virtual DbSet<RolDeUsuario> RolDeUsuarios { get; set; }

    public virtual DbSet<TypeEgreso> TypeEgresos { get; set; }

    public virtual DbSet<TypeIngreso> TypeIngresos { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

/*
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=Gastao_Db;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True;");
 
 */
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Egreso>(entity =>
        {
            entity.HasKey(e => e.IdEgreso).HasName("PK__Egresos__7CD4008BEF9ED587");

            entity.Property(e => e.IdEgreso).HasColumnName("Id_Egreso");
            entity.Property(e => e.AmountEgreso).HasColumnName("Amount_Egreso");
            entity.Property(e => e.DescriptionEgreso).HasColumnName("Description_Egreso");
            entity.Property(e => e.RegDateEgreso)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("Reg_Date_Egreso");
            entity.Property(e => e.TittleEgreso)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("Tittle_Egreso");
            entity.Property(e => e.TypeEgresoId).HasColumnName("Type_Egreso_Id");
            entity.Property(e => e.UsuarioIdE).HasColumnName("Usuario_Id_E");
            entity.Property(e => e.ValueEgreso).HasColumnName("Value_Egreso");

            entity.HasOne(d => d.TypeEgreso).WithMany(p => p.Egresos)
                .HasForeignKey(d => d.TypeEgresoId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Egresos__Type_Eg__403A8C7D");

            entity.HasOne(d => d.UsuarioIdENavigation).WithMany(p => p.Egresos)
                .HasForeignKey(d => d.UsuarioIdE)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Egresos__Usuario__412EB0B6");
        });

        modelBuilder.Entity<Ingreso>(entity =>
        {
            entity.HasKey(e => e.IdIngreso).HasName("PK__Ingresos__9A87CCD95B7B057E");

            entity.Property(e => e.IdIngreso).HasColumnName("Id_Ingreso");
            entity.Property(e => e.AmountIngreso).HasColumnName("Amount_Ingreso");
            entity.Property(e => e.DescriptionIngreso).HasColumnName("Description_Ingreso");
            entity.Property(e => e.RegDateIngreso)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("Reg_Date_Ingreso");
            entity.Property(e => e.TittleIngreso)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("Tittle_Ingreso");
            entity.Property(e => e.TypeIngresoId).HasColumnName("Type_Ingreso_Id");
            entity.Property(e => e.UsuarioIdI).HasColumnName("Usuario_Id_I");
            entity.Property(e => e.ValueIngreso).HasColumnName("Value_Ingreso");

            entity.HasOne(d => d.TypeIngreso).WithMany(p => p.Ingresos)
                .HasForeignKey(d => d.TypeIngresoId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Ingresos__Type_I__46E78A0C");

            entity.HasOne(d => d.UsuarioIdINavigation).WithMany(p => p.Ingresos)
                .HasForeignKey(d => d.UsuarioIdI)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Ingresos__Usuari__47DBAE45");
        });

        modelBuilder.Entity<RolDeUsuario>(entity =>
        {
            entity.HasKey(e => e.IdRolUsuario).HasName("PK__Rol_De_U__49DB9EB8AC0B54C6");

            entity.ToTable("Rol_De_Usuarios");

            entity.Property(e => e.IdRolUsuario).HasColumnName("Id_Rol_Usuario");
            entity.Property(e => e.RolDeUsuario1)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("Rol_De_Usuario");
        });

        modelBuilder.Entity<TypeEgreso>(entity =>
        {
            entity.HasKey(e => e.IdTypeEgreso).HasName("PK__Type_Egr__3AAE68663047DC2F");

            entity.ToTable("Type_Egresos");

            entity.Property(e => e.IdTypeEgreso).HasColumnName("Id_Type_Egreso");
            entity.Property(e => e.TypeEgreso1)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("Type_Egreso");
        });

        modelBuilder.Entity<TypeIngreso>(entity =>
        {
            entity.HasKey(e => e.IdTypeIngreso).HasName("PK__Type_Ing__5AB0C1E10990C65E");

            entity.ToTable("Type_Ingresos");

            entity.Property(e => e.IdTypeIngreso).HasColumnName("Id_Type_Ingreso");
            entity.Property(e => e.TypeIngreso1)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("Type_Ingreso");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario).HasName("PK__Usuarios__63C76BE2EA994BF9");

            entity.HasIndex(e => e.DniUsuario, "UQ__Usuarios__25A9C8D9B00EBCA4").IsUnique();

            entity.Property(e => e.IdUsuario).HasColumnName("Id_Usuario");
            entity.Property(e => e.DniUsuario).HasColumnName("Dni_Usuario");
            entity.Property(e => e.EmailUsuario)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("Email_Usuario");
            entity.Property(e => e.LastNameUsuario)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("Last_Name_Usuario");
            entity.Property(e => e.NameUsuario)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("Name_Usuario");
            entity.Property(e => e.PassUsuario)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("Pass_Usuario");
            entity.Property(e => e.RolUsuarioId).HasColumnName("Rol_Usuario_Id");

            entity.HasOne(d => d.RolUsuario).WithMany(p => p.Usuarios)
                .HasForeignKey(d => d.RolUsuarioId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Usuarios__Rol_Us__3A81B327");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
