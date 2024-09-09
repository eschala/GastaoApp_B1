

import { FormUpdateUsers } from './FormUpdateUsers';
import './UpdateUsersStyles.css';

/* import UserTypeControl from '../TypeUsers/UserTypeControl'; */
export function UpdateUsers() {

    return (<>
        <div className='update' style={{}} >

            {ContextTittle}

            <FormUpdateUsers />


        </div>
    </>);
}

export const ContextTittle = (
    <h1 className="text-dark">
        Editar
    </h1>
);


