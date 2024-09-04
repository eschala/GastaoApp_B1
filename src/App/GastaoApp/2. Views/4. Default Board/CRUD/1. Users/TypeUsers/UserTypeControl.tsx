import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, CircularProgress } from '@mui/material';

import { GetAzTbTipoUsers, ITypeUser } from '../../../../../1. Models/Functions/API Responses/GetAzTbTipoUsers';

import { useEffect, useState } from 'react';

export function UserTypeControl() {
    const [selectedType, setSelectedType] = useState('');
    const [userTypes, setUserTypes] = useState<ITypeUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserTypes = async () => {
            try {
                const dataType = await GetAzTbTipoUsers(); // Asegúrate de que se llame correctamente
                setUserTypes(dataType); // Ahora dataType es un ITypeUser[]
                console.log("Fetched types: ", dataType);
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
        <Box sx={{ minWidth: 120, width: "85%" }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tipo de Usuario</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedType}
                    label="Tipo de Usuario"
                    onChange={handleChange}
                >
                    {userTypes.map((userType: ITypeUser) => (
                        <MenuItem key={userType.idTipoUser} value={userType.idTipoUser}>
                            {userType.tipoUser}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
