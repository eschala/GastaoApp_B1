// server/utils/db.ts
import mysql from 'mysql2/promise';
import type { Pool } from 'mysql2/promise';

// A veces TS necesita confirmar que esto es una Pool de Promesas
export const pool: Pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gastao_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});