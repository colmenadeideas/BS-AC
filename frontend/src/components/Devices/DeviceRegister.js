import React, {useState} from 'react';
import './Devices.css';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { registerDeviceAction } from '../../store/actions/devicesAction'

const DeviceRegister = () => {

    //se guarda en el state lo que el usuario escribe en el input del codigo
    const [code, saveCode] = useState('')

    const dispatch = useDispatch();

    //cuando hace submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const registerDevice = data => dispatch(registerDeviceAction(data))

        registerDevice({
            code
        })
    }
    

    return ( 
        <div className="row mt-5">
            <h1 className="m-5 text-center col-sm-12">Registro de Dispositivos</h1>
            <div className="col-lg-3">
                <img src="../images/img4.jpg"  className="w-100" alt="Imagen de muestra"/>
            </div>
            <div className="col-lg-9">
                
                <p className="text-justify mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iure, eaque iste laboriosam veritatis ipsum quam enim beatae modi hic quo natus, voluptas aspernatur nam debitis voluptatum nisi quisquam maiores!
                Debitis minima ut veritatis nesciunt atque quia eius id explicabo eligendi modi accusantium, facilis illum distinctio voluptate natus amet voluptatem tempora neque asperiores corrupti at! Modi amet obcaecati explicabo commodi.
                Dolores voluptate delectus corrupti distinctio sapiente doloremque, voluptatum ad fugiat veritatis quod? Sequi ut aut at amet? Quidem eligendi obcaecati modi cumque, beatae itaque inventore debitis provident tenetur expedita rerum.</p>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="d-block w-100" 
                        name="code" 
                        id="code"
                        onChange={ e => saveCode(e.target.value)}
                    />
                    <p className="mt-4 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button type="reset" className="btn btn-primary button m-3">X</button>
                    {   code 
                        ?   <button type="submit" className="btn btn-dark button m-3">æ</button>
                        :   <button type="submit" disabled className="btn btn-dark button m-3">æ</button>
                    }
                </form>
            </div>

        </div>
    );
}
 
export default DeviceRegister;