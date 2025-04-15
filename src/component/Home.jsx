import React from 'react'
import ImageSlider from "./ImageSlider";
import Recommanded from "./Recommanded";
import Image from './image';
import Events from './Events';
import PrimeShow from './PrimeShow';

function Home() {
  return (
    <>
              
       {/* Image Slider */}
        <ImageSlider/>
        {/* recommand */}
       <Recommanded/>
       {/* Image */}
        <Image/>
       {/* Events */}
       <Events/>
       {/* prime show */}
       <PrimeShow/>


    </>
  )
}
export default Home