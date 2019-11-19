import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    return (  
        <div className="">
            <ul className="nav justify-content-center mt-3">
                <li className="nav-item">
                    <Link className="nav-link" to="/access/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/access/">Texto Simulado</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/access/">Texto Simulado</Link>
                </li>
            </ul>
        </div>
    );
}
 
export default Navbar;