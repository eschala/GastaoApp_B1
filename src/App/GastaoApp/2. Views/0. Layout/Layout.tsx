import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiNavBarLayoutProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


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
                <NavbarLayout position="fixed" open={open}>
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

                    </Toolbar>
                </NavbarLayout>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
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
                    <List>
                        {/*  */}
                    </List>
                    <Divider />
                    <List>
                        {/*  */}

                    </List>
                </Drawer>
                <Board open={open} style={{
                    backgroundColor: "red",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden" // Evita el scroll horizontal
                }}>
                    <DrawerHeader style={{ backgroundColor: "blueviolet" }} />

                    <div style={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        overflowY: "auto", // Permite el scroll vertical
                        maxWidth: "100%" // Asegura que no se exceda del viewport
                    }}>
                        {/* Contenido aquí */}
                        {textContent}
                        {textContent}
                        {textContent}
                        {textContent}
                    </div>

                    <div className="footer" style={{ backgroundColor: "aliceblue", flexShrink: 0 }}>
                        <footer>
                            <h1>
                                Eduar Samir Chalá C.
                            </h1>
                        </footer>
                    </div>
                </Board>



            </Box>

        </>
    );
}

const textContent = (
    <>
        {/*  */}
        Persistent navigation drawers can toggle open or closed.
        The drawer sits on the same surface elevation as the content.
        It is closed by default and opens by selecting the menu icon, and stays open until closed by the user.
        The state of the drawer is remembered from action to action and session to session. < br />

        When the drawer is outside of the page grid and opens, the drawer forces other content to change size and adapt to the smaller viewport.< br />

        Persistent navigation drawers are acceptable for all sizes larger than mobile.
        They are not recommended for apps with multiple levels of hierarchy that require using an up arrow for navigation.< br />
        {/* ... más  ... */}

    </>
)

