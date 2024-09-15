
/* import { FindUserByID } from '../../../../../1. Models/Functions/API Responses/UserComponentOnTestFind'; */
import { FormUpdateUsersBORRADOR } from './FormUpdateBorrador';


import './UpdateUsersStyles.css';

/* import UserTypeControl from '../TypeUsers/UserTypeControl'; */
export function UpdateUsers() {

    return (<>
        <div className='update' style={{}} >

            {/*             {ContextTittle}

            <FormUpdateUsers /> */}
            {ContextTittle}
            {/* <FormUpdateUsers /> */}
            <p>UserContext</p>
            <FormUpdateUsersBORRADOR />
            {/* <FindUserByID /> */}

        </div>
    </>);
}

export const ContextTittle = (
    <h1 className="text-dark">
        {/* Editar */}
    </h1>
);


