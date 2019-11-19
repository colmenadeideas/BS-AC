import React from 'react'

const Form = ({history}) => {

    const handleSubmit = e => {
        e.preventDefault()

        history.push('/access/affiliation/pay')
    }

    return ( 
        <div className="mt-5">
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">$18</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Plan 2</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="mt-5 text-center">
                        <h5>Necesitas Ayuda?</h5>
                        <br/>
                        <p className="text-left">
                            Lorem ipsum dolor sit amet. <br/><br/>
                            Ab odit vitae magni cum, saepe animi. <br/><br/>
                        </p>
                    </div>
                </div>
                <div className="col-9">
                    <h2>Informacion de la cuenta</h2>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" className="form-control" id="name" placeholder="Nombre" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="surname">Apellido</label>
                                <input type="text" className="form-control" id="surname" placeholder="Apellido" required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="password">Contrasena</label>
                                <input type="password" className="form-control" id="password" placeholder="Contrasena" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="password-repeat">Repetir Contrasena</label>
                                <input type="password" className="form-control" id="password-repeat" placeholder="Repetir Contrasena" required/>
                            </div>
                        </div>

                        <h5>Informacion de la Cuenta</h5>
                        <hr/>
                        <fieldset className="form-group">
                            <div className="row">
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="payment" id="paypal" value="paypal"/>
                                        <label className="form-check-label" htmlFor="paypal">Paypal</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="payment" id="credit-card" value="credit-card"/>
                                        <label className="form-check-label" htmlFor="credit-card">Tarjeta de Credito</label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="num-credit-card">Tarjeta de Credito</label>
                                <input type="number" className="form-control" id="num-credit-card" required/>
                            </div>
                            <div className="form-group col-md-5">
                                <label>Fecha de Expiracion</label>
                                <div className="form-row">
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" id="mes" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="anio" required/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="code-secret">Codigo Secreto</label>
                                <input type="text" className="form-control" name="code-secret" id="code-secret" required/>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-dark">Boton</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Form;