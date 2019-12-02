import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Navbar from '../Navbar/Navbar'

//Redux
import { useDispatch } from 'react-redux';
import { addCarnetAction } from '../../store/actions/employeesAction'

const CarnetPreview = () => {

    //creacion de los states
    const [color, setColor] = useState('')

    const dispatch = useDispatch();
    const addCarnet = data => dispatch(addCarnetAction(data))
    
    //variable para evaluar la respuesta de la API
    let res = -1

    const actualizarCarnet = () => {
        res = addCarnet(color)

        if (res === 1) {
            Swal.fire({
                icon: 'success',
                title: 'Actualizado exitosamente',
                text: 'Tu carnet ha sido registrado con éxito!',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Actualización fallida',
                text: 'Intente de nuevo mas tarde!',
            })
        }
    }

    return ( 
        <>
            <Navbar />
            <h2 className="text-center m-2">Generar Carnet</h2>

            <div className="row">
                <div className="col-4 d-flex flex-column align-items-center">
                    Vista previa del carnet
                    <div className="w-75 border mt-2" style={{height: "400px", background: color}}></div>
                    <form action="" onSubmit={actualizarCarnet}>
                        <input type="color" name="color" id="color" onChange={ e => setColor(e.target.value) } />
                        <button className="btn btn-dark btn-block redondeado">Actualizar Carnet</button>
                    </form>
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