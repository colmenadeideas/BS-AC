import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import Navbar from '../Navbar/Navbar'
import html2canvas from 'html2canvas';
import QRCode from 'qrcode.react';

//Redux
import { useDispatch } from 'react-redux';
import { addCarnetAction } from '../../store/actions/employeesAction'

const CarnetPreview = () => {

    //creacion de los states
    const [color, setColor] = useState('')
    const [date_creation, setDate_creation] = useState('')
    const [date_expiration, setDate_expiration] = useState('')
    const [carnet, setCarnet] = useState(false)

    const dispatch = useDispatch();
    const addCarnet = data => dispatch(addCarnetAction(data))

    //variable para evaluar la respuesta de la API
    let res = -1

    const actualizarCarnet = e => {
        e.preventDefault()

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
    
    const cargandoCarnet = () => {
        Swal.fire({
            icon: 'error',
            title: 'El carnet no se ha cargado correctamente',
            text: 'Intente de nuevo mas tarde!',
        })
    }

    const descargarCarnet = () => {
        // toma un screenshot del carnet y lo descarga
        html2canvas(document.querySelector('#carnet'))
            .then(canvas => {
                var a = document.createElement('a');
                a.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
                a.download = 'ima1ge.jpg';
                a.click();
            });
    }
    
    const enviarCarnet = () => {
        console.log("enviar carnet");
    }

    useEffect(() => {
        let today = new Date();
        let yearExp = today.getFullYear()+10
        let dateCre = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let dateExp = yearExp+'-'+(today.getMonth()+1)+'-'+today.getDate();

        setDate_creation(dateCre)
        setDate_expiration(dateExp)
    }, [date_creation, date_expiration])

    return ( 
        <>
            <Navbar />
            <h2 className="text-center m-2">Generar Carnet</h2>

            <div className="row">
                <div className="col-4 d-flex flex-column align-items-center">
                    Vista previa del carnet
                    <div id="carnet" className="w-75 border mt-2" style={{height: "400px", background: color}}>
                        <QRCode
                            id="123456"
                            value="123456"
                            size={250}
                            level={"H"}
                            bgColor={"transparent"}
                            includeMargin={true}
                        />
                    </div>
                    <form className="d-flex flex-column align-items-center" onSubmit={actualizarCarnet}>
                        <input className="my-3" type="color" name="color" id="color" onChange={ e => setColor(e.target.value) } />
                        <button className="btn btn-dark btn-block redondeado">Actualizar Carnet</button>
                    </form>
                </div>
                <div className="col-8 d-flex flex-column align-items-center justify-content-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis voluptatibus numquam, quaerat pariatur, rerum ratione perferendis assumenda illum non dolores quos qui facilis magnam maxime laborum est debitis commodi amet.
                    <div className="row mt-3 w-100">
                        {
                            (!carnet)
                                ?   <>
                                        <div className="col-5">
                                            <button onClick={descargarCarnet} className="btn btn-dark btn-block redondeado">Descargar Carnet</button>
                                        </div>
                                        <div className="col-5">
                                            <button onClick={enviarCarnet} className="btn btn-dark btn-block redondeado">Enviar Carnet</button>
                                        </div>
                                    </>
                                :   <>
                                        <div className="col-5">
                                            <button onClick={cargandoCarnet} className="btn btn-dark btn-block redondeado">Descargar Carnet</button>
                                        </div>
                                        <div className="col-5">
                                            <button onClick={cargandoCarnet} className="btn btn-dark btn-block redondeado">Enviar Carnet</button>
                                        </div>
                                    </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default CarnetPreview;