import React from 'react'
import img1 from './image/adventure-fun-collection.avif'
import img2 from './image/amusement-parks-banner.avif'
import img3 from './image/arts-crafts-collection.avif'
import img4 from './image/comedy-shows-collection.avif'
import img5 from './image/kids-banner-desktop.avif'
import img6 from './image/music-shows-collection.avif'

import { ImGoogle2 } from 'react-icons/im'

 function Events() {
  return (
    <> 
      <div className="recommanded-container">  
                 <p className="recommended-heading text-dark ">Top Events</p>
                    <div className="card-swiper">
                        
                        <div className='card-container d-flex'>
                     
                                <div className="event-card" >
                                    <img src={img1} className="card-img-top card-image ImageSlider-img" alt="..."/>
                                </div>
                                <div className="event-card" >
                                    <img src={img2} className="card-img-top card-image ImageSlider-img " alt="..."/>
                                </div>
                                
                                <div className="event-card" >
                                    <img src={img3} className="card-img-top card-image ImageSlider-img" alt="..."/>
                                </div>
                                
                                <div className="event-card" >
                                    <img src={img4} className="card-img-top card-image ImageSlider-img" alt="..."/>
                                </div>
                                
                                <div className="event-card" >
                                    <img src={img5} className="card-img-top card-image" alt="..."/>
                                </div>
                                
                                <div className="event-card" >
                                    <img src={img6} className="card-img-top card-image" alt="..."/>
                                </div>
            
                                
                        
                            </div>
                        </div>
                </div>
     </>
      
  )
}
export default Events