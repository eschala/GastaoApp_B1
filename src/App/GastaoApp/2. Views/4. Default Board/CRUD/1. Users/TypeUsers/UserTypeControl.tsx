import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, CircularProgress } from '@mui/material';

import { GetAzTbTipoUsers, TipoUser } from '../../../../../1. Models/Functions/API Responses/GetAzTbTipoUsers';

import { useEffect, useState } from 'react';

let saltoLine: string = "\n"
export function UserTypeControl() {
    const [selectedType, setSelectedType] = useState('');
    const [userTypes, setUserTypes] = useState<TipoUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserTypes = async () => {
            try {
                const dataType = await GetAzTbTipoUsers(); // Asegúrate de que se llame correctamente
                setUserTypes(dataType); // Ahora dataType es un ITypeUser[]
                /* console.log("Fetched types: ", dataType); */
            } catch (err) {
                setError('Error fetching user types');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserTypes();
    }, []);

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedType(event.target.value as string);
    };

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Box sx={{ width: "1fr", display: "flex" }}>
            <FormControl style={{ margin: 0, padding: 1, width: "100%" }} sx={{ p: 1 }}>
                <InputLabel id="demo-simple-select-label">{""}</InputLabel>
                <Select
                    sx={{}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedType}
                    label="Tipo de Usuario"
                    onChange={handleChange}
                >
                    {userTypes.map((userType: TipoUser) => (
                        <MenuItem key={userType.idTipoUser} value={userType.idTipoUser}>
                            {userType.tipoUser}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
export function GetUserTypeControl({ valueTypeIdUser }: any, { nameField }: any | string) {
    const [selectedType, setSelectedType] = useState<number | string>('');
    const [userTypes, setUserTypes] = useState<TipoUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserTypes = async () => {
            try {
                const dataType = await GetAzTbTipoUsers(); // Asegúrate de que se llame correctamente
                setUserTypes(dataType); // Ahora dataType es un ITypeUser[]
                /* console.log("Fetched types: ", dataType); */
            } catch (err) {
                setError('Error fetching user types');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserTypes();
    }, []);

    // Efecto para establecer el tipo de usuario seleccionado al cargar el componente
    useEffect(() => {
        if (valueTypeIdUser !== null && valueTypeIdUser !== undefined || valueTypeIdUser !== 0) {
            setSelectedType(valueTypeIdUser);
        }
        console.log("useEffect from GetUserTypeControl valueTypeIdUser " + valueTypeIdUser + saltoLine +
            "useEffect from GetUserTypeControl selectedType " + selectedType + saltoLine +
            "useEffect idTipoUser: " + valueTypeIdUser.idTipoUser
        )

    }, [valueTypeIdUser]); // Solo se ejecuta cuando valueTypeIdUser cambia

    const handleChange = (event: SelectChangeEvent<string | number>) => {
        setSelectedType(event.target.value);
        console.log("handleChange valueTypeUser: " + valueTypeIdUser + saltoLine + "handleChange selectedType: " + event.target.value);

    };

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Box sx={{ width: "1fr", display: "flex" }}>
            <FormControl style={{ margin: 0, padding: 1, width: "100%" }} sx={{ p: 1 }}>
                {/* <InputLabel id="demo-simple-select-label"></InputLabel> */}
                <Select
                    type='number'
                    name={nameField}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedType}
                    /* label="Tipo de Usuario" */
                    onChange={handleChange}
                >
                    {userTypes.map((userType: TipoUser) => (
                        <MenuItem key={userType.idTipoUser} value={userType.idTipoUser}>
                            {userType.tipoUser}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}