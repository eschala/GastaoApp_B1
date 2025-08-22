// GastaoApp.jsx
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { CreateUsuario } from "./Pages/Usuarios/CreateUsuario";
import { EditUsuario } from "./Pages/Usuarios/EditUsuarios";
import { DeleteUsuario } from "./Pages/Usuarios/DeleteUsuarios";
import { SearchUsuario } from "./Pages/Usuarios/SearchUsuarios";
import { HomeUsuarios } from "./Pages/Usuarios/HomeUsuarios";
import { Board } from "./Pages/Board/Board"; // Asumimos que Board es tu layout principal o un componente de página.
import { About } from "./Pages/About/About";
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
        height: '85vh',
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
        backgroundColor: 'lightpink',
        flex: 1, // Esto hace que el contenedor ocupe el espacio restante
        transition: 'margin-left 0.5s ease',
        marginLeft: isSidebarVisible ? '0px' : '0px', // No se necesita, pero lo dejo aquí
    };

    return (
        <>
            <header style={{ backgroundColor: 'lightblue', padding: '10px', textAlign: 'center' }}>
                <nav>Gastao App</nav>
                <Link style={{ margin: "0.5rem" }} to={"/home"}>Home</Link>
                <Link style={{ margin: "0.5rem" }} to={"/about"}>About</Link>
                <Link style={{ margin: "0.5rem", display: "none" }} to="/usuarios">Usuarios</Link>
                <Link style={{ margin: "0.5rem", display: "none" }} to={"/"}>Board</Link>


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
                    <Route path="usuarios" element={<HomeUsuarios />} >
                        {/* Puedes poner un elemento por defecto para /usuarios si quieres */}
                        <Route index element={<div>Selecciona una opción de usuario</div>} />
                        <Route path="create" element={<CreateUsuario />}></Route>
                        <Route path="edit" element={<EditUsuario />}></Route>
                        <Route path="delete" element={<DeleteUsuario />}></Route>
                        <Route path="search" element={<SearchUsuario />}></Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}