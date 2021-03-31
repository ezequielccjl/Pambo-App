import React, { useState } from 'react'
import emailjs, { send } from 'emailjs-com'
import foto from '../imgs/perrito-form.png'

import '../css/form.css'

export const Form = () => {

    const [mailValido, setMailValido] = useState(false)
    const [nombreValido, setNombreValido] = useState(false)

    
    const validacion = () => {
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        
        const email = document.querySelector("#email")
        const nombre = document.querySelector("#nombre").value
        const mensaje = document.querySelector("#nombre").value
        const inputBox = document.querySelector("._email")
        const inputBoxNombre = document.querySelector("._nombre")

        if(email.value.match(pattern)){
            inputBox.classList.add("validado")
            inputBox.classList.remove("invalidado")
            setMailValido(true)
        }else{
            inputBox.classList.remove("validado")
            inputBox.classList.add("invalidado")
            setMailValido(false)
        }

        if (nombre !== "" && nombre !== " " && nombre !== null && nombre !== undefined) {
            setNombreValido(true)
            inputBoxNombre.classList.add("validado")
            inputBoxNombre.classList.remove("invalidado")
        }else{
            setNombreValido(false)
            inputBoxNombre.classList.remove("validado")
            inputBoxNombre.classList.add("invalidado")
        }

    }

    function sendEmail(e) {

        let textarea = document.querySelector("#mensaje").value

        if(mailValido===true && nombreValido===true && textarea!=="" && textarea!==" " && textarea!==undefined){
            e.preventDefault();
    
            emailjs.sendForm('service_b6psjui', 'template_njjj5ia', e.target, 'user_OrxzRAQKkHbe84z97DTOj')
            .then((result) => {
                console.log(result.text);
                document.querySelector(".pos_mail").innerHTML = ''
                document.querySelector(".pos_mail").innerHTML = "Mail enviado correctamente"
                document.querySelector(".pos_mail").classList.add("pos_success")
                document.querySelector(".pos_mail").classList.remove("pos_error")
            }, (error) => {
                console.log(error.text);
                document.querySelector(".pos_mail").innerHTML = ''
                document.querySelector(".pos_mail").innerHTML = "Error al enviar el mail"
                document.querySelector(".pos_mail").classList.add("pos_error")
                document.querySelector(".pos_mail").classList.remove("pos_success")

            });
            
            e.target.reset()
        }else{
            e.preventDefault();

            console.log("MAIL INVALIDO PA")
            document.querySelector(".pos_mail").innerHTML = ''
            document.querySelector(".pos_mail").innerHTML = "Revise los valores ingresados"
            document.querySelector(".pos_mail").classList.add("pos_error")
            document.querySelector(".pos_mail").classList.remove("pos_success")
        }
    }

    return(
        <div className="section_form">
            <div className="titulo_form">También podés dejarnos tu mensaje aquí</div>
            <div className="grid_form">
                <div className="cont_form">
                    <form className="form" onSubmit={sendEmail}>
                        <label htmlFor="nombre">Nombre<span className="asterisco">*</span></label>

                        <div className="input_box _nombre">
                            <input className="input_form" id="nombre" name="nombre" type="text" onKeyUp={validacion} autoComplete="off"></input>
                        </div>

                        <label htmlFor="email">E-mail de contacto<span className="asterisco">*</span></label>

                        <div className="input_box _email">
                            <input className="input_form" id="email" name="email" type="text" onKeyUp={validacion} autoComplete="off"></input>
                        </div>

                        <label htmlFor="mensaje">Mensaje<span className="asterisco">*</span></label>
                        <textarea className="input_form" id="mensaje" name="mensaje" type="text"></textarea>
                    
                        <div className="cont_btn_form">
                            <input type="submit" className="btn_enviar_form" value="Enviar"></input>
                        </div>
                        <div className="pos_mail pos_error pos_success"></div>
                    </form>
                </div>
                <div className="cont_img">
                    <img className="img_form" src={foto} alt="perrito_contacto"></img>
                </div>
            </div>
        </div>
    )
}