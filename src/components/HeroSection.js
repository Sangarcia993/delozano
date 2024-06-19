import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted >
        <source src='/videos/video-2.mp4' type='video/mp4' />
      </video>
      <h1>de lo zano</h1>
      <p>Accesorios con manos de arquitecta</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          direcion='/products'
        >
          Productos
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => console.log('hey')}
          direcion='/services'
        >
          Ultimas publicaciones
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

