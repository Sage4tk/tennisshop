import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
            <header>
                <div className="logo">
                    <p className="logo-word"><Link to="/">THE TENNIS SHOP</Link></p>
                </div>
                <nav>
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
            </header>
    )
}