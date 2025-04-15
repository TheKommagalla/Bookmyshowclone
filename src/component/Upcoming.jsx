import React from 'react'
import LatestMovieSlider from "./LatestMovieSlider";
function Upcoming() {
  return (
    <>
        <div className="latest-movie-container">
                <div className="Latest-Filter">
                 
                 <p className="recommended-heading text-dark ">Filters</p>
                   <select  className="form-select  mx- auto my-4 " aria-label="Default select example">
                    {/* <option    selected hidden>Language</option> */}
                    <option value=""  hidden> Select Language</option>
                    <option value="telugu">Latest Movies</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Horror">Horror</option>
                    <option value="Romance">Romance</option>
                    
                   </select>
                   <select  className="form-select mx- auto my-4" aria-label="Default select example">
                    {/* <option    selected hidden>Language</option> */}
                    <option value="" hidden >Genres </option>
                    <option value="telugu">Latest Movies</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Horror">Horror</option>
                    <option value="Romance">Romance</option>
                    
                   </select>
                   <select  className="form-select mx- auto my-4" aria-label="Default select example">
                    {/* <option    selected hidden>Language</option> */}
                    <option value=""  hidden >Formate </option>
                    <option value="telugu">Latest Movies</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Horror">Horror</option>
                    <option value="Romance">Romance</option>
                    
                   </select>
                </div>
                <div className="Latest-Movies ">
                    <p className="recommended-heading text-dark ">Movies</p>
                    <div className=" d-flex flex-wrap justify-content-start p-2 bg-light rounded-3 mx-2">
                     <p className="text-bold my-auto">Coming soon</p>
                    </div>
                    <LatestMovieSlider/>
                    <LatestMovieSlider/>

                  </div>

              </div>
    </>
  )
}

export default Upcoming;
