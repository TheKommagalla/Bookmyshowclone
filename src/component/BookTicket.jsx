// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// // import "./MovieDetail.css";
// import Review from './Review'

// function BookTicket() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     async function fetchMovie() {
//       try {
//         const res = await fetch(`http://localhost:5100/movies/${id}`);
//         if (!res.ok) {
//           throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         const data = await res.json();
//         setMovie(data);
//       } catch (err) {
//         console.error(err.message);
//       }
//     }

//     fetchMovie();
//   }, [id]);

//   if (!movie) return <p>Loading...</p>;

//   return (
//     <>        
//       <div className="movie-detail">
//           {/* Full Screen Background Image */}
//           <div
//             className="movie-bg"
//             style={{
//               backgroundImage: `url(data:image/jpeg;base64,${movie.poster})`,
//             }}
//           ></div>

//           <div className="movie-content">
//             {/* Left Side: Small Poster */}
//             <div className="movie-left">
//               <img src={`data:image/jpeg;base64,${movie.poster}`} alt={movie.title} />
//             </div>

//             {/* Right Side: Title, Rating, Button */}
//             <div className="movie-right">
//               <h1>{movie.title}</h1>
//               <p className="rating">⭐ {movie.rating} / 10</p>
//               <button className="book-btn">Book Tickets</button>
//             </div>
//           </div>
//         </div>
//         <p className="recommended-heading" style={{display:`block`,margin:`2%`}}>Top Reviews </p>
//         <div className="review-container">
      
//             <Review MovieName={movie.title}/>
//         </div>
//     </>

//   );
// }

// export default BookTicket;
import React from 'react'

export default function BookTicket() {
  return (
    <>
      <div className="Ticket-bookContainer">
          <h1>thank you for booking</h1>
      </div>
    </>
  )
}


