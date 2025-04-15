import React, { useEffect, useState } from 'react';
import img from './image/animal.jpg';
import Crew from './Crew';
import Explore from './Explore';

function ActorDetails() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const Fetch = async () => {
      try {
        const response = await fetch(`http://localhost:3000/actor`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log("Fetched Crew Data:", result);
        setdata(result);
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };

    Fetch();
  }, []);

  return (
    <>
      <div className="deatalis-container">
        <p className="recommended-heading text-dark">About the Movies</p>
        <p>
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <hr />

        {/* Cast */}
        <p className="recommended-heading text-dark">Cast</p>

        {data.length > 0 ? (
          <div className="crew-swiper">
            <div className="crew-container d-flex flex-wrap gap-3">
              {data.map((item, index) => (
                <div className="crew-card" key={index}>
                  <div
                    className="crew-card-image"
                    style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '1px solid #ccc',
                    }}
                  >
                    <img
                      src= {`data:image/png;base64,${item.image}`}
                      alt={item.Name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className="crew-card-details text-center p-2"
                    
                  >
                    <p className="crew-name mb-1">{item.Name}</p>
                    <p className="crew-role mb-0">Role: {item.Role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="container">
            <p className="recommaded heading text-danger text-center">
              No Data available
            </p>
          </div>
        )}

        <hr />
        {/* Workers */}
        <Crew />
      </div>

      <Explore />
    </>
  );
}

export default ActorDetails;
