import React from 'react';
import './Testimonial.css';
import avatr1 from '../Home/asset/portfolio_pic.jpeg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonial() {
  return (
    <div className='testimonial'>
      <div className='testimonial_container'>
        <h2>Testimonials</h2>
        <Swiper className='testimonial_article_div' 
              modules={[ Pagination ]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }} >
        <SwiperSlide className='testimonial_article'>
            <div className='client_avatar'>
                <img className='avatar' src={avatr1}/>
            </div>
            <h4 className='client_name'>Godev</h4>
            <p className='client_review'>Loremdfsdjn fsjkv csdjkcnjks jd jvsdjk jd jksd  jsd j sd sd ds jsd djkds vsdjk vvvvvvvvvvvvvvvsdj vsd 
                sdjvjsd vjsd vjsd vsdj vsdvlksdkvdvmdsvmsddddd  mdkmfsd fmsf mslmlsmf   mfsdmfm  klmfsdmfm fkslmfsdmfls
            </p>
        </SwiperSlide>
        <SwiperSlide className='testimonial_article'>
            <div className='client_avatar'>
                <img className='avatar' src={avatr1}/>
            </div>
            <h4 className='client_name'>Godev</h4>
            <p className='client_review'>Loremdfsdjn fsjkv csdjkcnjks jd jvsdjk jd jksd  jsd j sd sd ds jsd djkds vsdjk vvvvvvvvvvvvvvvsdj vsd 
                sdjvjsd vjsd vjsd vsdj vsdvlksdkvdvmdsvmsddddd  mdkmfsd fmsf mslmlsmf   mfsdmfm  klmfsdmfm fkslmfsdmfls
            </p>
        </SwiperSlide>
        </Swiper>
     
      </div>
    </div>
  )
        
}

export default Testimonial
