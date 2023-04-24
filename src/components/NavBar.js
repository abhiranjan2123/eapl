import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { createTheme } from '@mui/material/styles';
import logo from "../../src/images/logo.png"
import { ThemeProvider } from '@emotion/react';
import kruger from "../../src/images/img.png"


const pages = ['Products', 'Pricing', 'Blog'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

 

const theme = createTheme({
  palette: {
    primary:{
      main:"#ffffff"
    }
  },
});
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}> 
    <AppBar position="static" >
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <img src={logo} alt="logo" width="80"/>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              sx={{position:'absolute',right:1,top:1}}
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
              
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"> {page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
   
         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent="end">
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
               
              >
                {page}
              </Button>
              
            ))}
            <img src={kruger} alt="logo" width="150" height="10"/>
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
