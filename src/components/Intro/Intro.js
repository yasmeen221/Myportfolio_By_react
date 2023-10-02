import React from 'react'
import './Intro.css'
import myimg from '../../assets/myimg.png';
import {Link} from "react-scroll";


const Intro = () => {
  return (
    <section className="intro">
      <div className='contant'>
        <span className='hello'>Hello,</span>
        <span className='introtext'>I'M <span className='myname'>Yasmeen</span><br/>Website Designer</span>
        <p className='intropara'>i am a skilled web designer with experience in creation visually appealing and user friendly website </p>
        <Link><button className='btn'>Hire Me</button></Link>
      </div>
      <img src={myimg} alt='myimg' className='myimg'/>

    </section>
  )
}

export default Intro