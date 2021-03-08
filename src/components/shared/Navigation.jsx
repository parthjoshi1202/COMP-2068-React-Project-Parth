import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <nav>
            <ul className="nav">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/data">Data Page</Link></li>
           </ul>
        </nav>
     );
}
 
export default Navigation;