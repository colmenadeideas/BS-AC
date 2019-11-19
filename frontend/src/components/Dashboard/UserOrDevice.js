import React from 'react'


const UserOrDevice = () => {
    return ( 
        <div className="modal fade" id="modalUserOrDevice" tabIndex="-1" role="dialog" aria-labelledby="modalUserOrDevice" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Titulo Texto Simulado</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div class="container">
                            <div class="row justify-content-md-center">
                                <div class="col col-lg-4">
                                    1 of 3
                                </div>
                                <div class="col col-lg-4">
                                    3 of 3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
 
export default UserOrDevice;