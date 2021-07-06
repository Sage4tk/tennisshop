import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';

import bgm from '../img/landingbgm.jpg';

export default function Home() {

    const landingStyle = {
        backgroundImage: `url(${bgm})`,
        backgroundSize: "cover",
        backgroundPosition: "0",
    }

 
    return (
        <div>
            <Nav />
            <div className="landing" style={landingStyle}>
                <div className="landing_message">
                    <h1>OWN THE COMPETITION.</h1>
                    <p>Summer items to look cool on the summer heat!</p>
                    <Link to="store">BUY NOW</Link>
                </div>
            </div>
            <div className="landing-body">
                <div className="category">
                    <h2>Shop by category</h2>
                    <div className="category-cards">
                        <div className="card">
                            <div className="card-info">
                                <h3>RACKETS</h3>
                                <Link to="/store">SHOP NOW</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-info">
                                <h3>RACKETS</h3>
                                <Link to="/store">SHOP NOW</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-info">
                                <h3>RACKETS</h3>
                                <Link to="/store">SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}