import React from 'react'
import Navbar from '../Navbar/Navbar'

const CarnetPreview = () => {
    return ( 
        <>
            <Navbar />
            <h2 className="text-center m-2">Generar Carnet</h2>

            <div className="row">
                <div className="col-4 d-flex flex-column align-items-center">
                    Vista previa del carnet
                    <div className="w-75 border mt-2" style={{height: "400px"}}></div>
                </div>
                <div className="col-8 d-flex flex-column align-items-center justify-content-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis voluptatibus numquam, quaerat pariatur, rerum ratione perferendis assumenda illum non dolores quos qui facilis magnam maxime laborum est debitis commodi amet.
                    <div className="row mt-3 w-100">
                        <div className="col-5">
                            <button className="btn btn-dark btn-block redondeado">Descargar Carnet</button>
                        </div>
                        <div className="col-5">
                            <a href="mailto:gmail.com" className="btn btn-dark btn-block redondeado">Enviar Carnet</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default CarnetPreview;