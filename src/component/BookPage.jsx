import React from 'react'
import Date from './Date'
import Theater from './Theater'
function BookPage() {
  return (
    <>
      <div className='container '>
       
        {/* <div className="Bookpage-container col-12 col-md-6 col-lg-4">
           <div className="Movie-title"> 
           
            p className='recomanded-heading text-center'>JACK-TelUgu</p>
           </div> 
        </div> */}
        {/* <p>Hello</p> */}
        <h1 className='recomanded-heading mb-2'>JACK-TelUgu</h1>
        <span className='border  border-dark rounded-pill p-2 m-1'>Thriller</span>
        <span className='border  border-dark rounded-pill p-2 m-1'>Thriller</span>
        <span className='border  border-dark rounded-pill p-2 m-1'>Thriller</span>
        <hr/>
        <Date/>
        <Theater/>
      </div>
      
    </>
  )
}

export default BookPage
