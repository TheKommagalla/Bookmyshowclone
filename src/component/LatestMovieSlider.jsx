import React from 'react'
import img from './image/animal.jpg'
import { Link } from 'react-router-dom'
import img1 from './image/daaku-maharaaj-et00419964-1731669684.jpg'
import { useEffect, useState } from 'react'
function LatestMovieSlider() {
    const [movie, setMovie] = useState([])
    
    useEffect(() => {
      const Fetch =async() =>{
        try{  
          const data = await fetch(`http://localhost:3000/api/${title}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            })
          if (!data.ok) {
            throw new Error('Network response was not ok');
          }
  
          const result = await data.json()
          console.log(result)
          setMovie(result)
  
        }
        catch(error){
          console.log(error)
     
         }
    }
    Fetch()
    }, [])

  return (
    <>
            <div className="card-swiper">
                
                <div className='card-container d-flex'>
                   
                    <Link to="/moviedetails" style={{textDecoration:"none",display:'block'}} >
                        <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                            <img src={img1} className="card-img-top card-image"  alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                
                                </div>
                            </div>
                        </Link>
                        <Link to="/moviedetails" style={{textDecoration:"none",display:'block'}} >
                        <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                            <img src={img1} className="card-img-top card-image"  alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                
                                </div>
                            </div>
                        </Link>
                        <Link to="/moviedetails" style={{textDecoration:"none",display:'block'}} >
                        <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                            <img src={img1} className="card-img-top card-image"  alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                
                                </div>
                            </div>
                        </Link>
                        <Link to="/moviedetails" style={{textDecoration:"none",display:'block'}} >
                        <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                            <img src={img1} className="card-img-top card-image"  alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                
                                </div>
                            </div>
                        </Link>
                        <Link to="/moviedetails" style={{textDecoration:"none",display:'block'}} >
                        <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                            <img src={img1} className="card-img-top card-image"  alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                
                                </div>
                            </div>
                        </Link>
                        <Link to="/moviedetails" style={{textDecoration:"none",display:'block'}} >
                        <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                            <img src={img1} className="card-img-top card-image"  alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                
                                </div>
                            </div>
                        </Link>
                        <Link to="/moviedetails" style={{textDecoration:"none",display:'block'}} >
                        <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                            <img src={img1} className="card-img-top card-image"  alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                
                                </div>
                            </div>
                        </Link>
                        <Link to="/moviedetails" style={{textDecoration:"none",display:'block'}} >
                        <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                            <img src={img1} className="card-img-top card-image"  alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                
                                </div>
                            </div>
                        </Link>
                        <Link to="/moviedetails" style={{textDecoration:"none",display:'block'}} >
                        <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                            <img src={img1} className="card-img-top card-image"  alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                
                                </div>
                            </div>
                        </Link>
                
                
                </div> 
            </div>
        
    
    
      
    </>
  )
}

export default LatestMovieSlider
