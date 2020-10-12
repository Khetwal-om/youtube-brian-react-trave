import React from 'react'

import './Hero.css'


import backgroundVideo from '../../videos/video-2.mp4'
import { Button } from '../Button/Button'

function Hero() {
    return (
        <div className="hero-container">
            <video src={backgroundVideo} autoPlay loop muted></video>
           <div className="hero__content">
            <h1>Adventure Awaits</h1>    
                <p>What are you waiting for?</p>
                <div className="hero-btns">
                    <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Get Started</Button>
                    <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Watch trailer <i className="far fa-play-circle"></i> </Button>
                </div>

            </div> 
         </div>
    )
}

export default Hero
