
import { MaterialReactTable, MRT_ColumnDef, useMaterialReactTable } from "material-react-table";
import { useMemo } from "react";
import { GetATbUsers, User } from "../../1. Models/Functions/API Responses/GetATbUsers";

export function UsersTable() {

    const data = GetATbUsers(true)
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

    return <MaterialReactTable table={table} />;

}