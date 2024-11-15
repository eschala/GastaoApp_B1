
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_Row,
    createMRTColumnHelper,
} from 'material-react-table';
import { Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { GetATbUsers, User } from '../../../../../1. Models/Functions/API Responses/GetATbUsers';

const columnHelper = createMRTColumnHelper<User>();

const LoggedAdmin = true;

function defineColumns(AdminLogged: boolean) {
    return AdminLogged ? [
        columnHelper.accessor('idUser', { header: 'ID', size: 25 }),
        columnHelper.accessor('dniUser', { header: 'Cédula', size: 90 }),
        columnHelper.accessor('nameUser', { header: 'Nombre', size: 90 }),
        columnHelper.accessor('lastNameUser', { header: 'Apellido', size: 90 }),
        columnHelper.accessor('emailUser', { header: 'Correo', size: 90 }),
        columnHelper.accessor('passUser', { header: 'Contraseña', size: 90 }),
        columnHelper.accessor('tipoUserId', { header: 'Tipo', size: 25 }),
    ] : [
        columnHelper.accessor('idUser', { header: 'ID', size: 25 }),
        columnHelper.accessor('dniUser', { header: 'Cédula', size: 90 }),
        columnHelper.accessor('nameUser', { header: 'Nombre', size: 90 }),
        columnHelper.accessor('lastNameUser', { header: 'Apellido', size: 90 }),
        columnHelper.accessor('emailUser', { header: 'Correo', size: 90 }),
    ];
}

export const ReadUsersTable = () => {
    const ATbUsers = GetATbUsers(LoggedAdmin); // Desestructuración correcta
    const columns = defineColumns(LoggedAdmin);

    const handleExportRows = (rows: MRT_Row<User>[]) => {
        const doc = new jsPDF();
        const tableData = rows.map((row) => Object.values(row.original));
        const tableHeaders = columns.map((c) => c.header);

        autoTable(doc, {
            head: [tableHeaders],
            body: tableData,
        });

        doc.save('Users.pdf');
    };


    const table = useMaterialReactTable({
        columns,
        data: ATbUsers,
        enableRowSelection: true,
        columnFilterDisplayMode: 'popover',
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        editDisplayMode: 'modal',
        enableEditing: true,

        renderTopToolbarCustomActions: ({ table }) => (
            <Box
                sx={{
                    maxWidth: "90%",
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
