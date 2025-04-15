
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// importing the components
import './App.css';
 import Home from './component/Home';
import MovieDetails from './component/MovieDetails';
import LatestMovies from './component/LatestMovies';
import Upcoming from './component/Upcoming';
import Layout from './component/Layout';
import ScrollToTop from './component/scrollTotop';
import Footer from './component/Footer';
import BookPage from "./component/BookPage";
import Seating from "./component/SeatingLayout";
import NearByEvents from "./component/NearByEvents";
import Search from "./component/Search";
// import setinglayput from "./component/seatingLayout";
function App() {
return (
    <>
       
      
      <Routes>
        <Route path="/" element={<Layout/>} >
         <Route index element={<Home />} />
          <Route path="latestmovies" element={<LatestMovies/>} />
          <Route path="upcomingmovies" element={<Upcoming/>} />
          <Route path="nearbyevents" element={<NearByEvents/>} />
          <Route path='moviedetails' element={<MovieDetails/>} />
          <Route path="search/:title" element={<Search/>} />
          <Route path="bookpage" element={<BookPage/>} />
          <Route path="/seatinglayout" element={<Seating/>} />
          

        </Route>

      </Routes>
      <Footer/>
      <ScrollToTop/>
     </>
   
    
  )
}

export default App
