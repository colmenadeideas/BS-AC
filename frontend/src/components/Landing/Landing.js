import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
return ( 
    <div>
        Soy el Landing Page <br/>
        <Link to="/affiliation/payplans">Ver planes</Link>
    </div>
    );
}
    
export default Landing;