import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiNavBarLayoutProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountMenu from '../../../../Components/LogNavButton/AccountMenu';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import SvgIcon from '@mui/material/SvgIcon';
import { Footer } from '../../../../Components/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';
import { RoutesViews } from '../0. RoutesViews/RoutesViews';
import { DefaultGastaoRoute, HomeRoute } from '../../1. Models/Routes/PathRoutes';
import AccordionUsage from '../../../../Components/Accordion/Accordion';

// or




const drawerWidth = 240;

const Board = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
        {
            props: ({ open }) => open,
            style: {

                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            },
        },
    ],
}));

interface NavBarLayoutProps extends MuiNavBarLayoutProps {
    open?: boolean;
}

const NavbarLayout = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<NavBarLayoutProps>(({ theme }) => ({

    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {

                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({

    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Layout() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box sx={{ display: 'flex', backgroundColor: "blueviolet", }}>
                <CssBaseline />
                <NavbarLayout position="fixed" open={open} style={{ backgroundColor: theme.palette.primary.dark }}>
                    <Toolbar>

                        <IconButton

                            color="inherit"

                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={[
                                {
                                    mr: 2,
                                },
                                open && { display: 'none' },
                            ]}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Link to={HomeRoute.Path} style={{ backgroundColor: "transparent" }}>
                            <ButtonItemList context={
                                <SvgIcon>
                                    <HomeIcon style={{ color: "white" }} />
                                </SvgIcon>
                            } open={open} />
                        </Link>
                        <Link to={HomeRoute.Path} style={{ backgroundColor: "transparent" }}>

                        </Link>

                        <div className="" style={{ flex: 1 }}></div>
                        <Link to={DefaultGastaoRoute.Path} style={{ backgroundColor: "transparent" }}>

                            <ButtonItemList context={"App"} open={open} />
                        </Link>
                        <AccountMenu />
                    </Toolbar>
                </NavbarLayout>
                <Drawer style={{ backgroundColor: theme.palette.primary.dark }}
                    sx={{
                        backgroundColor: "",
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {/* Color del side bar */
                            backgroundColor: theme.palette.primary.dark,
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <AccordionUsage />{/* SideBar */}
                </Drawer>
                <Board open={open} style={{
                    backgroundColor: "red",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden" // Evita el scroll horizontal
                }}>
                    <DrawerHeader style={{ backgroundColor: "blueviolet" }} />

                    <div className='board-render' style={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        overflowY: "auto", // Permite el scroll vertical
                        maxWidth: "100%" // Asegura que no se exceda del viewport
                    }}>
                        {/* Contenido aquí */}
                        <RoutesViews />
                        <Outlet />

                    </div>
                    <div className="footer" style={{ backgroundColor: "aliceblue", flexShrink: 0 }}>
                        {<Footer />}
                    </div>
                </Board>
            </Box >

        </>
    );
}



const ButtonItemList = (props?: any | null | undefined) => {

    return (
        <>
            <Button
                id="fade-button"
                aria-controls={props.open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={props.open ? 'true' : undefined}
                onClick={props.handleClick}
                color='inherit'
                style={{ color: "white" }}
            >
                {props.context}
            </Button>
        </>
    )
}

