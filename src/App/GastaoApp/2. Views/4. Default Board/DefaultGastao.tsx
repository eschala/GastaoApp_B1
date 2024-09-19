
/* import './DefaultGastao.css'; */

import { Outlet } from 'react-router';
import { Child } from '../../1. Models/Types/Types';

export function DefaultGastao({ children }: Child | any) {

    return (<>
        <div style={{}} className="DefaultGastao">

            <Board />
        </div>
    </>);
}

function Board({ children }: Child | any) {
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

