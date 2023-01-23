import { Link, Paper} from '@mui/material'
import React from 'react'
import '../Style/style.scss';
const acelogo = "./Image/acelogo.png";
const Navbar = () => {
  
  return (
    <Paper  sx={{
      width:"100%"
    }}  elevation={4} className="navwrapper" >
      <img src={acelogo} alt="" />
      <Link href="#" underline="none">HOME</Link>
      <Link href="#"  underline="none">ABOUT</Link>
      <Link href="#"   underline="none">CONTACT US</Link>
      <Link href="#"   underline="none">LATEST</Link>
     
    </Paper>
  )
}

export default Navbar
