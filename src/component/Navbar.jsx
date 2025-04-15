
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleSearchSubmit = (e) => {
    // e.preventDefault(); // Prevent page reload
    if (search.trim()) {
      const encodedSearch = encodeURIComponent(search.trim());
      console.log('Navigating to:', `/search/${encodedSearch}`);
      navigate(`/search/${encodedSearch}`);
      setSearch('');
    }
  };

  return (
    <>
      <div className='container sticky-top'>
        <nav className="navbar navbar-expand-md navbar-dark ">
          <div className="container-fluid">
            <Link to='/' className="navbar-brand text-dark" style={{ marginLeft: '50px' }}>
              E-Cube Moviez
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse nav-bar" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link to='/latestmovies' className="nav-link nav-items text-dark">Latest Movies</Link>
                </li>
                <li className="nav-item">
                  <Link to='/upcomingmovies' className="nav-link nav-items text-dark">Upcoming Movies</Link>
                </li>
                <li className="nav-item">
                  <Link to='/nearbyevents' className="nav-link nav-items text-dark">NearBy Events</Link>
                </li>
              </ul>
              <form className="d-flex mr-5" onSubmit={handleSearchSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  name='title'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
