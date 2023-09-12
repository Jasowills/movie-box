import React from "react";
import Main from "../components/Main";
import "../styles/index.css"
import FeaturedMovies from "../components/FeaturedMovies";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="">
    <Main/>
    <FeaturedMovies/>
    <Footer/>
    </div>
  );
}

export default Home;
