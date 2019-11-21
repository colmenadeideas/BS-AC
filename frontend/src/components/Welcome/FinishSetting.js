import React from 'react'
import { Link } from 'react-router-dom'

const FinishSetting = () => {
    return ( 
        <div className="finish-setting  text-center">          
            <h1 className="mt-5 text-center">¡Hola!</h1>
            <img src="/images/payment-check.png" className="img-fluid mx-auto" width="10%" alt="payment-check"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className="d-flex justify-content-center">
                <Link to="/dashboard" className="btn btn-dark btn-block redondeado w-50 text-center">¡Empecemos!</Link>
            </div>
        </div>
    );
}

export default FinishSetting;