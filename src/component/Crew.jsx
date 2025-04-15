import React, { useEffect, useState } from 'react'
import img from './image/animal.jpg'
import Explore from './Explore'
 function Crew() {
    const[data,setdata]=useState([])
    useEffect(()=>{
        const Fetch =async() =>{
            try{  
              const data = await fetch(`http://localhost:3000/crew`, {
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
              setdata(result)

              console.log("crew data", typeof data)
        
            }
            catch(error){
              console.log(error)
         
             }
        }
        Fetch()
    },[])
  return (
    <>
   <p className="recommended-heading text-dark ">Crew</p>
            <div className="crew-swiper">

                <div className='crew-container d-flex'>
                    
                    {/* <div className='crew-container d-flex '> */}
                      { data.length>0 ? data.map((item,index)=>
                        (<div className="crew-card " key={index}>
                            <div className="crew-card-image w-10 h-10" style={{width:'150px',height:'150px',borderRadius:'50%', overflow:'hidden',border:'1px solid #ccc'}}>
                                <img src={`data:image/png;base64,${item.image}`} alt="Crew Member" />
                            </div>
                            <div className="crew-card-details  justify-content-center" >
                                <p className="crew-name ">{item.Name} </p>
                                <p className="crew-role text-center">{item.Role}</p>
                            </div>
                            </div>
                            )):
                            (<div className="container">
                                <p className='recommaded heading text-danger text-center'>No Data avaliable</p>
                              </div>)


                      }
                       
                                
                    
                </div>
            </div>
        
    </>
  )
}
export default Crew
