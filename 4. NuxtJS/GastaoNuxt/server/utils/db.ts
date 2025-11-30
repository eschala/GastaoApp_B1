// server/utils/db.ts
import { PrismaClient } from '@prisma/client'

// Inicializa el cliente (solo una vez)
const prisma = new PrismaClient()

// Exporta para usarlo en otras rutas
export default prisma