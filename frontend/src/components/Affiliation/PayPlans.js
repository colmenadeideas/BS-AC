import React from 'react'
import { Link } from 'react-router-dom'

const PayPlans = () => {
    return ( 
        <React.Fragment>
            <h1 className="mt-5">Planes</h1>
            <div className="row mt-4 d-flex justify-content-around">
                <div className="card col-3">
                    <div className="card-body">
                        <h5 className="card-title">$10</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Plan 1</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/access/affiliation/form" className="card-link">Selecionar Plan</Link>
                    </div>
                </div>
                <div className="card col-3">
                    <div className="card-body">
                        <h5 className="card-title">$18</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Plan 2</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/access/affiliation/form" className="card-link">Selecionar Plan</Link>
                    </div>
                </div>
                <div className="card col-3">
                    <div className="card-body">
                        <h5 className="card-title">$30</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Plan 3</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/access/affiliation/form" className="card-link">Selecionar Plan</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default PayPlans;