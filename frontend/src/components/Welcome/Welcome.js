import React from 'react';
import { Link } from 'react-router-dom'
import './Welcome.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Welcome = () => {
    return (  
        <React.Fragment>
            <div className="header">
                <div className="access-logo">Logo</div>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"  data-interval="false">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div>
                            <h2>Titulo</h2>
                            <h5>Agrega tu logo</h5>
                            <div className="logo">
                                <div>
                                    <FontAwesomeIcon icon="plus" />
                                </div>
                            </div>
                            <p>¿Como se llama tu empresa?</p>
                            <input type="text" placeholder="Respuesta"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div>
                            <h2>Titulo</h2>
                            <h5>Agrega tu logo</h5>
                            <div className="logo-div">
                                <div>
                                    <div className="logo"></div>
                                    <p><strong>Pequeña</strong></p>
                                    <p>1•10</p>
                                </div>
                                <div>
                                    <div className="logo"></div>
                                    <p><strong>Mediana</strong></p>
                                    <p>11•20</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="carousel-item">   
                        <div>
                            <h2>Titulo</h2>
                            <div className="logo"></div>
                            <p>¿Como se llama tu empresa?</p>
                            <input type="text" placeholder="Respuesta"/>
                            <p>Texto simulado</p>
                            <Link to="/selectcarnet" className="btn btn-dark">Guardar Datos</Link>
                        </div> 
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </React.Fragment>
    );
}
 
export default Welcome;