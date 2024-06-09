import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../Style/ResponsiveAppBar.css';

export default function ButtonAppBar() {

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

  const theme = createTheme();

theme.typography.h5 = {
  fontSize: '0.8rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
    margin:'0 0.5rem'
  }
};

  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(to bottom, rgba(75, 117, 245, 0.758), rgb(20, 20, 133))' }}>
      <nav>
        <img className='logo'
          src="https://th.bing.com/th/id/R.3bb0cebcd343edf4aa56cf49b5ffc01e?rik=gn4849riOnBpng&pid=ImgRaw&r=0"
          height="80px"
          alt='logo'
        ></img>

        <MenuIcon fontSize="large" sx={{ position: 'absolute', marginTop: '3%' }} className='menu' onClick={handleMenuClick} />
        <ul className={menuOpen ? "open" : ""}>
        <ThemeProvider theme={theme}>
          <li>
            <NavLink to={"/"} style={notActive}>
              <Typography variant='h5' style={isActivehome ? activeLinkStyle : {}}>Home</Typography>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/contact"} style={notActive} >
              <Typography variant='h5' style={isActivecontact ? activeLinkStyle : {}} >Contact Us</Typography>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"} style={notActive} >
              <Typography variant='h5'>Sign In</Typography>
            </NavLink>
          </li>
          </ThemeProvider>
        </ul>
      </nav>
    </AppBar>
  );
}
