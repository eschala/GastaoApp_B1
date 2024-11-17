const [usuarios, setUsuarios] = useState<User[]>([]);
const [usuariosFiltrados, setUsuariosFiltrados] = useState<User[]>([]);

const users = UseFetchUsers(); // Suponiendo que tienes una función UseFetchUsers()

const [usuarioFiltrar, setUsuarioFiltrar] = useState<User>({
    idUser: 0,
    dniUser: 0,
    nameUser: "",
    lastNameUser: "",
    emailUser: "",
    passUser: "",
    tipoUserId: 0,
});

const usersFiltered = usuarios.filter((usuario) => {
    // Combine all filter conditions using logical AND (&&)
    return (
        // ID filter (only filter if `idUser` in `usuarioFiltrar` is not 0)
        (usuarioFiltrar.idUser !== 0 && usuario.idUser === usuarioFiltrar.idUser) ||
        // DNI filter (same logic as ID)
        (usuarioFiltrar.dniUser !== 0 && usuario.dniUser === usuarioFiltrar.dniUser) ||
        // Name filter (includes case-insensitive search and empty string handling)
        (usuarioFiltrar.nameUser !== "" &&
            normalizeString(usuario.nameUser).toLowerCase().includes(
                normalizeString(usuarioFiltrar.nameUser).toLowerCase()
            )) ||
        // Last name filter (same logic as name)
        (usuarioFiltrar.lastNameUser !== "" &&
            normalizeString(usuario.lastNameUser).toLowerCase().includes(
                normalizeString(usuarioFiltrar.lastNameUser).toLowerCase()
            )) ||
        // Email filter (same logic as name)
        (usuarioFiltrar.emailUser !== "" &&
            normalizeString(usuario.emailUser).toLowerCase().includes(
                normalizeString(usuarioFiltrar.emailUser).toLowerCase()
            )) ||
        // User type filter (only filter if `tipoUserId` in `usuarioFiltrar` is not 0)
        (usuarioFiltrar.tipoUserId !== 0 && usuario.tipoUserId === usuarioFiltrar.tipoUserId)
    );
});

const setUsuarioFiltrarOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const valor = name === "idUser" || name === "tipoUserId" || name === "dniUser" ? Number(value) : value;
    setUsuarioFiltrar({ ...usuarioFiltrar, [name]: valor });
    console.log("Test desde 'setUsuarioFiltrarOnChange' ");
};