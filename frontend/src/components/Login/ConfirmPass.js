import React from 'react';

const ConfirmPass = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("nueva contrasena");
    }

    return ( 
        <>
            <div className="mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="inputPass">Contraseña</label>
                        <input type="password" className="form-control" id="inputPass" placeholder="Contraseña"/>
                    </div>
                    <div className="form-group">
                        <label for="inputConfirmPass">Confirmar Contraseña</label>
                        <input type="password" className="form-control" id="inputConfirmPass" placeholder="Confirmar Contraseña"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
        </>
    );
}
 
export default ConfirmPass;