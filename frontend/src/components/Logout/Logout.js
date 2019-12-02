import React from 'react';
import { Link } from 'react-router-dom'

const Logout = ({history}) => {

    const returnLogin = () => {
        history.push("/login")
    }
    
    return ( 
        <>
            <div className="m-5">
                <h4>Vuelve Pronto!</h4>
                <button className="btn btn-dark" onClick={returnLogin}>Iniciar Sesion Nuevamente</button>
            </div>
        </>
     );
}
 
export default Logout;