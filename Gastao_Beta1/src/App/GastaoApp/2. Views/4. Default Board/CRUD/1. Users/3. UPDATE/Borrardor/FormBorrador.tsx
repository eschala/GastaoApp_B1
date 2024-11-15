
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { useContext, useEffect, useState } from 'react';
import { FilterInput, UsersContext } from '../../../../../../3. Contexts/UsersFiltersContext';
import { UpdateDialogForm, } from '../DialogFormUpdate';
import { TipoUser } from '../../../../../../1. Models/Functions/API Responses/GetAzTbTipoUsers';
import { User } from '../../../../../../1. Models/Functions/API Responses/GetATbUsers';

let data: User | undefined
export function FormUpdateUsersBORRADOR_2() {

    const { GetFirstUserFiltered, dataTypeUser, GetUsersFiltered, GetFirstUser, indexCurrent, setIndexCurrent, handelControlChange,
        currentUserU,
        setCurrentUserU,
        countChangesFilterInput,
        ChangeCountNavigateButtons,
        countNavigateButtons,
        totalUsersLength,

    } = useContext(UsersContext)

    /* console.log("GetUsersFiltered_Var[0]", [GetUsersFiltered_Var[0]]) */

    const [usuarioDatoFiltradoActual, setUsuarioDatoFiltradoActual] = useState<User | undefined>()
    /* const [usuariosDatosFiltrados, setUsuariosDatosFiltrados] = useState<User[] | undefined>(GetUsersFiltered_Var) */
    /* const [firstRegNotNULL, setFirstRegNotNULL] = useState(usuarioDatoFiltradoActual === null || usuarioDatoFiltradoActual === undefined) */
    /* const [firstRegNotNULL, setFirstRegNotNULL] = useState(true) */

    useEffect(() => {
        if (usuarioDatoFiltradoActual == null) {
            /* setFirstRegNotNULL(false) */
        }
    })

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (GetUsersFiltered[0] == null || GetUsersFiltered[0] == undefined) {

            console.log("useEffect [indexCurrent]", `[${indexCurrent}]`)

            console.log("totalUsersLength === " + totalUsersLength)

            data = GetUsersFiltered[0]
            setUsuarioDatoFiltradoActual(data)
            setCurrentUserU(data)
            /* userCurrentUpdate(data) */
            console.log("data", data)
        }

    })

    useEffect(() => {
        console.log("useEffect [indexCurrent]", `[${indexCurrent}]`)

        console.log("totalUsersLength === " + totalUsersLength)

        data = GetUsersFiltered[indexCurrent]
        setUsuarioDatoFiltradoActual(data)
        setCurrentUserU(data)
        /* setFirstRegNotNULL(true) */
        /* userCurrentUpdate(data) */
        console.log("data", data)


    }, [indexCurrent, countChangesFilterInput])

    const handleFirst = () => { setIndexCurrent(0); ChangeCountNavigateButtons() };
    const handlePrevious = () => { setIndexCurrent(prevIndex => Math.max(prevIndex - 1, 0)); ChangeCountNavigateButtons() };
    const handleNext = () => { setIndexCurrent(prevIndex => Math.min(prevIndex + 1, GetUsersFiltered.length - 1)); ChangeCountNavigateButtons() };
    const handleLast = () => { setIndexCurrent(GetUsersFiltered.length - 1); ChangeCountNavigateButtons() };

    const handleChangeValueUpdate = (fieldName: keyof User, fieldValue: any) => {
        if (usuarioDatoFiltradoActual && fieldName in usuarioDatoFiltradoActual) {
            setUsuarioDatoFiltradoActual({
                ...usuarioDatoFiltradoActual,
                [fieldName]: fieldValue,
            });

        }
        else {
            console.error("El campo no es válido o usuarioDatoFiltrado es undefined");
        }

        console.log("Select Type", [fieldName], fieldValue)
    };


    let displayCSS: string = "none";

    return (
        <>
            <div className="" style={{ width: "65%", flexDirection: "column", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                {/* {FilterInput(handelControlChange, false)} */}
                < FilterInput handelControlChangeEvent={handelControlChange} disableInput={false}>
                </FilterInput>

                <div className="" style={{
                    backgroundColor: "grey", display: displayCSS,
                }}>

                    <div className="" style={{ flexWrap: "wrap", display: "flex", backgroundColor: " #303f9f " }}>
                        <div style={{ fontSize: "1rem", border: "1px solid white", flex: "50%" }}>{"currentUserU ID: " + currentUserU?.idUser + " Nombre: " + currentUserU?.nameUser + " " + currentUserU?.lastNameUser}</div>
                        <div style={{ fontSize: "1rem", border: "1px solid white", flex: "50%" }}>{"count clicks navigate: " + countNavigateButtons}</div>
                        <div style={{ fontSize: "1rem", border: "1px solid white", flex: "50%", flexWrap: "wrap", display: "flex" }}>
                            <div style={{ flex: "auto", color: "aliceblue", backgroundColor: "darkred" }}>GetFirstUser</div>
                            <div style={{ flex: "10%", border: "1px solid gray" }}>{"ID: " + GetFirstUser?.idUser + " "}</div>
                            <div style={{ flex: "40%", border: "1px solid gray" }}>{GetFirstUser?.nameUser + " "}</div>
                            <div style={{ flex: "40%", border: "1px solid gray" }}>{GetFirstUser?.lastNameUser + " "}</div>
                            <div style={{ flex: "50%", border: "1px solid gray" }}>{GetFirstUser?.emailUser + " "}</div>
                        </div>
                        <div style={{ fontSize: "1rem", border: "1px solid white", flex: "50%", flexWrap: "wrap", display: "flex" }}>
                            <div style={{ flex: "auto", color: "aliceblue", backgroundColor: "darkred" }}>GetFirstUserFiltered</div>
                            <div style={{ flex: "10%", border: "1px solid gray" }}>{"ID: " + GetFirstUserFiltered?.idUser + " "}</div>
                            <div style={{ flex: "40%", border: "1px solid gray" }}>{GetFirstUserFiltered?.nameUser + " "}</div>
                            <div style={{ flex: "40%", border: "1px solid gray" }}>{GetFirstUserFiltered?.lastNameUser + " "}</div>
                            <div style={{ flex: "50%", border: "1px solid gray" }}>{GetFirstUserFiltered?.emailUser + " "}</div>
                        </div>
                        <div style={{ fontSize: "1rem", border: "1px solid white", flex: "50%", flexWrap: "wrap", display: "flex" }}>
                            <div style={{ flex: "auto", color: "aliceblue", backgroundColor: "darkred" }}>currentUserU</div>
                            <div style={{ flex: "10%", border: "1px solid gray" }}>{"ID: " + currentUserU?.idUser + " "}</div>
                            <div style={{ flex: "40%", border: "1px solid gray" }}>{currentUserU?.nameUser + " "}</div>
                            <div style={{ flex: "40%", border: "1px solid gray" }}>{currentUserU?.lastNameUser + " "}</div>
                            <div style={{ flex: "50%", border: "1px solid gray" }}>{currentUserU?.emailUser + " "}</div>
                        </div>
                        <div style={{ fontSize: "1rem", border: "1px solid white", flex: "50%", flexWrap: "wrap", display: "flex" }}>
                            <div style={{ flex: "auto", color: "aliceblue", backgroundColor: "darkred" }}>usuarioDatoFiltrado</div>
                            <div style={{ flex: "10%", border: "1px solid gray" }}>{"ID: " + usuarioDatoFiltradoActual?.idUser + " "}</div>
                            <div style={{ flex: "40%", border: "1px solid gray" }}>{usuarioDatoFiltradoActual?.nameUser + " "}</div>
                            <div style={{ flex: "40%", border: "1px solid gray" }}>{usuarioDatoFiltradoActual?.lastNameUser + " "}</div>
                            <div style={{ flex: "50%", border: "1px solid gray" }}>{usuarioDatoFiltradoActual?.emailUser + " "}</div>
                        </div>
                    </div>
                </div >

                < UpdateDialogForm />

                <Button className='btn-register' style={{ flexWrap: "wrap", }} variant='outlined' onClick={() => console.clear()} disabled={false}>
                    Limpiar consola
                </Button>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px", flex: "100%", flexWrap: "wrap" }}>
                    <Button className='btn-first-register btn-register' style={{ flexWrap: "wrap", }} variant='outlined' onClick={handleFirst} disabled={GetUsersFiltered.length <= 1}>
                        Primero
                    </Button>

                    <Button className='btn-prev-register btn-register' style={{ flexWrap: "wrap", }} variant='outlined' onClick={handlePrevious} disabled={indexCurrent === 0 || GetUsersFiltered.length <= 1}>
                        Anterior
                    </Button>

                    <Button className='btn-next-register btn-register' style={{ flexWrap: "wrap", }} variant='outlined' onClick={handleNext} disabled={indexCurrent === GetUsersFiltered.length - 1 || GetUsersFiltered.length <= 1}>
                        Siguiente
                    </Button>

                    <Button className='btn-last-register btn-register' style={{ flexWrap: "wrap", }} variant='outlined' onClick={handleLast} disabled={GetUsersFiltered.length <= 1}>
                        Último
                    </Button>

                </div>

                <h3>{"Registros encontrados: " + GetUsersFiltered.length}</h3>
                <div className="" style={{ flexDirection: "row", display: displayCSS, }}>

                    <div className="">
                        <h3>usarioDatoFiltrado------------</h3>
                        <h4>ID: {usuarioDatoFiltradoActual?.idUser}</h4>
                        <h4>{usuarioDatoFiltradoActual?.tipoUserId}</h4>
                        <h4>{usuarioDatoFiltradoActual?.nameUser}</h4>
                        <h4>{usuarioDatoFiltradoActual?.lastNameUser}</h4>
                        <h4>{usuarioDatoFiltradoActual?.dniUser}</h4>
                        <h4>{usuarioDatoFiltradoActual?.emailUser}</h4>

                    </div>
                    <div className="">
                        <h3>usuariosDatosFiltrados</h3>
                        <div className="" style={{ flex: 1, display: "flex", flexWrap: "wrap" }}>

                            {GetUsersFiltered.map((val: User, i: number) => (

                                <div className="" style={{ border: "1px gray solid", flex: "content", textWrap: "wrap", padding: "0.4rem" }}>
                                    <p>{(i + 1)}.</p>
                                    <p>ID: {val.idUser}</p>

                                    {/* <p>{""}{val.tipoUserId}</p> */}
                                    <p style={{ textWrap: "wrap" }}>{""}{val.nameUser}</p>
                                    <p style={{ textWrap: "wrap" }}>{""}{val.lastNameUser}</p>
                                    {/* <p>{""}{val.dniUser}</p> */}
                                    {/* <p>{""}{val.emailUser}</p> */}
                                </div>

                            ))

                            }
                        </div>

                    </div>
                </div>
            </div >

            < div
                className='form-update-user'
                style={{
                    width: "",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "",
                    padding: "20px",
                    borderRadius: "5px",
                    border: "1px lightblue solid"
                }
                }>

                {GetUsersFiltered.length > 0 && (
                    <>
                        <div className="" style={{ width: "100%", justifyContent: "center", alignItems: "center", display: "flex", backgroundColor: " #1a237e " }}>

                            <div className="section-form" style={{}}>
                                <div className="section-control control-idUser">
                                    <FormControl style={{ margin: 0, padding: 1, width: "100%" }}>
                                        <label htmlFor="" style={{ margin: "2pt 1rem" }}>ID:</label>
                                        <TextField
                                            onChange={(e: any) => handleChangeValueUpdate("idUser", e.target.value)}
                                            type='number'
                                            name={"idUser"}
                                            placeholder='ID'
                                            /* value={firstRegNotNULL === false ? GetFirstUser?.idUser : usuarioDatoFiltradoActual?.idUser} */
                                            /* value={firstRegNotNULL === false ? GetFirstUser?.idUser : usuarioDatoFiltradoActual?.idUser} */
                                            value={usuarioDatoFiltradoActual?.idUser === null || usuarioDatoFiltradoActual?.idUser == undefined ? null : usuarioDatoFiltradoActual?.idUser}
                                        >

                                        </TextField>
                                    </FormControl>
                                </div>
                                <div className="section-control section-tipoUserId">
                                    <FormControl style={{ margin: 0, padding: 1, width: "100%" }}>
                                        <label htmlFor="" style={{ margin: "2pt 1rem" }}>Tipo: {`(ID: ${/* firstRegNotNULL === false ?  */ usuarioDatoFiltradoActual?.tipoUserId})`}</label>

                                        <Select
                                            /* onChange={(e: any) => handleChangeValue("tipoUserId", e.target.value)} */
                                            onChange={(e: any) => handleChangeValueUpdate("tipoUserId", e.target.value)}
                                            /* onChange={(e: any) => e.target.value} */
                                            type='number'
                                            name={"tipoUserId"}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            /* value={1} */
                                            value={usuarioDatoFiltradoActual?.tipoUserId === null || usuarioDatoFiltradoActual?.tipoUserId == undefined ? null : usuarioDatoFiltradoActual?.tipoUserId}
                                        /* value={currentUserU?.tipoUserId} */

                                        /* value={firstRegNotNULL === false ? GetFirstUser?.tipoUserId || GetFirstUser?.tipoUserId : usuarioDatoFiltradoActual?.tipoUserId || currentUserU?.tipoUserId} */
                                        >
                                            {dataTypeUser.map((userType: TipoUser) => (
                                                <MenuItem key={userType.idTipoUser} value={userType.idTipoUser}>
                                                    {userType.tipoUser}
                                                </MenuItem>
                                            ))}

                                        </Select>

                                    </FormControl>
                                </div>
                                <div className="section-control section-nameUser">
                                    <FormControl style={{ margin: 0, padding: 1, width: "100%" }}>
                                        <label htmlFor="" style={{ margin: "2pt 1rem" }}>Nombre:</label>
                                        <TextField
                                            onChange={(e: any) => handleChangeValueUpdate("nameUser", e.target.value)}
                                            type='text'
                                            name={"nameUser"}
                                            placeholder='Nombre'
                                            /* value={firstRegNotNULL === false ? GetFirstUser?.nameUser || null : usuarioDatoFiltradoActual?.nameUser} */
                                            value={usuarioDatoFiltradoActual?.nameUser === null || usuarioDatoFiltradoActual?.nameUser == "" ? null : usuarioDatoFiltradoActual?.nameUser}
                                        >

                                        </TextField>
                                    </FormControl>
                                </div>
                                <div className="section-control section-lastNameUser">
                                    <FormControl style={{ margin: 0, padding: 1, width: "100%" }}>
                                        <label htmlFor="" style={{ margin: "2pt 1rem" }}>Apellido:</label>
                                        <TextField
                                            onChange={(e: any) => handleChangeValueUpdate("lastNameUser", e.target.value)}
                                            type='text'
                                            name={"lastNameUser"}
                                            placeholder='Apellido'
                                            /* value={firstRegNotNULL === false ? GetFirstUser?.lastNameUser || null : usuarioDatoFiltradoActual?.lastNameUser} */
                                            value={usuarioDatoFiltradoActual?.lastNameUser === null || usuarioDatoFiltradoActual?.lastNameUser == "" ? null : usuarioDatoFiltradoActual?.lastNameUser}
                                        >

                                        </TextField>
                                    </FormControl>
                                </div>
                                <div className="section-control section-dniUser">
                                    <FormControl style={{ margin: 0, padding: 1, width: "100%" }}>
                                        <label htmlFor="" style={{ margin: "2pt 1rem" }}>DNI / Cedula:</label>

                                        <TextField
                                            onChange={(e: any) => handleChangeValueUpdate("dniUser", e.target.value)}
                                            type='number'
                                            name={"dniUser"}
                                            placeholder='DNI / Cedula'
                                            /* value={firstRegNotNULL === false ? GetFirstUser?.dniUser || null : usuarioDatoFiltradoActual?.dniUser} */
                                            value={usuarioDatoFiltradoActual?.dniUser === null || usuarioDatoFiltradoActual?.dniUser == undefined ? null : usuarioDatoFiltradoActual?.dniUser}
                                        >

                                        </TextField>
                                    </FormControl>
                                </div>
                                <div className="section-control section-emailUser">
                                    <FormControl style={{ margin: 0, padding: 1, width: "100%" }}>
                                        <label htmlFor="" style={{ margin: "2pt 1rem" }}>Correo:</label>
                                        <TextField
                                            onChange={(e: any) => handleChangeValueUpdate("emailUser", e.target.value)}
                                            type='email'
                                            name={"emailUser"}
                                            placeholder='Correo'
                                            /* value={firstRegNotNULL === false ? GetFirstUser?.emailUser || null : usuarioDatoFiltradoActual?.emailUser} */
                                            value={usuarioDatoFiltradoActual?.emailUser === null || usuarioDatoFiltradoActual?.emailUser == "" ? null : usuarioDatoFiltradoActual?.emailUser}
                                        >

                                        </TextField>
                                    </FormControl>
                                </div>
                                <div className="section-control section-passUser">
                                    <FormControl style={{ margin: 0, padding: 1, width: "100%" }}>
                                        <label htmlFor="" style={{ margin: "2pt 1rem" }}>Contraseña:</label>
                                        <OutlinedInput
                                            onChange={(e: any) => handleChangeValueUpdate("passUser", e.target.value)}
                                            name={"passUser"}
                                            /* value={firstRegNotNULL === false ? GetFirstUser?.passUser || null : usuarioDatoFiltradoActual?.passUser} */
                                            value={usuarioDatoFiltradoActual?.passUser === null || usuarioDatoFiltradoActual?.passUser == "" ? null : usuarioDatoFiltradoActual?.passUser}
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder='Contraseña'
                                            endAdornment=
                                            {<InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    onMouseDown={() => 0}
                                                    onMouseUp={() => 0}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>}
                                        />
                                    </FormControl>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px", flex: "100%", flexWrap: "wrap" }}>
                                    <Button className='btn-first-register btn-register' style={{ flexWrap: "wrap", }} variant='outlined' onClick={handleFirst} disabled={GetUsersFiltered.length <= 1}>
                                        Primero
                                    </Button>

                                    <Button className='btn-prev-register btn-register' style={{ flexWrap: "wrap", }} variant='outlined' onClick={handlePrevious} disabled={indexCurrent === 0 || GetUsersFiltered.length <= 1}>
                                        Anterior
                                    </Button>

                                    <Button className='btn-next-register btn-register' style={{ flexWrap: "wrap", }} variant='outlined' onClick={handleNext} disabled={indexCurrent === GetUsersFiltered.length - 1 || GetUsersFiltered.length <= 1}>
                                        Siguiente
                                    </Button>

                                    <Button className='btn-last-register btn-register' style={{ flexWrap: "wrap", }} variant='outlined' onClick={handleLast} disabled={GetUsersFiltered.length <= 1}>
                                        Último
                                    </Button>



                                </div>
                            </div>

                        </div>

                    </>
                )}



            </div >

            <div style={{ marginTop: "20px" }}>
            </div>

        </>
    );
}

