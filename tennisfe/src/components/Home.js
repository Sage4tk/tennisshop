import React from 'react';

import Nav from './Nav';

import bgm from '../img/landingbgm.jpg';

export default function Home() {

    const landingStyle = {
        backgroundImage: `url(${bgm})`,
        backgroundSize: "cover",
        backgroundPosition: "0"
    }
    
    return (
        <div>
            <Nav />
            <div className="landing" style={landingStyle}>
                <h1>OWN THE COMPETITION.</h1>
            </div>
        </div>
    )
}