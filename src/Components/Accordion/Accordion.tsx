
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CreateRoute, DefaultGastaoRoute, DeleteRoute, ReadRoute, ReportRoute, UpdateRoute, UsersRoute } from '../../App/GastaoApp/1. Models/Routes/PathRoutes';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
/* import DeleteIcon from '@mui/material/IconButton'; */
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function AccordionUsage() {
    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <PersonIcon />
                    Usuarios
                </AccordionSummary>
                <AccordionDetails style={{ display: "flex", flexDirection: "column", minWidth: "100px", border: "1px solid black" }}>
                    <div className="" style={{ display: "flex", flexDirection: "column", maxWidth: "140px", border: "1px solid black" }}>


                        <Link style={{ width: "100%" }} to={DefaultGastaoRoute.Path + "/" + UsersRoute.Path + "/" + CreateRoute.Path}>

                            <Button variant='outlined' style={{ backgroundColor: "", width: "100%" }} startIcon={

                                <AddCircleIcon />
                            }>
                                Crear
                            </Button>
                        </Link>
                        <Link style={{ width: "100%", }} to={DefaultGastaoRoute.Path + "/" + UsersRoute.Path + "/" + UpdateRoute.Path}>

                            <Button variant='outlined' style={{ width: "100%", }} startIcon={

                                <EditIcon />

                            }>
                                Editar
                            </Button>
                        </Link>


                        <Link to={DefaultGastaoRoute.Path + "/" + UsersRoute.Path + "/" + DeleteRoute.Path}>

                            <Button variant='outlined' style={{ width: "100%", }} startIcon={

                                <DeleteIcon />

                            }>
                                Eliminar
                            </Button>
                        </Link>

                        <Link to={DefaultGastaoRoute.Path + "/" + UsersRoute.Path + "/" + ReadRoute.Path}>

                            <Button variant='outlined' style={{ width: "100%", backgroundColor: "" }} startIcon={

                                <SearchIcon />

                            }>
                                Consultar
                            </Button>
                        </Link>
                        <Link to={DefaultGastaoRoute.Path + "/" + UsersRoute.Path + "/" + ReportRoute.Path}>

                            <Button variant='outlined' style={{ width: "100%", }} startIcon={

                                <AssignmentIcon />

                            }>
                                Informes
                            </Button>
                        </Link>
                    </div>
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
