import React from 'react';
import { Link } from 'react-router-dom'

const SelectCarnet = () => {
    return ( 
        <>
            <h1 className="mt-5">Carnets</h1>
            <div className="row mt-4 d-flex justify-content-around">
                <div className="card col-3">
                    <div className="card-body">
                        <h5 className="card-title">Carnet 1</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/finishsetting" className="card-link">Selecionar Carnet</Link>
                    </div>
                </div>
                <div className="card col-3">
                    <div className="card-body">
                        <h5 className="card-title">Carnet 2</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/finishsetting" className="card-link">Selecionar Carnet</Link>
                    </div>
                </div>
                <div className="card col-3">
                    <div className="card-body">
                        <h5 className="card-title">Carnet 3</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/finishsetting" className="card-link">Selecionar Carnet</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default SelectCarnet;