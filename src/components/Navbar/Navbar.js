import React, { useState } from 'react';
import "./Navbar.css";
// import logo from "../../assets/Logo.png";
// import contact from "../../assets/contact.png"
import {Button, Link} from "react-scroll";
import menue from "../../assets/menue.png"
// import logo from "../../assets/logo-removebg-preview.png"




const Navbar = () => {

const [showmenue,setshowmenue]=useState(false);
    return (
   <nav className='navbar'>
    {/* <img src={logo} alt='logo' className='logo'></img> */}
    <h2 className='logoname'>MyPortfolio</h2>
    <div className='items'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='link'><button >Home</button></Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='link'><button>About</button></Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='link'><button>projects</button></Link>
        <Link activeClass='active' to='twocontact' spy={true} smooth={true} offset={-50} duration={500} className='link'><button>Resume</button></Link>
    </div>
    <Link className='button' activeClass='noactive' to='contactsection' spy={true} smooth={true} offset={-50} duration={500}>Contact Me</Link>

        <img src={menue} alt='menue' className='mobmenue' onClick={()=> setshowmenue(!showmenue)}></img>
    <div className='navmenue' style={{display: showmenue? "flex":"none"}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=> setshowmenue(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=> setshowmenue(false)}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=> setshowmenue(false)}>Portfolio</Link>
        <Link activeClass='active' to='contactsection' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=> setshowmenue(false)}>Contact</Link>
    </div>
    
   </nav>
  )
}

export default Navbar