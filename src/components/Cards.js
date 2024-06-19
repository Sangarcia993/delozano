import React from 'react'
import CardItem from './CardItem.js'
import './Cards.css'



function Cards() {
  return (
    <div className='Cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    
                    src='images/collar-1.jpeg'
                    text='La belleza de las piedras naturales'
                    label='Collar'
                    path='/products'
                    /> 
                    <CardItem
                    
                    src='images/collar-2.jpeg'
                    text='MIX XL, nuestros clásicos collares extra largos y llenos de color'
                    label='Collar'
                    path='/products'
                    /> 
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    
                    src='images/pulseras-1.jpeg'
                    text='Explora nuestras pulseras en mix de piedras naturales'
                    label='Pulsera'
                    path='/products'
                    /> 
                    <CardItem
                    
                    src='images/pulseras-2.jpeg'
                    text='Pulseras en todas las gamas de colores que nos dan las piedras naturales. Terminaciones de plata sólida'
                    label='Pulsera'
                    path='/products'
                    /> 
                    <CardItem
                    
                    src='images/miyuki-1.jpeg'
                    text='La elegancia de nuestras miyuki bordadas a mano. Exclusividad y diseños unicós'
                    label='Miyuki'
                    path='/products'
                    /> 
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards