import React from 'react'
import './Home.css'
import woman from '../../assets/woman.png'
import { TypeAnimation } from "react-type-animation";


function Home() {
  return (
    <div className="home" id="home">
      <div className="lefthome">
        <div className="homedetails">
            <div className="line1">I'M</div>
            <div className="line2">ASHWINI MARATHE</div>
            <div className="line3">
                <TypeAnimation
    sequence={[
      "Web Developer", 1000,
      "MERN Developer", 1000,
      "Java Developer", 1000,
    ]}
    speed={50}
    repeat={Infinity}
  />
            </div>
            <button>Hire Me</button>
        </div>
      </div>
      <div className="righthome">
        <img src={woman} alt="Profile" />
      </div>
    </div>
  )
}

export default Home
