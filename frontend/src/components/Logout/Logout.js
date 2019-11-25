import React from 'react';
import { Link } from 'react-router-dom'

const Logout = () => {
    return ( 
        <>
            <div className="m-5">
                <h4>Vuelve Pronto!</h4>
                <Link to="/login" className="btn btn-dark">Iniciar Sesion Nuevamente</Link>
            </div>
        </>
     );
}
 
export default Logout;