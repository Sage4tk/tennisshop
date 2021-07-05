import React, {useState, useEffect} from 'react';

import Nav from './Nav';

import bgm from '../img/landingbgm.jpg';

export default function Home() {

    const [scrollPos, setScrollPos] = useState(0);

    const landingStyle = {
        backgroundImage: `url(${bgm})`,
        backgroundSize: "cover",
        backgroundPosition: "0",
        letterSpacing: `${scrollPos}px`
    }

    const updateScroll = () => {
        setScrollPos(window.pageYOffset/40);
    }

    useEffect(() => {
        window.addEventListener("scroll", updateScroll)

        return () => {
            window.removeEventListener('scroll', updateScroll)
        }
    }, [])
 
    return (
        <div>
            <Nav />
            <div className="landing" style={landingStyle}>
                <h1>OWN THE COMPETITION.</h1>
            </div>
            <div className="test">

            </div>
        </div>
    )
}