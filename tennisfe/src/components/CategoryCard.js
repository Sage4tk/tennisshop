import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryCard({ data }) {

    const cardStyle = {
        backgroundImage: `url(${data.img})`,
        backgroundSize: "cover"
    }

    return (
        <div className="card">
            <div className="card-info" style={cardStyle}>
                <h3>{data.category}</h3>
                <Link to={data.link} >SHOP NOW</Link>
            </div>
        </div>
    )
} 