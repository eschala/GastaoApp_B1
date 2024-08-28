
import { useState } from 'react';
import { Toggle } from '../../1. Models/GlobalVariables/GlobalVariables';
import './DefaultGastao.css';
import { CollapseGastaoSideBar } from '../../../../Components/Collapse/Collapse';
import { Outlet } from 'react-router';


export function DefaultGastao() {


    let [showSide, setShowSide] = useState(Toggle.SideBar.Show)

    const toggleSide_ = () => {
        setShowSide(!showSide)
        Toggle.SideBar.Show = showSide
        console.log("Toggle.SideBar.Show = " + !Toggle.SideBar.Show)
        console.log("Slide Showed = " + Toggle.SideBar.Show)
        console.log("Slide Hiden = " + !Toggle.SideBar.Show)
    }
    function SideBar() {
        return <div className={"DefaultGastao-sub-1 DefaultGastao-sub " + "d-flex flex-column"}>
            <h5>{"<sidebar/>"}</h5>
            <CollapseGastaoSideBar />
        </div>;
    }
    function Board() {
        return (
            <div className="DefaultGastao-sub-2 DefaultGastao-sub">
                <div className="DefaultGastao-sub-2-1">
                    <button onClick={() => { toggleSide_() }} className="hide btn btn-outline-dark">
                        {"<-"}
                    </button>

                </div>
                <div className="DefaultGastao-sub-2-2">

                    <h1>
                        {"<Gastao/>"}
                    </h1>
                    <button type="button" className='btn btn-outline-dark' onClick={() => console.clear()}>Limpiar Console</button>
                    {/* <h1>{"Toggle.SideBar.Show = " + Toggle.SideBar.Show}</h1> */}

                    <Outlet />
                </div>
            </div>
        );
    }



    return (<>
        <div style={{ backgroundColor: "gray" }} className="DefaultGastao">
            {showSide == true ? <SideBar /> : null}
            {<Board />}
        </div>
    </>);
}



