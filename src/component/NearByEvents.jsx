import React from 'react'

import ImageSlider from './ImageSlider'
import LatestMovieSlider from './LatestMovieSlider'
import PrimeShow from './PrimeShow'

function NearByEvents() {
  return (
    <>
  
        <ImageSlider/>
        <br/>
     <div className='container'>
        <LatestMovieSlider/>
    </div>
    <br/>
        <PrimeShow/>
    <br/>
     <div className='container'>
        <LatestMovieSlider/>
    </div>
      
 
    </>
  )
}

export default NearByEvents;
