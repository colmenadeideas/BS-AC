import React from 'react';
import { Link } from 'react-router-dom'

const Logout = () => {

    return ( 
        <>
            <div className="m-5">
                <h4>Vuelve Pronto!</h4>
                <Link className="btn btn-dark" to="/login">Iniciar Sesion Nuevamente</Link>
            </div>
        </>
     );
}
 
export default Logout;