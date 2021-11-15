import React from "react";
import Heading from "./Home/Heading";
import Registraion from './Home/Registration'; 
import Carousel_domain from "./Home/carousel";
function Home() {
  return (
    <div className='home'>
      <Heading />
      <Registraion />
      <Carousel_domain />
    </div>
    
  );
}

export default Home;