import React from 'react'
import  { useEffect } from 'react';
import './Home.css'
import backgroundimg from'../background.png'
const Home = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = backgroundimg;
    link.as = 'image';
    document.head.appendChild(link);
  }, []);
    return (
        <main className='main-home'>
          <script src="js/typer.min.js"></script>
      <div className='HomeContainer'>
    <div className="container" id='home'>
      <div className="section-1">
        <img src={backgroundimg} alt="images" className='background-image' />
        <h1 className='sudarshan'><span>IDK WHT TO WRITE</span> 
        <h1>Hey, I'm
    <span className="typewrite" data-loop="yes" data-speed="100" data-delay="1000" data-words='["word", "word 2", "word 3"]'></span> </h1>
        </h1>
      </div>
      </div>
      <div id="about">
      <h1>HEADING SECTION 2</h1>
      <p>
      Node.js and Express.js are popular choices for developing interesting and interactive web applications. 

      </p>
      <p>
      Node.js and Express.js are popular choices for developing interesting and interactive web applications. 
      </p>
      </div>
      </div>
      </main>
      )
    }
    
    export default Home
    