import React from 'react'
const aboutimg="./image/ace-about.png";
const About = () => {
  return (
    <div className='about flex'>
      <div className='glass c1'></div>
        <div className='about-wrapper flex glass'>
            <img src={aboutimg} alt="" />
            <div className='about-info'>
            <h1>ACE ANIMES STUDIO</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, esse illum soluta iste ipsa nihil cumque alias a fugit quaerat! Quisquam fuga sequi doloremque reprehenderit ratione numquam aliquid officiis iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quasi laboriosam natus et voluptates eaque, quos cupiditate quis nulla aliquid porro, asperiores impedit a quisquam maxime minima possimus, ex labore.</p>
            </div>
        </div>
      
    </div>
  )
}

export default About
