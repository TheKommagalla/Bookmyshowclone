import React from 'react'
import { useEffect, useState } from 'react'
import img from './image/animal.jpg'
import { Link } from 'react-router-dom'
function Recommanded() {
    const [movie, setMovie] = useState([]); // Not an array, expecting single object

  useEffect(() => {
    const Fetch = async () => {
      try {
        const data = await fetch(`http://localhost:3000/movie`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!data.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await data.json();
        console.log(result);
        setMovie(result);
      } catch (error) {
        console.log('Fetch Error:', error);
      }
    };

    Fetch();
  }, []);

  return (
    <>
        <div className="recommanded-container">  
         <p className="recommended-heading text-dark ">Recommended Movies</p>
                <div className="card-swiper">
                
                <div className='card-container d-flex'>
                {
                    movie.length > 0 ? movie.map((item, index) => (
                        <Link to='/moviedetails' style={{textDecoration:"none",display:'block'}} >
                            <div className="card border-0 bg-transparent" style={{ width: '18rem' }} key={index}>
                                <img src={`data:image/png;base64,${item.image}`} className="card-img-top card-image" alt="..." />
                                <div className="card-body ">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.subtitle}</p>
                                </div>
                            </div>
                        </Link>
                    )) : (
                        <div className="container">
                            <p className='recommaded heading text-danger text-center'>No Data available</p>
                        </div>
                    )
                }
                   {/* <Link to='/moviedetails' style={{textDecoration:"none",display:'block'}} >
                        <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                            <img src={img} className="card-img-top card-image"  alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                
                                </div>
                            </div>
                        </Link>

                        <Link to='/moviedetails' style={{textDecoration:"none",display:'block'}} >
                        <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                            <img src={img} className="card-img-top card-image"  alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                
                                </div>
                            </div>
                        </Link>
                        <Link to='/moviedetails' style={{textDecoration:"none",display:'block'}} >
                        <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                            <img src={img} className="card-img-top card-image"  alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                
                                </div>
                            </div>
                        </Link>
                        <Link to='/moviedetails' style={{textDecoration:"none",display:'block'}} >
                        <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                            <img src={img} className="card-img-top card-image"  alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                
                                </div>
                            </div>
                        </Link>
                        <Link to='/moviedetails' style={{textDecoration:"none",display:'block'}} >
                        <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                            <img src={img} className="card-img-top card-image"  alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                
                                </div>
                            </div>
                        </Link>
                        <Link to='/moviedetails' style={{textDecoration:"none",display:'block'}} >
                        <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                            <img src={img} className="card-img-top card-image"  alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                
                                </div>
                            </div>
                        </Link>
                        <Link to='/moviedetails' style={{textDecoration:"none",display:'block'}} >
                        <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                            <img src={img} className="card-img-top card-image"  alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                
                                </div>
                            </div>
                        </Link>
                        <Link to='/moviedetails' style={{textDecoration:"none",display:'block'}} >
                        <div className="card border-0 bg-transparent" style={{ width: '18rem' }} >
                            <img src={img} className="card-img-top card-image"  alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example.</p>
                                
                                </div>
                            </div>
                        </Link>
                
                 */}
                    
                </div> 
            </div>
        </div>
    
    

    </>
  )
}
export default Recommanded