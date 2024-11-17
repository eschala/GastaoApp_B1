/* 
export function TipoUsersBorrador2({ ValueDefault }: { ValueDefault: number }) {
    const [nuevoValor, setNuevoValor] = useState<number>(ValueDefault);
    const [tipoUsuarios, setTipoUsuarios] = useState<TipoUser[]>([]);
    const tipoUsers = UseFetchTipoUsers();

    useEffect(() => {
        setTipoUsuarios(tipoUsers);
    }, [tipoUsers]);

    const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setNuevoValor(e.target.value as number); // Ensure type safety
    };

    return (
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Rol</InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={nuevoValor}
                onChange={handleChange}
            >
                {tipoUsuarios.map((t) => (
                    <MenuItem key={t.idTipoUser} value={t.idTipoUser}>
                        {t.tipoUser}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
 */