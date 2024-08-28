
import { useState } from 'react';
import { Toggle } from '../../1. Models/GlobalVariables/GlobalVariables';
import './DefaultGastao.css';


export function DefaultGastao() {
    let displayMode: string

    const [showSide, setShowSide] = useState(false)
    const toggleSide_ = () => {
        setShowSide(!showSide)

        if (showSide)
            displayMode = "d-flex"
        else
            displayMode = "d-none"

    }
    function SideBar() {
        return <div className={"DefaultGastao-sub-1 DefaultGastao-sub " + { displayMode }}>
            <h1>{"<sidebar/>"}</h1>
        </div>;
    }
    function Board() {
        return (
            <div className="DefaultGastao-sub-2 DefaultGastao-sub">
                <button onClick={() => { toggleSide_() }} className="hide btn btn-outline-dark">
                    {"<-"}
                </button>
                <h1>
                    {"<Gastao/>"}
                </h1>
                <button type="button" className='btn btn-outline-dark' onClick={() => console.clear()}>Limpiar Console</button>
                <h1>{"Toggle.SideBar.Show = " + !Toggle.SideBar.Show}</h1>
            </div>
        );
    }


    console.log("Toggle.SideBar.Show = " + !Toggle.SideBar.Show)
    return (<>
        <div style={{ backgroundColor: "gray" }} className="DefaultGastao">
            {!showSide == true ? <SideBar /> : null}
            {<Board />}
        </div>
    </>);
}



