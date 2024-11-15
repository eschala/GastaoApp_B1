import { Outlet } from 'react-router';

export function DefaultGastao() {

    return (<>
        <div style={{}} className="DefaultGastao">

            <Board />
        </div>
    </>);
}

function Board() {
    return (
        <div className="DefaultGastao-sub-2 DefaultGastao-sub">
            <div className="DefaultGastao-sub-2-1">
                <h1>Gastao</h1>
            </div>
            <div className="DefaultGastao-sub-2-2">
                <Outlet />
            </div>
        </div>
    );
}

