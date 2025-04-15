// import React, { useEffect, useState } from "react";
// import salaar from './images/salaar.jpg';
// import kgf from './images/kgf.jpg';
// import pushpa from './images/pushpa.jpg';
// import rrr from './images/rrr.jpg';
// import adipurush from './images/adipurush.jpg';
// import akkashame from './images/akkashame_nehadhura.jpg';



// const Card= () => {
//   const [movies, setMovies] = useState([]);

//   // Fetch data from JSON file
//   useEffect(() => {
//     fetch("http://localhost:5000/Data")
//       .then((response) => response.json())
//       .then((data) => setMovies(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div className="container my-5">
//       <h1 className="text-center mb-4">Movie Cards</h1>
//       <div className="row">
//         {movies.map((movie) => (
//           <div className="col-md-4 mb-4" key={movie.id}> 
//             <div className="card h-100">
//             <img src= {data.poster} className="card-img-top" alt={movie.title} />
//             <div className="card-body">
               
//                 <button className="btn btn-primary">Book Ticket</button>
//             </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;

// import imageData from "./db.json";

// Manually import all images
// import salaar from './image/salaar.jpg';
// import kgf from './image/kgf.jpg';
// import pushpa from './image/pushpa.jpg';
// import rrr from './image/RRR.jpg';
// import adipurush from './image/adipurush.jpg';
// import akkashame from './image/akkashame nehadhura.jpg';

//  const Card = () => {
//    const [movies, setMovies] = useState();

//   // Your data (can also be fetched dynamically)
//   const movieData = [
//     { title: "Salaar", poster: salaar, description: "A journey of action and power." },
//     { title: "KGF", poster: kgf, description: "The story of KGF." },
//     { title: "Pushpa", poster: pushpa, description: "Action thriller movie." },
//     { title: "RRR", poster: rrr, description: "A historical action drama." },
//     { title: "Adipurush", poster: adipurush, description: "A mythical action saga." },
//     { title: "Akka Shame Nee Haddura", poster: akkashame, description: "A powerful story of resilience." },
//   ];

  // Simulate fetching data or use static data
//   useEffect(() => {
//    async function fetchData() {
      
//     try{
//     let response=await fetch("http://localhost:5000/movies")
//     let data=await response.json();
//     setMovies(data);
//     console.log(data)
  
//   }
//     catch(error){
//       console.error("Error fetching data:", error)
//     }

//   }
//   fetchData()

    


//     // setMovies(movieData);  // Set movie data directly
//   }, []);

//   return (
//     <div className="container my-5">
    
//       <div className="row">
//         {movies.map((movie, index) => ( 
//           <div className="col-md-4 mb-4" key={index}>
//             <div className="card h-100">
//               <img src={movie.poster} className="card-img-top" alt={movie.poster} />
//               <div className="card-body">
//                 <h5 className="card-title">{movie.title}</h5>
//                 {/* <p className="card-text">{movie.description}</p> */}
//                 <button className="btn btn-primary">Book Ticket</button>
//               </div>
//             </div>
//           </div>
//          ))}
//       </div>
//     </div>
//   );
// };

// export default Card;

import React, { useEffect, useState } from "react";
const Card = () => {
  const [movies, setMovies] = useState([]); // Initialize state to hold movies data

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("http://localhost:5000/movies");
        let data = await response.json();
        setMovies(data); // Update state with fetched data
        console.log(data); // Log fetched data to console
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this runs once when component mounts

  return (
    <div className="container my-5">
      <div className="row">
        {movies.map((movie, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img src={`data:image/jpeg;base64,${movie.poster}`} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.description}</p>
                <button className="btn btn-primary">Book Ticket</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

