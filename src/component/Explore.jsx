import React from 'react'
import img from './image/animal.jpg'
import { Link } from 'react-router-dom'
function Explore() {
  return (
    <>
       <div className="recommanded-container">  
         <p className="recommended-heading text-dark ">You might Like</p>
                <div className="crew-swiper">
                
                <div className='crew-container d-flex'>
              <Link to='/details'  >
                <div className="card" >
                    <img src={img} className="card-img-top card-image" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example.</p>
                        
                        </div>
                    </div>
                </Link>
                
                
                    <div className="card" >
                    <img src={img} className="card-img-top card-image" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example.</p>
                        
                        </div>
                    </div>
                    <div className="card" >
                    <img src={img} className="card-img-top card-image" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example.</p>
                        
                        </div>
                    </div>
                    <div className="card" >
                    <img src={img} className="card-img-top card-image" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example.</p>
                        
                        </div>
                    </div>
                    <div className="card" >
                    <img src={img} className="card-img-top card-image" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example.</p>
                        
                        </div>
                    </div>
                    <div className="card" >
                    <img src={img} className="card-img-top card-image" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example.</p>
                        
                        </div>
                    </div>
                    <div className="card" >
                    <img src={img} className="card-img-top card-image" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example.</p>
                        
                        </div>
                    </div>
                    <div className="card" >
                    <img src={img} className="card-img-top card-image" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example.</p>
                        
                        </div>
                    </div>
                    <div className="card" >
                    <img src={img} className="card-img-top card-image" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example.</p>
                        
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    
      
    </>
  )
}

export default Explore
