import React from 'react'
import Swal from 'sweetalert2'

const Payment = ({history}) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        let timerInterval
        Swal.fire({
            title: 'Su pago se esta procesando',
            html: '<b></b>',
            timer: 2000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                Swal.getContent().querySelector('b')
                    .textContent = Swal.getTimerLeft()
                }, 100)
            },
            onClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer') // eslint-disable-line
                history.push("/affiliation/paymentsuccess")
            }
        })
    }
    
    return ( 
        <div className="d-flex flex-column justify-content-center m-5">
            <h1 className="mb-5">Pago con tarjeta de credito</h1>
            <button type="button" className="btn btn-dark w-50" onClick={handleSubmit}>Pagar</button>
        </div>
     );
}
 
export default Payment;