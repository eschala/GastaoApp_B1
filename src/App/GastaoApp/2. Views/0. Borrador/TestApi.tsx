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
import { GetATbUsers, User } from '../../1. Models/Functions/API Responses/GetATbUsers';


const columnHelper = createMRTColumnHelper<User>();

const columns = [
    columnHelper.accessor('idUser', {
        header: 'ID',
        size: 40,
    }),
    columnHelper.accessor('tipoUserId', {
        header: 'Tipo',
        size: 120,
    }),
    columnHelper.accessor('nameUser', {
        header: 'Nombre',
        size: 120,
    }),
    columnHelper.accessor('lastNameUser', {
        header: 'Apellido',
        size: 120,
    }),
    columnHelper.accessor('dniUser', {
        header: 'Cedula',
        size: 120,
    }),
    columnHelper.accessor('emailUser', {
        header: 'Correo',
        size: 120,
    }),
    columnHelper.accessor('passUser', {
        header: 'Contraseña',
        size: 120,
    }),

];

export const UsersTablePdf = () => {
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
    const data = GetATbUsers()
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
                    display: 'flex',
                    gap: '12px',
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

