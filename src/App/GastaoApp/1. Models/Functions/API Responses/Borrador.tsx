

/*
export function GetAzTbTipoUsers(props: any) {
    const [AzTbTipoUsers, setAzTbTipoUsers] = useState<UserType[]>([]);

    useEffect(() => {

        fetch(ApiAzTbTipoUsers.Url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {

                if (props.AdminLog == true) {
                    const userType: UserType[] = data.map((userType: any) => ({
                        ID_Tipo_User: userType.ID_Tipo_User,
                        Tipo_User: userType.Tipo_User,

                    }));
                    setAzTbTipoUsers(userType);
                }
                else {
                    const userType: UserType[] = data.map((userType: any) => ({

                        Tipo_User: userType.Tipo_User,


                    }));
                    setAzTbTipoUsers(userType);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (AzTbTipoUsers);
}
*/
// Asegúrate de que tengas un archivo de tipos para UserType

/* export async function GetAzTbTipoUsers(isAdmin: any): Promise<UserType[]> {
    const response = await fetch(ApiAzTbTipoUsers.Url);
    if (!response.ok) {
        throw new Error('Error fetching data from API');
    }
    const data = await response.json();
    console.log(data)
    console.log(data.ID_Tipo_User)
    console.log(data.Tipo_User)

    return data
} */