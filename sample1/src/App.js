import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// import { Height } from "@mui/icons-material";

// import { useTheme, useMediaQuery } from '@material-ui/core';

function App() {
  
  return (
    <main>
       
    <Navbar>

    <NavItems />
    </Navbar>
    
    <div className='sample-body' id='home'>

      <section className='home' id='home'>
        <h1>HOME</h1>
      </section> 

      <section className='about' id='about'>
        <h1>ABOUT</h1>
      </section>

      <section className='contact' id='contact'>
      <h1>CONTACT</h1>
      </section>

    </div>
    
    
    </main>
  );
}
const Navbar = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <nav className='navbar'>
      <div className='navbar-logo'  >Sample</div>
      {isMobile ? (
          <ul className='navbar-nav'>
          { props.children }
        </ul> 
        ) : (
          <Burger />
        )}
      
      
    </nav>
    )
}
const NavItems = () => {


  return (
    <>
   
   
    
   <li className='navbar-item'>
      <a href='#home' className='item-button'>
        Home
      </a>
    </li>
    <li className='navbar-item'>
      <a href='#about' className='item-button'>
        About
      </a>
    </li>
    <li className='navbar-item'>
      <a href='#contact' className='item-button'>
        Contact
      </a>
    </li>
    
    </>
  )
}



const Burger = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    
    <div className='navbar-nav'>
    <Button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
      <MenuIcon sx={{color: '#005C53',}}/>
    </Button>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={handleClose} ><a href='#home' className='hamburger-text'>
        Home
      </a></MenuItem>
      <MenuItem onClick={handleClose} ><a href='#about' className='hamburger-text'>
        About
      </a></MenuItem>
      <MenuItem onClick={handleClose}><a href='#contact'className='hamburger-text' >
        Contact
      </a></MenuItem>
    </Menu>
  </div>
  )
}


export default App;