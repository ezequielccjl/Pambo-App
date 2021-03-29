import React from 'react'
import foto from '../imgs/perrito-form.png'

import '../css/form.css'

export const Form = () => {
    return(
        <div className="section_form">
            <div className="titulo_form">También podés dejarnos tu mensaje aquí</div>
            <div className="grid_form">
                <div className="cont_form">
                    <form className="form">
                        <label htmlFor="nombre">Nombre<span className="asterisco">*</span></label>
                        <input className="input_form" id="nombre"></input>
                        
                        <label htmlFor="email">E-mail de contacto<span className="asterisco">*</span></label>
                        <input className="input_form" id="email"></input>
                        
                        <label htmlFor="mensaje">Mensaje<span className="asterisco">*</span></label>
                        <textarea className="input_form" id="mensaje"></textarea>
                    
                        <div className="cont_btn_form">
                            <button className="btn_enviar_form">ENVIAR</button>
                        </div>
                    </form>
                </div>
                <div className="cont_img">
                    <img className="img_form" src={foto} alt="perrito_contacto"></img>
                </div>
            </div>
        </div>
    )
}