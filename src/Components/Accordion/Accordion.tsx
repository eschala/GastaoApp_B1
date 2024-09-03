
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CreateRoute, DefaultGastaoRoute, DeleteRoute, ReadRoute, ReportRoute, UpdateRoute, UsersRoute } from '../../App/GastaoApp/1. Models/Routes/PathRoutes';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/material/IconButton';




export default function AccordionUsage() {
    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Usuarios
                </AccordionSummary>
                <AccordionDetails style={{ display: "flex", flexDirection: "column", width: "100%" }}>


                    <Link to={DefaultGastaoRoute.Path + "/" + UsersRoute.Path + "/" + CreateRoute.Path}>

                        <Button color='inherit' variant='contained' style={{ flex: 1, backgroundColor: "yellow" }} startIcon={

                            <DeleteIcon />

                        }>
                            Crear
                        </Button>
                    </Link>
                    <Link style={{ flex: 1, }} to={DefaultGastaoRoute.Path + "/" + UsersRoute.Path + "/" + UpdateRoute.Path}>

                        <Button color='primary' variant='contained' style={{ flex: 1, }} startIcon={

                            <DeleteIcon />

                        }>
                            Editar
                        </Button>
                    </Link>


                    <Link to={DefaultGastaoRoute.Path + "/" + UsersRoute.Path + "/" + DeleteRoute.Path}>

                        <Button color='error' variant='contained' style={{ flex: 1, }} startIcon={

                            <DeleteIcon />

                        }>
                            Eliminar
                        </Button>
                    </Link>

                    <Link to={DefaultGastaoRoute.Path + "/" + UsersRoute.Path + "/" + ReadRoute.Path}>

                        <Button color='secondary' variant='contained' style={{ flex: 1, backgroundColor: "gray" }} startIcon={

                            <DeleteIcon />

                        }>
                            Consultar
                        </Button>
                    </Link>
                    <Link to={DefaultGastaoRoute.Path + "/" + UsersRoute.Path + "/" + ReportRoute.Path}>

                        <Button color='info' variant='contained' style={{ flex: 1, }} startIcon={

                            <DeleteIcon />

                        }>
                            Informes
                        </Button>
                    </Link>
                </AccordionDetails>
            </Accordion >
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Ingresos
                </AccordionSummary>
                <AccordionDetails>
                    {"<List/>"}
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    Egresos
                </AccordionSummary>
                <AccordionDetails>
                    {"<List/>"}
                </AccordionDetails>

            </Accordion>
        </>
    );
}
