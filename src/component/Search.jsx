import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ActorDetails from './ActorDetails';

function Search() {
  console.log("Search component mounted");
  const [movie, setMovie] = useState(null); // Not an array, expecting single object
  const { title } = useParams(); // get title from URL
  const navigate = useNavigate();

  const handlerequest = () => {
    navigate('/bookpage');
  };

  useEffect(() => {
    const Fetch = async () => {
      try {
        const data = await fetch(`http://localhost:3000/api/${title}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log("Title from URL:", title); // Debugging line to check the title from URL


        if (!data.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await data.json();
        console.log('result :',result);
        setMovie(result);
        // console.log("Image:",{ movie.title}); // Debugging line to check the fetched movie data
      } 
      catch (error) {
        console.log('Fetch Error:', error);
      }
    };

    Fetch();
  }, [title]);

  return (
    <>
     
        {movie? (
          <>
                  <div className="Moviedetalis-container">
                
                    <div className="row">
                      <div className="col-md-2">
                        <img
                          src={`data:image/png;base64,${movie.image}`}
                          className="card-img-top movie card-image h-auto"
                          alt="Movie Poster"
                        />
                      </div>
                      <div className="col-md-4" style={{ margin: 'auto 10%' }}>
                        <h2 className="text-white">{movie.subtitle}</h2>
                        <button type="button" className="btn btn-dark p-2 m-2 w-5">
                          Rating
                        </button>
                        <button type="button" className="btn btn-dark p-2 m-2">
                          Watch Now
                        </button>
                        <button type="button" className="btn btn-dark p-2 m-2">
                          Trailer
                        </button>
                        <p className="text-white">Release Date: {movie.releaseDate}</p>
                        <p className="text-white">• Duration: {movie.duration}• Language: {movie.Language}</p>
                        <p className="text-white"> • {movie.genres}</p>
                        <button type="button" className="btn btn-primary" onClick={handlerequest}>
                          Book Ticket
                        </button>
                      </div>
                    </div>
                   
                  </div>

             <ActorDetails />
        </>
        ) : (
          <div className="container mb-2">
           <h1 className="text-danger text-center">No result founded...</h1>
          </div>
        )}
     </>

  );
}

export default Search;