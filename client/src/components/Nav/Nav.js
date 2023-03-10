import React, { useState } from 'react';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {VscFeedback} from 'react-icons/vsc'
import {AiOutlineMessage} from 'react-icons/ai'
import {Link} from 'react-router-dom';
import './Nav.css';

function Nav() {

const [activeNav,setActiveNav] = useState('#');


  return (
    <nav>
     <Link className='link' to='/'><a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a></Link> 
     <Link className='link' to='/about'> <a href='#about'  onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a></Link>
     <Link className='link'> <a href='#experience'  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a></Link>
     <Link className='link' to='/testimonial'> <a href='#testimonial'  onClick={() => setActiveNav('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''}><VscFeedback/></a></Link>
     <Link className='link' to='/contact'> <a href='#contact'  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a></Link>

    </nav>
  )
}

export default Nav
