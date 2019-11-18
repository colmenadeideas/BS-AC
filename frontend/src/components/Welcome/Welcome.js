import React from 'react';
import './Welcome.css'

const Welcome = () => {
    return (  
        <React.Fragment>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="0">
                        <div>
                            <h2>Titulo</h2>
                            <h5>Agrega tu logo</h5>
                            <div className="logo"></div>
                            <p>¿Como se llama tu empresa?</p>
                            <input type="text" placeholder="Respuesta"/>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="0">
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
                    <div className="carousel-item" data-interval="0">   
                        <div>
                            <h2>Titulo</h2>
                            <div className="logo"></div>
                            <p>¿Como se llama tu empresa?</p>
                            <input type="text" placeholder="Respuesta"/>
                            <p>Texto simulado</p>
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