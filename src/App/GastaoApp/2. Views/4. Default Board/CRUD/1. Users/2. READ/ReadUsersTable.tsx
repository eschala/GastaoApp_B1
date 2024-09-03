import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_Row,
    createMRTColumnHelper,
} from 'material-react-table';
import { Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { jsPDF } from 'jspdf'; //or use your library of choice here
import autoTable from 'jspdf-autotable';
import { GetATbUsers, User } from '../../../../../1. Models/Functions/API Responses/GetATbUsers';


const columnHelper = createMRTColumnHelper<User>();

const LoggedAdmin = !true

function difinedColumns(AdminLogged: boolean) {
    let columns: any;
    if (AdminLogged) {
        columns = [
            columnHelper.accessor('idUser', {
                header: 'ID',
                size: 25,
            }),
            columnHelper.accessor('tipoUserId', {
                header: 'Tipo',
                size: 90,
            }),
            columnHelper.accessor('nameUser', {
                header: 'Nombre',
                size: 90,
            }),
            columnHelper.accessor('lastNameUser', {
                header: 'Apellido',
                size: 90,
            }),
            columnHelper.accessor('dniUser', {
                header: 'Cedula',
                size: 90,
            }),
            columnHelper.accessor('emailUser', {
                header: 'Correo',
                size: 90,
            }),
            columnHelper.accessor('passUser', {
                header: 'Contraseña',
                size: 90,
            }),

        ];

    }
    else {

        columns = [
            columnHelper.accessor('idUser', {
                header: 'ID',
                size: 25,
            }),

            columnHelper.accessor('nameUser', {
                header: 'Nombre',
                size: 90,
            }),
            columnHelper.accessor('lastNameUser', {
                header: 'Apellido',
                size: 90,
            }),
            columnHelper.accessor('dniUser', {
                header: 'Cedula',
                size: 90,
            }),
            columnHelper.accessor('emailUser', {
                header: 'Correo',
                size: 90,
            }),


        ];

    }
    return columns;

}


const columns = difinedColumns(LoggedAdmin);

export const ReadUsersTable = () => {
    const handleExportRows = (rows: MRT_Row<User>[]) => {
        const doc = new jsPDF();
        const tableData = rows.map((row) => Object.values(row.original));
        const tableHeaders = columns.map((c: any) => c.header);

        autoTable(doc, {
            head: [tableHeaders],
            body: tableData,
        });

        doc.save('Users.pdf');
    };
    const data = GetATbUsers(LoggedAdmin)
    let sam = data.keys
    console.log(sam.toString)

    const table = useMaterialReactTable({
        columns,
        data,
        enableRowSelection: true,
        columnFilterDisplayMode: 'popover',
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',


        renderTopToolbarCustomActions: ({ table }) => (
            <Box
                sx={{
                    maxWidth: "100%",
                    display: 'flex',
                    gap: '6px',
                    padding: '5px',
                    flexWrap: 'wrap',

                }}
            >
                <Button
                    disabled={table.getPrePaginationRowModel().rows.length === 0}
                    //export all rows, including from the next page, (still respects filtering and sorting)
                    onClick={() =>
                        handleExportRows(table.getPrePaginationRowModel().rows)
                    }
                    startIcon={<FileDownloadIcon />}
                >
                    Exportar Todas las Filas
                </Button>
                <Button
                    disabled={table.getRowModel().rows.length === 0}
                    //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
                    onClick={() => handleExportRows(table.getRowModel().rows)}
                    startIcon={<FileDownloadIcon />}
                >
                    Exportar Pagina
                </Button>
                <Button
                    disabled={
                        !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
                    }
                    //only export selected rows
                    onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
                    startIcon={<FileDownloadIcon />}
                >
                    Exportar Filas Seleccionadas
                </Button>
            </Box>
        ),
    });

    return <MaterialReactTable table={table} />;
};

