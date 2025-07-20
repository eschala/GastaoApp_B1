import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonIcon from '@mui/icons-material/Person';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Gastao App - Menu
        </ListSubheader>
      }
    >
      {/* - - - - - - - Usuarios - - - - - - - - - - */}
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4, fontSize: '5px' }}>
            <ListItemIcon>
              <SearchOutlinedIcon />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: '5px' }} primary="Buscar" />
          </ListItemButton>

        </List>
      </Collapse>
      {/* - - - - - - - Egresos - - - - - - - - */}
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ArrowCircleDownOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Egresos" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4, fontSize: '5px' }}>
            <ListItemIcon>
              <SearchOutlinedIcon />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: '5px' }} primary="Buscar" />
          </ListItemButton>
          {/*  */}
          <ListItemButton sx={{ pl: 4, fontSize: '5px' }}>
            <ListItemIcon>
              <AddCircleOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: '5px' }} primary="Crear" />
          </ListItemButton>
          {/*  */}
          <ListItemButton sx={{ pl: 4, fontSize: '5px' }}>
            <ListItemIcon>
              <EditOutlinedIcon />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: '5px' }} primary="Editar" />
          </ListItemButton>
          {/*  */}
          <ListItemButton sx={{ pl: 4, fontSize: '5px' }}>
            <ListItemIcon>
              <DeleteOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: '5px' }} primary="Eliminar" />
          </ListItemButton>
        </List>
      </Collapse>
      {/* - - - - - - - Ingresos - - - - - - - - - - */}
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ArrowCircleUpOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Ingresos" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4, fontSize: '5px' }}>
            <ListItemIcon>
              <SearchOutlinedIcon />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: '5px' }} primary="Buscar" />
          </ListItemButton>
          {/*  */}
          <ListItemButton sx={{ pl: 4, fontSize: '5px' }}>
            <ListItemIcon>
              <AddCircleOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: '5px' }} primary="Crear" />
          </ListItemButton>
          {/*  */}
          <ListItemButton sx={{ pl: 4, fontSize: '5px' }}>
            <ListItemIcon>
              <EditOutlinedIcon />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: '5px' }} primary="Editar" />
          </ListItemButton>
          {/*  */}
          <ListItemButton sx={{ pl: 4, fontSize: '5px' }}>
            <ListItemIcon>
              <DeleteOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: '5px' }} primary="Eliminar" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
