import { Link, Paper} from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import '../Style/style.scss';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useState } from 'react';
const acelogo = "./Image/acelogo.png";

const Navbar = () => {
  const navwrapper=document.querySelector(".navwrapper");
  const [navbarclass,setnavbarclass]=useState("navwrapper");

  return (
    
    <Paper  sx={{
      width:"100%"
    }}  elevation={4} className={navbarclass} >
      <img src={acelogo} alt="" className='logo'/>
      <Link href="#" underline="none">HOME</Link>
      <Link href="#"  underline="none">ABOUT</Link>
      <Link href="#"   underline="none">CONTACT US</Link>
      <Link href="#"   underline="none">LATEST</Link>
      <div className='Mobile-icon' >
      <MenuIcon name="mobile-icon-open"className='mobile-menu-icon-open hamicon'onClick={()=>{
        setnavbarclass("navwrapper hamburger")}}
      />
      <MenuOpenIcon name="mobile-icon-close" className='mobile-menu-icon-close hamicon'
      onClick={()=>{
        setnavbarclass("navwrapper")}}/>
      </div>

     
    </Paper>
  )
}

export default Navbar
