-- CreateTable
CREATE TABLE `rol_de_usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rol` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dni_usuario` INTEGER NOT NULL,
    `name_usuario` VARCHAR(255) NOT NULL,
    `last_name_usuario` VARCHAR(255) NULL,
    `email_usuario` VARCHAR(255) NOT NULL,
    `pass_usuario` VARCHAR(255) NOT NULL,
    `rol_id` INTEGER NOT NULL,

    UNIQUE INDEX `usuarios_dni_usuario_key`(`dni_usuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `type_egresos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type_egreso` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `egresos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reg_date_egreso` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tittle_egreso` VARCHAR(255) NOT NULL,
    `description_egreso` TEXT NULL,
    `amount_egreso` INTEGER NULL,
    `value_egreso` FLOAT NOT NULL,
    `type_egreso_id` INTEGER NOT NULL,
    `usuario_Id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `type_ingresos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type_ingreso` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ingresos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reg_date_ingreso` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tittle_ingreso` VARCHAR(255) NOT NULL,
    `description_ingreso` TEXT NULL,
    `amount_ingreso` INTEGER NULL,
    `value_ingreso` FLOAT NOT NULL,
    `type_ingreso_id` INTEGER NOT NULL,
    `usuario_Id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_rol_id_fkey` FOREIGN KEY (`rol_id`) REFERENCES `rol_de_usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `egresos` ADD CONSTRAINT `egresos_type_egreso_id_fkey` FOREIGN KEY (`type_egreso_id`) REFERENCES `type_egresos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `egresos` ADD CONSTRAINT `egresos_usuario_Id_fkey` FOREIGN KEY (`usuario_Id`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ingresos` ADD CONSTRAINT `ingresos_type_ingreso_id_fkey` FOREIGN KEY (`type_ingreso_id`) REFERENCES `type_ingresos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ingresos` ADD CONSTRAINT `ingresos_usuario_Id_fkey` FOREIGN KEY (`usuario_Id`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
