import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';

// Material Components
import MUIAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import Auth from '../services/auth';

function AppBar(props) {
    const [open, setOpen] = useState(false);

    function logout() {
      setOpen(false);
      Auth.removeToken();
      props.history.push('/');
    }

    return (
        <MUIAppBar style={{backgroundColor: '#96281b'}} position="static">
        <Toolbar>
          <Typography variant="h6">
            <Link style={{textDecoration: 'none', color: 'white'}} to="home">RedPlanet</Link>
          </Typography>
            <div style={{position: 'relative', marginLeft: 'auto'}}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setOpen(true)}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setOpen(false)}
              >
                <MenuItem onClick={() => props.history.push('/favorites')}>Favoritos</MenuItem>
                <MenuItem onClick={() => logout()}>Logout</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </MUIAppBar>
    )
};

export default withRouter(AppBar);
