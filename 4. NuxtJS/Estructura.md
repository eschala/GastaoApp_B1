server/
├── utils/
│   └── db.ts                <-- Conexión a la BD
├── services/                <-- CAPA DE SERVICIOS (Lógica SQL)
│   ├── egresosService.ts
│   └── usuariosService.ts
└── api/                     <-- CAPA DE CONTROLADORES (Rutas)
    └── egresos/
        ├── index.get.ts     <-- Obtener todos
        ├── index.post.ts    <-- Crear
        ├── [id].get.ts      <-- Obtener uno
        ├── [id].put.ts      <-- Actualizar
        └── [id].delete.ts   <-- Eliminar