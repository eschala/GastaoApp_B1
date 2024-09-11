

import { FormUpdateUsersBORRADOR } from '../2. READ/FormUpdateBorrador';
/* import { FormUpdateUsers } from './FormUpdateUsers'; */
import './UpdateUsersStyles.css';

/* import UserTypeControl from '../TypeUsers/UserTypeControl'; */
export function UpdateUsers() {

    return (<>
        <div className='update' style={{}} >

            {/*             {ContextTittle}

            <FormUpdateUsers /> */}
            {ContextTittle}
            <FormUpdateUsersBORRADOR />


        </div>
    </>);
}

export const ContextTittle = (
    <h1 className="text-dark">
        Editar
    </h1>
);


