import React from 'react';

const DeviceInstall = ({history}) => {

    const handleClick = (e) => {
        e.preventDefault()

        history.push('/access/devices2');
    }
    return ( 
        <div className="row mt-5">
            <div className="col-lg-3 d-flex flex-column justify-content-center text-right">
                <h3>Instala tu Dispositivo</h3>
                <ol className="list">
                    <li className="list-items">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                    <li className="list-items">Praesentium aliquid esse voluptatem culpa?</li>
                    <li className="list-items">Soluta tempore cumque sunt atque dolor optio?</li>
                </ol>
            </div>
            <div className="col-lg-6 text-center">
                <h1 className="mb-5 text-center col-sm-12">Instala tu Dispositivo</h1>
                <img src="../images/img4.jpg" className="w-75" alt="mobile"/>
            </div>
            <div className="col-lg-3 d-flex flex-column justify-content-center">
                <h3>Empecemos!</h3>
                <button className="btn btn-dark redondeado mt-3" onClick={handleClick}>Enviar Codigo</button>
            </div>
        </div>
     );
}
 
export default DeviceInstall;