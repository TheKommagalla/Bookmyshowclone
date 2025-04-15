import React from 'react'
import img from './image/animal.jpg'
import { Link } from 'react-router-dom'
function PrimeShow() {
  return (
    <>
       <div className='prime-showcontainer'>
        <img src='' alt='primeIcon' className='image icon'/>
          <p className="recommended-heading text-dark ">PrimeShow Movies</p>
              <div className="card-swiper">
                <div className='card-container d-flex'>
                         <Link to='/details' style={{textDecoration:"none",display:'block'}} >
                            <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                                <img src={img} className="card-img-top card-image"  alt="..."/>
                                    <div className="card-body ">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example.</p>
                                    
                                    </div>
                                </div>
                        </Link>
                        <Link to='/details' style={{textDecoration:"none",display:'block'}} >
                            <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                                <img src={img} className="card-img-top card-image"  alt="..."/>
                                    <div className="card-body ">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example.</p>
                                    
                                    </div>
                                </div>
                        </Link>
                        <Link to='/details' style={{textDecoration:"none",display:'block'}} >
                            <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                                <img src={img} className="card-img-top card-image"  alt="..."/>
                                    <div className="card-body ">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example.</p>
                                    
                                    </div>
                                </div>
                        </Link>
                        <Link to='/details' style={{textDecoration:"none",display:'block'}} >
                            <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                                <img src={img} className="card-img-top card-image"  alt="..."/>
                                    <div className="card-body ">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example.</p>
                                    
                                    </div>
                                </div>
                        </Link>' <Link to='/details' style={{textDecoration:"none",display:'block'}} >
                            <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                                <img src={img} className="card-img-top card-image"  alt="..."/>
                                    <div className="card-body ">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example.</p>
                                    
                                    </div>
                                </div>
                        </Link>
                        <Link to='/details' style={{textDecoration:"none",display:'block'}} >
                            <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                                <img src={img} className="card-img-top card-image"  alt="..."/>
                                    <div className="card-body ">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example.</p>
                                    
                                    </div>
                                </div>
                        </Link>
                        <Link to='/details' style={{textDecoration:"none",display:'block'}} >
                            <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                                <img src={img} className="card-img-top card-image"  alt="..."/>
                                    <div className="card-body ">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example.</p>
                                    
                                    </div>
                                </div>
                        </Link>'
                        
                        
                    </div> 
                </div>
            </div>
    </>
  )
}
export default PrimeShow