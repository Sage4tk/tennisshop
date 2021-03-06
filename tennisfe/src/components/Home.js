import React from 'react';
import { Link } from 'react-router-dom';

//components
import Nav from './Nav';
import CategoryCard from './CategoryCard';
import Footer from './Footer';

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
        <div className="landing-bgm">
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
                            <CategoryCard data={data} key={data.category} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="contact-section">
                <div className="contact-info">
                    <h3>Get notified when new products come out!</h3>
                    <Link to="/promos">SIGN UP</Link>
                </div>
            </div>
            <div className="about-section">
                <div className="about-info">
                    <h4>About</h4>
                    <p>We are tennis shop retailer, service, and club. We aim to provide the best products and services to our customers in and outside the tennis court. With our wide selection of brands, we hope to provide the best solution for the variety of tennis players out there. Visit us!</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}