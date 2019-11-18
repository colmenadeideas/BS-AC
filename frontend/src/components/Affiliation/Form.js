import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
    return ( 
        <div className="mt-5">
            <div className="row">
                <div className="col-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">$18</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Plan 2</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <h2>Informacion de la cuenta</h2>
                    <hr/>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Form;