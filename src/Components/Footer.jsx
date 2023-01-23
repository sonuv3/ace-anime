
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import { LinkedIn, YouTube } from '@mui/icons-material';


const Footer = () => {
  return (
      <div className='footer'>
        <div className="footr">

        <div>
            <a href="#">
                <InstagramIcon className='icons-style'/>
            </a>
                <p>VISIT INSTA PAGE INSTAGRAM</p>
        </div>
        <div>
            <a href="#">
                <YouTube className='icons-style'/>
            </a>
                <p>VISIT YOUTUBE PAGE</p>
        </div>
        <div>
            <a href="#">
                <LinkedIn className='icons-style'/>
            </a>
                <p>VISIT Linkedin PAGE </p>
        </div>
        </div>
        <div className="footl">
        <div>
            <a href="#">
                <InstagramIcon className='icons-style'/>
            </a>
                <p>VISIT INSTA PAGE INSTAGRAM</p>
        </div>
        <div>
            <a href="#">
                <YouTube className='icons-style'/>
            </a>
                <p>VISIT YOUTUBE PAGE</p>
        </div>
        <div>
            <a href="#">
                <LinkedIn className='icons-style'/>
            </a>
                <p>VISIT Linkedin PAGE </p>
        </div>

        </div>
      </div>
  )
}

export default Footer
