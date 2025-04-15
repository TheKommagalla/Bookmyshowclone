// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import ActorDetails from './ActorDetails';

// function MovieDetails() {
//   const [movie, setMovie] = useState(null); // Not an array, expecting single object
//   const { title } = useParams(); // get title from URL
//   const navigate = useNavigate();

//   const handlerequest = () => {
//     navigate('/bookpage');
//   };

//   useEffect(() => {
//     const Fetch = async () => {
//       try {
//         const data = await fetch(`http://localhost:3000/api/${title}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!data.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const result = await data.json();
//         console.log(result);
//         setMovie(result);
//       } catch (error) {
//         console.log('Fetch Error:', error);
//       }
//     };

//     Fetch();
//   }, [title]);

//   return (
//     <>
//       <div className="Moviedetalis-container">
//         {movie ? (
//           <div className="row">
//             <div className="col-md-2">
//               <img
//                 src={`data:image/png;base64,${movie.image}`}
//                 className="card-img-top movie card-image h-auto"
//                 alt="Movie Poster"
//               />
//             </div>
//             <div className="col-md-4" style={{ margin: 'auto 10%' }}>
//               <h2 className="text-white">{movie.title}</h2>
//               <button type="button" className="btn btn-dark p-2 m-2 w-5">
//                 Rating
//               </button>
//               <button type="button" className="btn btn-dark p-2 m-2">
//                 Watch Now
//               </button>
//               <button type="button" className="btn btn-dark p-2 m-2">
//                 Trailer
//               </button>
//               <p className="text-white">Release Date: 2023-10-01</p>
//               <p className="text-white">• Duration: 2h 30m • Language: Telugu</p>
//               <p className="text-white">• Release: 28 March • Comedy, Action</p>
//               <button type="button" className="btn btn-primary" onClick={handlerequest}>
//                 Book Ticket
//               </button>
//             </div>
//           </div>
//         ) : (
//           <h1 className="text-danger text-center">Loading Movie Details...</h1>
//         )}
//       </div>

//       <ActorDetails />
//     </>
//   );
// }

// export default MovieDetails;
import React from 'react'
import img from './image/animal.jpg'
import ActorDetails from './ActorDetails'
import { useNavigate} from 'react-router-dom'

function MovieDetails() {

  const navigate = useNavigate()
  const handlerequest = () => {
    navigate('/bookpage')
  }
  return (
    <>
        {/* <h1 className='text-center'>Movie Details</h1> */}
        <div className="Moviedetalis-container" >
     
          
            <div className="row">
              <div className="col-md-2">
                  <img src={img} className="card-img-top movie card-image h-auto"  alt="Movie Poster"/>
              </div>
              <div className="col-md-4" style={{margin:'auto 10%'}}>
                  <h2 className='text-white'>Bharath</h2>
                  <button type="button" class="btn btn-dark p-2 m-2 w-5"> Rating </button>
                  <button type="button" class="btn btn-dark p-2 m-2"> Watch Now </button>
                  <button type="button" class="btn btn-dark p-2 m-2"> Trailer </button>
                  <p className='text-white'>Release Date: 2023-10-01</p>
                  <p className='text-white'> • Duration: 2h 30m • Language:Telugu </p>
                   
                  <p className='text-white'>• Release:28 march • Comed,Action</p>
                  <button type="button" class="btn btn-primary" onClick={handlerequest}>Book Ticket</button>
                </div>
              </div>
        </div>

        <ActorDetails/> 
    </>
  )
}
export default MovieDetails