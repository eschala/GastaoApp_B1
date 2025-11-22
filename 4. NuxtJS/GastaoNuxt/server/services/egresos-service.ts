import { pool } from "../utils/db";
import type { RowDataPacket, ResultSetHeader } from "mysql2/promise";

// Interfaz de datos
interface EgresoData {
    ID?: number; // Opcional porque al crear no lo tienes
    tittle_egreso?: string;
    description_egreso?: string;
    amount_egreso?: number;
    value_egreso?: number;
    type_egreso_id?: number;
    usuario_Id?: number;
}

export const EgresosService = {
    // GET ALL
    async findAll() {
        // Especificamos que el resultado es un array de filas (RowDataPacket[])
        const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM egresos');
        return rows;
    },

    // GET BY ID
    async findById(id: number) {
        const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM egresos WHERE ID = ?', [id]);
        return rows[0] || null;
    },

    // CREATE
    async create(data: EgresoData) {
        const sql = `
            INSERT INTO egresos (tittle_egreso, description_egreso, amount_egreso, value_egreso, type_egreso_id, usuario_Id, reg_date_egreso)
            VALUES (?, ?, ?, ?, ?, ?, NOW())
        `;
        const values = [
            data.tittle_egreso,
            data.description_egreso,
            data.amount_egreso,
            data.value_egreso,
            data.type_egreso_id,
            data.usuario_Id
        ];

        // Usamos ResultSetHeader para obtener insertId
        const [result] = await pool.execute<ResultSetHeader>(sql, values);
        return { id: result.insertId, ...data };
    },

    // UPDATE
    async update(id: number, data: Partial<EgresoData>) {
        // OJO: Tu query original sobreescribirá con NULL si los datos no vienen en el body.
        // Esta es una versión más segura que solo actualiza lo que envíes:
        const updates: string[] = [];
        const values: any[] = [];

        // 1. Validamos TODOS los campos posibles de la interfaz
        if (data.tittle_egreso !== undefined) {
            updates.push('tittle_egreso = ?');
            values.push(data.tittle_egreso);
        }
        if (data.description_egreso !== undefined) {
            updates.push('description_egreso = ?');
            values.push(data.description_egreso);
        }
        if (data.value_egreso !== undefined) {
            updates.push('value_egreso = ?');
            values.push(data.value_egreso);
        }
        if (data.amount_egreso !== undefined) {
            updates.push('amount_egreso = ?');
            values.push(data.amount_egreso);
        }
        if (data.type_egreso_id !== undefined) {
            updates.push('type_egreso_id = ?');
            values.push(data.type_egreso_id);
        }
        if (data.usuario_Id !== undefined) {
            updates.push('usuario_Id = ?');
            values.push(data.usuario_Id);
        }
        if (updates.length === 0) return { message: 'Nada que actualizar' };

        // Añadimos el ID al final para el WHERE
        values.push(id);

        const sql = `UPDATE egresos SET ${updates.join(', ')} WHERE ID = ?`;

        await pool.execute<ResultSetHeader>(sql, values);
        return { id, message: 'Actualizado correctamente' };
    },

    // DELETE
    async remove(id: number) {
        await pool.execute<ResultSetHeader>('DELETE FROM egresos WHERE ID = ?', [id]);
        return { message: 'Eliminado correctamente' };
    }
};