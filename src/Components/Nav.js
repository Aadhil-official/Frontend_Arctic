import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Avatar from '@mui/joy/Avatar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

function Nav() {
  const location = useLocation();

  const isActivehome = location.pathname === '/';
  const isActivecontact = location.pathname === '/contact';
  const activeLinkStyle = {
    backgroundColor: '#6C94F8',
    // color:'#6C94F8',
    borderRadius: '5px',
    padding: '0.2rem'
  };

  const notActive = {
    color: 'white',
    textDecoration: 'none'
  };

  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  theme.typography.h5 = {
    fontSize: '1.1rem'
  }

  return (
    <AppBar position="sticky" sx={{ height: '100%', width:'20%', background: 'rgb(102, 148, 235)' }}>
      <nav >
        <ul>
      <Link to={"/"}>
          <HomeIcon color='action' fontSize='large' />
        </Link>
        <li>
          <ThemeProvider theme={theme}>
          <Typography variant='h4'>
            Dashboard
          </Typography>
          </ThemeProvider>
        </li>
        <li>
        <ThemeProvider theme={theme}>
          <Typography variant='h4'>
            Dashboard
          </Typography>
          </ThemeProvider>
        </li>
        <li>
        <ThemeProvider theme={theme}>
          <Typography variant='h4'>
            Dashboard
          </Typography>
          </ThemeProvider>
        </li>
        </ul>
      </nav>
    </AppBar>
  );
}

export default Nav