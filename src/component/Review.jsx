import React from 'react'
import { useState,useEffect} from 'react';
function Review({MovieName}) {
     const [Data,setData]=useState([]);
        useEffect(()=>{
            
           async function FetchData(){
            try{
                let response=await fetch("http://localhost:5000/Review");
                let data= await response.json();
                setData(data);
                console.log(data);
    
            
        }
            catch(error)
            {
                console.log(error);
            }
        }
            FetchData();
        },[]);
           
        return(
      
           
                <>
                      
                    {Data.map((item, index) => (
                        <div key={index} className="card text-white bg-dark mb-3 d-flex" style={{ maxWidth: "18rem" }}>
                            <div className="card-header review-card">
                                <img src={`data:image/jpeg;base64,${item.image}`} alt="{item.reviewer}" className='user-icon'/>
                                <h5 className="card-title user-name">{item.reviewer}</h5>
                            </div>
                            
                            <div className="card-body">
                              
                                <p className="card-text">{item.rating}.</p>
                                <p className="card-text">{item.review}.</p>
                            </div>
                        </div>
                    ))}

                </>
        )
 
}
export default Review;
