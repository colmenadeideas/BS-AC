import React from 'react';
import Navbar from '../Navbar/Navbar'

const DeviceInstall = ({history}) => {

    // const handleClick = (e) => {
    //     e.preventDefault()

    //     history.push('/devices');
    // }

    return ( 
        <>
            <Navbar />
            <div className="row">

                <div className="col-lg-4 d-flex flex-column justify-content-center text-right">
                    <h3>Instala tu Dispositivo</h3>
                    <ol className="list mt-2">
                        <li className="list-items">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        <li className="list-items">Praesentium aliquid esse voluptatem culpa?</li>
                        <li className="list-items">Soluta tempore cumque sunt atque dolor optio?</li>
                    </ol>
                </div>

                <div className="col-lg-6 text-center">
                    <h1 className="mb-5 text-center col-sm-12">Instala tu Dispositivo</h1>
                    <div id="carousel-device-install" className="carousel slide" data-ride="carousel"  data-interval="false">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-device-install" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-device-install" data-slide-to="1"></li>
                            <li data-target="#carousel-device-install" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div>
                                    <img src="/images/img4.jpg" className="w-100" alt=""/> 
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div>
                                    <img src="/images/img4.jpg" className="w-100" alt=""/> 
                                </div>  
                            </div>
                            <div className="carousel-item">   
                                <div>
                                    <img src="/images/img4.jpg" className="w-100" alt=""/>
                                </div> 
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carousel-device-install" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-device-install" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <div className="col-lg-2 d-flex flex-column justify-content-center">
                    <h3>Empecemos!</h3>
                    <a href="https://play.google.com/store?hl=es" className="mt-3" target="_blank" rel="noopener noreferrer">
                        <img src="/images/download-google-play.png" className="w-100" alt=""/>
                    </a>
                    <a href="https://www.apple.com/la/ios/app-store/" className="mt-3" target="_blank" rel="noopener noreferrer">
                        <img src="/images/download-app-store.png" className="w-100" alt=""/>
                    </a>
                </div>
            </div>
        </>
     );
}

export default DeviceInstall; 