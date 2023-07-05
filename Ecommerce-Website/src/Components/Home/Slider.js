import React, { useState } from 'react'
import './slider.css'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../images/slider1.png'
import slider2 from '../../images/slider4.png'
import prod3 from '../../images/prod3.png'
import prod4 from '../../images/prod4.png'
import { Swiper, SwiperSlide } from 'swiper/react';

export const Slider = () => {

  const [index , setIndex]  = useState(0) ;

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='slider-background' setInterval={2000}>
      <div className='d-flex flex-row justify-content-center align-items-center'>
      <img
        style={{height:'296px' , with:'313.53px'}}
        className=""
        src={slider1}
        alt="First slide"
      />
      <div>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
      </div>
      </Carousel.Item>

      <Carousel.Item className='slider-background2' setInterval={2000}>
      <div className='d-flex flex-row justify-content-center align-items-center'>
      <img
        style={{height:'296px' , with:'313.53px'}}
        className=""
        src={slider2}
        alt="First slide"
      />
      <div>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
      </div>
      </Carousel.Item>

      <Carousel.Item className='slider-background3' setInterval={2000}>
      <div className='d-flex flex-row justify-content-center align-items-center'>
      <img
        style={{height:'296px' , with:'313.53px'}}
        className=""
        src={prod3}
        alt="First slide"
      />
      <div>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
      </div>
      </Carousel.Item>

      <Carousel.Item className='slider-background4' setInterval={2000}>
      <div className='d-flex flex-row justify-content-center align-items-center'>
      <img
        style={{height:'296px' , with:'313.53px'}}
        className=""
        src={prod4}
        alt="First slide"
      />
      <div>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
      </div>
      </Carousel.Item>
    </Carousel>
  )
}
