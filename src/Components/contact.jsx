import React from 'react'
import '../Style/responsive.scss'
const myimg="./image/N.jpg"
const Contact = () => {
  return (
    <div className='contact flex'>
        <div className="c1"></div>
        <div className="glass contact-wrap flex">
            
            <div className='contact-left'>
            <h1>Developer Info</h1>
            <h2>GARRIX</h2>
            <img src={myimg} alt="" />
            </div>
            
            <div className="contact-r flex">
            <form action="post">
                <h1>Contact Form</h1>
                <input type="text" placeholder='Enter your email' />
                <input type="number" placeholder='Phone no.(optional)' />
                <textarea name="Feedback or issue regarding webapp" id=" contact" cols="30" rows="10" placeholder='ENTER FEEDBACK OR ISSUE REGARDING WEBSITE'></textarea>
                <button type='submit'>SUBMIT</button>
            </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
