import React, {useState} from 'react';

//components
import Login from './Login';

export default function Admin() {

    const [currentPage, setCurrentPage] = useState(0);

    const [logged, setLogged] = useState(null)

    return (
        <div className="admin">
            <nav>
                <ul>
                    <div onClick={() => setCurrentPage(0)}>
                        <li>HOME</li>
                    </div>
                    <div onClick={() => setCurrentPage(1)}>
                        <li>Inventory</li>
                    </div>
                    <div onClick={() => setCurrentPage(2)}>
                        <li>Orders</li>
                    </div>
                </ul>
            </nav>
            <Login currentPage={currentPage} logged={logged} setLogged={setLogged} />
        </div>
    )
}