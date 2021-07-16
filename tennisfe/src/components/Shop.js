import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

//components
import Nav from './Nav';
import Footer from './Footer';

export default function Shop() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    let { param } = useParams();
    const [data, setData] = useState(null);
    

    return (
        <div>
            <Nav />
            <div className="shop">
                <div className="shop-selection">
                    <div className="shop-category">
                        <h4>Category</h4>
                        <label><input type="radio" name="category" value="all" defaultChecked={!param?true:false} />All</label>
                        <label><input type="radio" name="category" value="racquet" defaultChecked={param === "racquet"?true:false} />Racquets</label>
                        <label><input type="radio" name="category" value="apparel" defaultChecked={param === "apparel"?true:false} />Apparel</label>
                        <label><input type="radio" name="category" value="ball" defaultChecked={param === "tennisball"?true:false} />Tennis Balls</label>
                    </div>
                    <div className="shop-category">
                        <h4>Category</h4>
                        <label><input type="radio" name="category" value="wilson" defaultChecked={param === "wilson"?true:false} />Wilson</label>
                        <label><input type="radio" name="category" value="babolat" defaultChecked={param === "babolat"?true:false} />Babolat</label>
                        <label><input type="radio" name="category" value="yonex" defaultChecked={param === "yonex"?true:false} />Yonex</label>
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