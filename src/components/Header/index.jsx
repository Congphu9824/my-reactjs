import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { Link, NavLink } from 'react-router-dom';
import './style.scss';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Register from '../../features/Auth/components/Register';
import { Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Header() {
  // check dialog open or close
    const [open, setOpen] = React.useState(false);
  //  management status menu
    const [anchorEl, setAnchorEl] = React.useState(null);

    // close dialog register
    const handleClose = () => {
      setOpen(false);
    };
    
    // open dialog register
    const handleClickOpen = () => {
      setOpen(true);
    }

    // open menu
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    }

    // close menu
    const handleCloseMenu = () => {
      setAnchorEl(null);
    }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navlink">
        <CodeIcon />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               <Link to="/colorbox" className='navlink__News'>News</Link>
          </Typography>
          <Button color="inherit">Login</Button>

          <NavLink to="/todos" className="navlink__todos">
                <Button color="inherit">Todos</Button>
          </NavLink>

          <NavLink to="/albums" className="navlink__albums">

                <Button color="inherit">Albums</Button>
          </NavLink>
          <Button color="inherit" onClick={handleMenuClick}>
             <AccountCircleIcon />
          </Button>
        </Toolbar>
      </AppBar>

       {/*Drop-down menu - anchorEl: specifies the Dom element attached - 
                         - menu open if not null
                         - close menu click outside
       */ }
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
            <MenuItem onClick={handleCloseMenu}>Login</MenuItem>
            <MenuItem onClick={handleClickOpen}>Register</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
      </Menu>

      {/* Dialog register */}
      <Dialog 
        open={open}
        onClose={(event, reason) => {
            if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
              handleClose();
            }
          }}      
            slotProps={{
            paper: {
              component: 'form',
              onSubmit: (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(formData.entries());
                const email = formJson.email;
                console.log(email);
                handleClose();
              },
            },
          }}
      >
        <DialogContent>
            <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
    
  );
}
