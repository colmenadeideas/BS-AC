import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
    return ( 
        <div className="payment-check text-center">
            <img src="../images/payment-check.png" className="w-25 img-fluid mx-auto" alt="payment-check"/>
            <h1 className="mt-5 text-center">¡Su pago fue procesado con éxito!</h1>
        </div>
    );
}

export default PaymentSuccess;