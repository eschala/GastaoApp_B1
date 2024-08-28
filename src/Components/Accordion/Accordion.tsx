import { Accordion } from "react-bootstrap";
import { LinkButton } from "../Buttons/LinkButton";
import { CreateRoute, DeleteRoute, IngresosRoute, ReadRoute, UpdateRoute } from "../../App/GastaoApp/1. Models/Routes/PathRoutes";


export function AccordionBootstrap() {
    return (
        <Accordion defaultActiveKey="-1" style={{ overflow: "auto" }}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Usuarios</Accordion.Header>
                <Accordion.Body>
                    Usuarios
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" >
                <Accordion.Header className="">Ingresos</Accordion.Header>
                <Accordion.Body className='overflow d-flex flex-column justify-content-center bg-light'>
                    <LinkButton to={"/Gastao/Ingresos/Create"} className={"button-sidebar"} context="Crear Nuevo" />

                </Accordion.Body>
                <Accordion.Body className='overflow d-flex flex-column justify-content-center bg-light'>
                    <LinkButton to={"/Gastao/Ingresos/Read"} className={"button-sidebar"} context="Buscar / Consultar" />

                </Accordion.Body>
                <Accordion.Body className='overflow d-flex flex-column justify-content-center bg-light'>
                    <LinkButton to={"/Gastao/Ingresos/Update"} className={"button-sidebar"} context="Editar / Actualizar" />

                </Accordion.Body>
                <Accordion.Body className='overflow d-flex flex-column justify-content-center bg-light'>
                    <LinkButton to={"/Gastao/Ingresos/Delete"} className={"button-sidebar"} context="Eliminar" />

                </Accordion.Body>
                <Accordion.Body className='overflow d-flex flex-column justify-content-center bg-light'>
                    <LinkButton to={"/Gastao/Ingresos/Report"} className={"button-sidebar"} context="Ver Informe" />

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Egresos</Accordion.Header>
                <Accordion.Body className='overflow d-flex flex-column justify-content-center bg-light'>
                    <LinkButton to={"/Gastao/Egresos/Create"} className={"button-sidebar"} context="Crear Nuevo" />

                </Accordion.Body>
                <Accordion.Body className='overflow d-flex flex-column justify-content-center bg-light'>
                    <LinkButton to={"/Gastao/Egresos/Read"} className={"button-sidebar"} context="Buscar / Consultar" />

                </Accordion.Body>
                <Accordion.Body className='overflow d-flex flex-column justify-content-center bg-light'>
                    <LinkButton to={"/Gastao/Egresos/Update"} className={"button-sidebar"} context="Editar / Actualizar" />

                </Accordion.Body>
                <Accordion.Body className='overflow d-flex flex-column justify-content-center bg-light'>
                    <LinkButton to={"/Gastao/Egresos/Delete"} className={"button-sidebar"} context="Eliminar" />

                </Accordion.Body>
                <Accordion.Body className='overflow d-flex flex-column justify-content-center bg-light'>
                    <LinkButton to={"/Gastao/Egresos/Report"} className={"button-sidebar"} context="Ver Informe" />

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}