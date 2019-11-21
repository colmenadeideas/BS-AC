import React from 'react'
import Navbar from '../Navbar/Navbar'

const CarnetPreview = () => {
    return ( 
        <>
            <Navbar />
            <h2 className="text-center mt-5">Generar Carnet</h2>

            <div className="row">
                <div className="col-4">
                    Vista previa del carnet
                </div>
                <div className="col-8 d-flex flex-colum align-items-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis voluptatibus numquam, quaerat pariatur, rerum ratione perferendis assumenda illum non dolores quos qui facilis magnam maxime laborum est debitis commodi amet.
                    <button>Descargar Carnet</button>
                    <a href="mailto:gmail.com">Enviar Carnet</a>
                </div>
            </div>
        </>
    );
}
 
export default CarnetPreview;