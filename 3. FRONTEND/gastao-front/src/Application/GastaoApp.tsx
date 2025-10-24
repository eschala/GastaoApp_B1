// GastaoApp.jsx
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { Board } from "./3.Views/1. Sidebar/Pages/Board/Board";
import { Home } from "./3.Views/1. Sidebar/Pages/Home/Home";
import { About } from "./3.Views/1. Sidebar/Pages/About/About";
import { HomeUsuarios } from "./3.Views/1. Sidebar/Pages/Usuarios/HomeUsuarios";
import { CreateUsuario } from "./3.Views/1. Sidebar/Pages/Usuarios/CreateUsuario";
import { EditUsuario } from "./3.Views/1. Sidebar/Pages/Usuarios/EditUsuarios";
import { DeleteUsuario } from "./3.Views/1. Sidebar/Pages/Usuarios/DeleteUsuarios";
import { SearchUsuario } from "./3.Views/1. Sidebar/Pages/Usuarios/SearchUsuarios";
import { HomeRolDeUsuarios } from "./3.Views/1. Sidebar/Pages/RolDeUsuarios/HomeRolDeUsuarios";
import { CreateRolDeUsuarios } from "./3.Views/1. Sidebar/Pages/RolDeUsuarios/CreateRolDeUsuarios";
import { EditRolDeUsuarios } from "./3.Views/1. Sidebar/Pages/RolDeUsuarios/EditRolDeUsuarios";
import { DeleteRolDeUsuarios } from "./3.Views/1. Sidebar/Pages/RolDeUsuarios/DeleteRolDeUsuarios";
import { SearchRolDeUsuarios } from "./3.Views/1. Sidebar/Pages/RolDeUsuarios/SearchRolDeUsuarios";
import { useState } from "react";

// MainLayout.jsx - Versión con transición suave
function MainLayout() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };
    // Estilo para el contenedor principal (el que contiene la barra lateral y el contenido)
    const containerStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "row" as React.CSSProperties["flexDirection"],
        height: '90vh',
    };

    // Estilo para deslizar la barra lateral
    const sidebarStyle: React.CSSProperties = {
        backgroundColor: 'lightgray',
        padding: '10px',
        textAlign: 'center',
        width: isSidebarVisible ? '200px' : '30px', // El ancho cambia
        overflow: 'hidden', // Oculta el contenido cuando el ancho es 0
        transition: 'width 0.5s ease, padding 0.5s ease',
    };

    // Estilo para el contenedor principal que se ajusta
    const mainContentStyle = {
        padding: '20px',
        border: '1px solid gray',
        backgroundColor: 'white',
        flex: 1, // Esto hace que el contenedor ocupe el espacio restante
        transition: 'margin-left 0.5s ease',
        marginLeft: isSidebarVisible ? '0px' : '0px', // No se necesita, pero lo dejo aquí
    };

    return (
        <>
            <header style={{ backgroundColor: 'lightblue', padding: '10px', textAlign: 'center' }}>
                <nav>Gastao App</nav>
                <Link className="btn btn-success" style={{ margin: "0.5rem" }} to={"/home"}>Home</Link>
                <Link className="btn btn-success" style={{ margin: "0.5rem" }} to={"/about"}>About</Link>
                <Link className="btn btn-success" style={{ margin: "0.5rem", display: "none" }} to="/usuarios">Usuarios</Link>
                <Link className="btn btn-success" style={{ margin: "0.5rem", display: "none" }} to={"/"}>Board</Link>


            </header>
            <div style={containerStyle}>
                <aside className="mainAside" style={sidebarStyle}>
                    <button
                        className="toggleButton"
                        style={{ width: '100%', padding: '10px', cursor: 'pointer' }}
                        onClick={handleToggleSidebar}>
                        {isSidebarVisible ? "O" : "M"}
                    </button>
                    {/* Contenido de la barra lateral */}

                    <Link style={{ margin: "0.5rem", display: "block" }} to="/usuarios">Usuarios</Link>
                    <Link style={{ margin: "0.5rem", display: "block" }} to="/rol-de-usuarios">Rol de Usuarios</Link>
                </aside>
                <div className="mainContainer" style={mainContentStyle}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}
export function GastaoApp() {
    return (
        <BrowserRouter>
            <Routes>
                {/* La ruta padre "/" usa MainLayout como elemento */}
                {/* Todas las rutas anidadas dentro de esta se renderizarán en el <Outlet /> de MainLayout */}
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Board />} /> {/* Ruta por defecto para "/" */}
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="usuarios" element={<HomeUsuarios />}>
                        {/* Puedes poner un elemento por defecto para /usuarios si quieres */}
                        <Route index element={<div>Selecciona una opción de usuario</div>} />
                        <Route path="create" element={<CreateUsuario />} />
                        <Route path="edit" element={<EditUsuario />} />
                        <Route path="delete" element={<DeleteUsuario />} />
                        <Route path="search" element={<SearchUsuario />} />
                    </Route>
                        <Route path="rol-de-usuarios" element={<HomeRolDeUsuarios />}>
                            <Route index element={<div>Selecciona una opción de rol de usuario</div>} />
                            {/* Aquí puedes agregar rutas anidadas para rol de usuarios si es necesario */}
                            <Route path="create" element={<CreateRolDeUsuarios />} />
                            <Route path="edit" element={<EditRolDeUsuarios />} />
                            <Route path="delete" element={<DeleteRolDeUsuarios />} />
                            <Route path="search" element={<SearchRolDeUsuarios />} />
                        </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
