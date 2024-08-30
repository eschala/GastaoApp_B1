//mock data - strongly typed if you are using TypeScript (optional, but recommended)

/* Api: https://localhost:44318/api/ATbUsers Modelo de Usuarios de la tabla "ATbUsers" */
import { MaterialReactTable, MRT_ColumnDef, useMaterialReactTable } from "material-react-table";
import { useMemo } from "react";
import { GetATbUsers, User } from "../../1. Models/Functions/API Responses/GetATbUsers";


export function UsersTable() {
    //column definitions - strongly typed if you are using TypeScript (optional, but recommended)
    const data = GetATbUsers()
    let sam = data.keys
    console.log(sam.toString)

    const columns = useMemo<MRT_ColumnDef<User>[]>(
        () => [
            {
                accessorKey: 'idUser', //simple recommended way to define a column
                header: 'ID',
                muiTableHeadCellProps: { style: { color: 'green' } }, //custom props
                enableHiding: false, //disable a feature for this column
            },
            {
                accessorKey: 'tipoUserId', //simple recommended way to define a column
                header: 'Tipo ID',
                muiTableHeadCellProps: { style: { color: 'black' } }, //custom props
                enableHiding: false, //disable a feature for this column
            },
            {
                accessorKey: 'nameUser', //simple recommended way to define a column
                header: 'Nombre',
                muiTableHeadCellProps: { style: { color: 'black' } }, //custom props
                enableHiding: false, //disable a feature for this column
            },
            {
                accessorKey: 'lastNameUser', //simple recommended way to define a column
                header: 'Apellido',
                muiTableHeadCellProps: { style: { color: 'black' } }, //custom props
                enableHiding: false, //disable a feature for this column
            },
            {
                accessorKey: 'dniUser', //simple recommended way to define a column
                header: 'Cedula',
                muiTableHeadCellProps: { style: { color: 'black' } }, //custom props
                enableHiding: false, //disable a feature for this column
            },
            {
                accessorKey: 'emailUser', //simple recommended way to define a column
                header: 'Correo',
                muiTableHeadCellProps: { style: { color: 'blue' } }, //custom props
                enableHiding: false, //disable a feature for this column
            },
            {
                accessorKey: 'passUser', //simple recommended way to define a column
                header: 'Contraseña',
                muiTableHeadCellProps: { style: { color: 'black' } }, //custom props
                enableHiding: false, //disable a feature for this column
            },

        ],
        [],
    );

    //pass table options to useMaterialReactTable
    const table = useMaterialReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableRowSelection: true, //enable some features
        enableColumnOrdering: true, //enable a feature for all columns
        enableGlobalFilter: true, //turn off a feature
    });

    //note: you can also pass table options as props directly to <MaterialReactTable /> instead of using useMaterialReactTable
    //but the useMaterialReactTable hook will be the most recommended way to define table options
    return <MaterialReactTable table={table} />;

}

/* ¿Cómo hago para convertir los datos traidos por una peticion GET a la Api: https://localhost:44318/api/ATbUsers Modelo de Usuarios de la tabla "ATbUsers la variable "data" ?" */