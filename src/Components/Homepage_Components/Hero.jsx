import React from 'react';
import { Carousel } from 'antd';

import sliderimg1 from '/SliderImages/img1.jpg'
import sliderimg2 from '/SliderImages/img2.jpg'
import sliderimg3 from '/SliderImages/img3.jpg'
import sliderimg4 from '/SliderImages/img4.jpg'

function Hero() {
  const imgStyle = {
    width: '100vw',
    height: '80vh',
  };

  return (
    <div className='hero-container'>
      <Carousel autoplay autoplaySpeed={8000} dots={true} effect="fade">
        <div>
          <img src={sliderimg1} style={imgStyle} />
        </div>
        <div>
          <img src={sliderimg2} style={imgStyle} />
        </div>
        <div>
          <img src={sliderimg3} style={imgStyle} />
        </div>
        <div>
          <img src={sliderimg4} style={imgStyle} />
        </div>
      </Carousel>
    </div>

  )
}

export default Hero