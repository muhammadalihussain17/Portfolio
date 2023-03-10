import React from 'react';
import {IoMdSchool} from 'react-icons/io'
import {HiAcademicCap} from 'react-icons/hi'
import {FaUniversity} from 'react-icons/fa'
import {TbNetwork} from 'react-icons/tb'
import {TbCertificate} from 'react-icons/tb'
import {Page, Text, Image, Document, StyleSheet} from '@react-pdf/renderer'


import './About.css';

function About() {
  return (
    <div className='about'>
      <div className='about_container'>
        <div className='about_container_top'>
        <h2>About</h2>
        <p>I am Telecommunication Engineer seeking a full time position in the field of Full Stack Development,
            where i can apply my knowledge and skills for continuous improvement.</p>
        </div>
        <div className='about_container_mid'>
        <h2>Education</h2>
        <div className='about_container_mid_container'>
        <article>
            <div className='icon_div'><span className='icon'>{<IoMdSchool/>}</span></div>
            <h4>SCIENCE</h4>
            <h3>The Radiance School</h3>
            <h4>Jan-2000 to May-2012</h4>
            <h4>Karachi, Pakistan</h4>
        </article>
            
        <article>
            <div className='icon_div'><span className='icon'>{<HiAcademicCap/>}</span></div>
            <h4>PRE-ENGINEERING</h4>
            <h3 className='text_pad'>Govt Degree Science & Commerce College</h3>
            <h4>May-2012 to May-2014</h4>
            <h4>Karachi, Pakistan</h4>
        </article>
        <article>
            <div className='icon_div'><span className='icon'>{<FaUniversity/>}</span></div>
            <h4 className='text_pad'>BS IN TELECOMMUNICATION ENGINEERING</h4>
            <h3  className='text_pad'>Sir Syed University Of Engineering & Technology</h3>
            <h4>Jan-2015 to Feb-2019</h4>
            <h4>Karachi, Pakistan</h4>
        </article>
        <article>
            <div className='icon_div'><span className='icon'>{<TbNetwork/>}</span></div>
            <h4>NETWORKING</h4>
            <h3>CTTC Academy</h3>
            <h4>Aug-2018 to Jul-2019</h4>
            <h4>Karachi, Pakistan</h4>
        </article>
        <article>
            <div className='icon_div'><span className='icon'>{<TbCertificate/>}</span></div>
            <h4>WEB DEVELOPMENT</h4>
            <h3 className='text_pad_h3'>National Institute Of Skill Training</h3>
            <h4>Feb-2022 to May-2022</h4>
            <h4>Karachi, Pakistan</h4>
        </article>
        <article>
            <div className='icon_div'><span className='icon'>{<TbCertificate/>}</span></div>
            <h4>MERN FULL STACK DEVELOPMENT</h4>
            <h3>GoDev & Syslify</h3>
            <h4>Aug-2022 to Nov-2022</h4>
            <h4>Dublin, Ireland</h4>
        </article>
        <article>
            <div className='icon_div'><span className='icon'>{<TbCertificate/>}</span></div>
            <h4>PHP & MYSQL</h4>
            <h3 className='text_pad_h3'>National Institute Of Skill Training</h3>
            <h4>Aug-2022 to Present</h4>
            <h4>Karachi, Pakistan</h4>
        </article>
        <article>
            <div className='icon_div'><span className='icon'>{<TbCertificate/>}</span></div>
            <h4 className='text_pad'>PYTHON FULL STACK DEVELOPMENT</h4>
            <h3>GoDev & Syslify</h3>
            <h4>Nov-2022 to Present</h4>
            <h4>Karachi, Pakistan</h4>
        </article>
        </div>
        </div>

        <div className='about_container_bottom'>
         <h2>Internship</h2>
         <h4>ITSec (Pvt.) Ltd as Web Developer with effect from 01/June 2022 to 30/June 2022 
         Pakistan Office: 9th Floor, National IT Park, Caesar's Tower Shahrah-e-Faisal, Karachi, Pakistan 
          UK Office: London Road, Leicester, LE2 OPF
         </h4>
         <br/>
         <h4>Two weeks of work placement as MERN Developer in a scrum team with Syslify-UK Consultants with effect 
          from 15/October 2022 to 01/November 2022 Ireland Office: Dublin, Ireland
         </h4>
         <h2 className='certification_heading'>Certification</h2>
         <h4>Cisco Certified Network Associate (Routing & Switching) Certificate Verification No. 436274168559ERCI </h4>
         <br/>
         <h4>Web Development NIST May 2022</h4>
         <br/>
         <h4 className='padding_bottom_h4'>MERN Full Stack Development Syslify November 2022</h4>
        </div>
      </div>
    </div>
  )
}

export default About
