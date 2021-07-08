import React from 'react';
import { Link } from 'react-router-dom';

//components
import Nav from './Nav';
import CategoryCard from './CategoryCard';

//images
import bgm from '../img/landingbgm.jpg';

//date
import category from '../data/category';


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
                        {category.map((data) => (
                            <CategoryCard data={data} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}