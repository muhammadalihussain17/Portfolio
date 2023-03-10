import React from 'react';
import './Home.css';
import pic from './asset/portfolio_pic.jpeg'

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <div className='home_container_top'>
          <h5>Hello, I'm</h5>
          <h2>Muhammad Ali Hussain</h2>
          <h5>Full Stack Developer & Telecommunication Engineer</h5>
        </div>
        <div className='home_container_bottom'>
          <div className='image_div'>
           <img className='portfolio_pic' src={pic}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
