import React, { useState } from 'react';
import { useParams } from 'react-router';

//components
import Nav from './Nav';
import Footer from './Footer';

export default function Shop() {
    let { param } = useParams();
    const [data, setData] = useState(null)

    return (
        <div>
            <Nav />
            <div className="shop">
                <div className="shop-selection">
                    <div className="shop-category">
                        <h4>Category</h4>
                        <label><input type="radio" name="category" value="all" defaultChecked />All</label>
                        <label><input type="radio" name="category" value="racquet" />Racquets</label>
                        <label><input type="radio" name="category" value="apparel" />Apparel</label>
                        <label><input type="radio" name="category" value="ball" />Tennis Balls</label>
                    </div>
                    <div className="shop-category">
                        <h4>Category</h4>
                        <label><input type="radio" name="category" value="wilson" />Wilson</label>
                        <label><input type="radio" name="category" value="babolat" />Babolat</label>
                        <label><input type="radio" name="category" value="yonex" />Yonex</label>
                    </div>
                </div>
                <div className="shop-entry">
                    <h1>{param}</h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}