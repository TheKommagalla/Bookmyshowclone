import React from 'react'
import img from './image/hollywood.jpg'
 function Image() {
  return (
    <>
      <div className='image-container'>
        <img src={img} alt='Random Image' className='image static-image' />
      </div>
    </>
  )
}
export default Image