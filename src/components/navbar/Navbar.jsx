import React, { useContext, useState } from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyles'
import { GiHamburgerMenu } from "react-icons/gi";
import { RecipeContext } from '../../context/RecipeProvider';
const Navbar = () => {
  const [open, setOpen]=useState(false)
  const {getirData} =useContext(RecipeContext)


  return (
    <Nav>
      <Logo to="/home" onClick={getirData}>
        <i> {"Mozzana"}</i>
        
      </Logo>

      <Hamburger onClick={()=>setOpen(!open)} >
        <GiHamburgerMenu />
      </Hamburger>

      <Menu hidden = {open} onClick={()=>setOpen(!open)} >
        <MenuLink to="/about">About</MenuLink>
        <a   href="https://github.com/recep-demir" target="_blank" rel="noopener noreferrer">Github</a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar