// Carousel.js
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './image/prabhas.png';
import img2 from './image/thandel.png'
import img3 from './image/bollywood.jpg';

import React from "react";
const ImageSlider = () => {
  return (
    <div className='container'>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel"  style={{height:'auto',width:`100%`,margin:'auto',border:'1px solid #ccc'}}>
        {/* <div className="carousel-inner" style={{height:'400px',width:`100%`,margin:'auto'}}> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100  ImageSlider-img" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 ImageSlider-img" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 ImageSlider-img" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

   
  );
};

export default ImageSlider;
