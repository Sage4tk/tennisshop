import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

    const [burger, setBurger] = useState(false);

    return (
            <header>
                <div className="logo">
                    <p className="logo-word"><Link to="/">THE TENNIS SHOP</Link></p>
                </div>
                <nav className={burger ? "show" : ""}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/store">Store</Link>
                        </li>
                        <li>
                            <Link to="/club">Club</Link>
                        </li>
                    </ul>
                </nav>
                <div className="burger" onClick={() => setBurger(!burger)}>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                </div>
            </header>
    )
}