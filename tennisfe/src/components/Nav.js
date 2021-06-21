import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
            <header>
                <div>
                    <p><Link to="/">Home</Link></p>
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
                        <li>
                            <Link to="/custom">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}