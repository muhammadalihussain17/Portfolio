import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='contact'>
      <div className='contact_container'>
      <h2>Contact Me</h2>
          <form>
            <label>Full Name</label>
            <input type='text' placeholder='Enter Full Name' required/>
            <label>Email</label>
            <input type='text' placeholder='Enter Email Address' required/>
            <label>City</label>
            <input type='text' placeholder='Enter City' required/>
            <label>Message</label>
            <textarea type='text' placeholder='Message' required/>
            <button className='btn' type='submit'>Submit</button>
          </form>
      </div>
    </div>
  )
}


export default Contact
