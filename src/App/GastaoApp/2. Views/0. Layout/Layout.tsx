import "./Layout.css"
export const Layout = () => {
    return (<>
        <div style={{ backgroundColor: "blueviolet" }} className="Layout container-fluid vh-100 vw-100">
            <div className="container-1-navbar container-layout">1.Navbar</div>
            <div className="container-2-board container-layout">2.Board</div>
            <div className="container-3-footer container-layout">3.Footer</div>
        </div>
    </>);
};
