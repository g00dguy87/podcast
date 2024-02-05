import React from 'react';
// import { Link } from 'react-router-dom';
// import BannerImage from "../assets/Foto1.jpg";
import '../styles/Home.css';
import HeroSection from '../components/HeroSection';
import About from '../components/About'
import LatestPodcast from '../components/LatestPodcast';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <LatestPodcast />
      {/* <Landing />
      <Landing2 />
      <Spotify /> */}
    </>

    // <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    // <div className="headerContainer">
    //   <h1>Podcast Name</h1>
    //   <p>Die Branding Experten</p>
    //   <Link to="/">
    //   <button> Jetzt Reinhören </button>
    //   </Link>
    // </div>
    // </div>
  )
}

export default Home;
