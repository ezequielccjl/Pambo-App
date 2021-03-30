import React, {useState} from 'react'
import emailjs, { send } from 'emailjs-com'
import '../css/modalLand.css'
import news from '../imgs/newsletter.png'

export const ModalLand = () => {

    const handlerModal = () => {
        document.querySelector(".cont_modal").classList.add("subir_modal")
    }

    const [mailValido, setMailValido] = useState(false)

    const validacion = () => {
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        
        const email = document.querySelector(".input_modal")

        if(email.value.match(pattern)){
            email.classList.add("validado")
            email.classList.remove("invalidado")
            setMailValido(true)
        }else{
            email.classList.remove("validado")
            email.classList.add("invalidado")
            setMailValido(false)
        }

    }

    function sendEmail(e) {

        if(mailValido===true){
            e.preventDefault();
    
            emailjs.sendForm('service_b6psjui', 'template_njjj5ia', e.target, 'user_OrxzRAQKkHbe84z97DTOj')
            .then((result) => {
                console.log(result.text);
                alert("Correo enviado correctamente!")
            }, (error) => {
                console.log(error.text);
                alert("Error al enviar el correo.")
            });
            
            e.target.reset()
        }else{
            console.log("MAIL INVALIDO PA")
            alert("Revise los valores ingresados.")
        }
    }

    return(
        <div className="cont_modal">
            <i className="fas fa-times" onClick={()=>{handlerModal()}}></i>
            <img src={news} alt="news" className="news"></img>
            <div className="titulo_modal">¿Ya te suscribiste a nuestro newsletter?</div>
            <div className="sub_modal">Suscribite y enterate de todas nuestras novedades al instante</div>
            <form className="cont_input" onSubmit={sendEmail}>
                <label htmlFor="input">Email: <span className="asterisco">*</span></label>
                <input id="input" name="email" className="input_modal" onKeyUp={validacion}></input>
                <input name="mensaje" type="hidden" value="Me gustaria recibir Newsletter!"></input>
                <input name="nombre" type="hidden" value="Cliente"></input>
                <div className="cont_btn_modal">
                    <input type="submit" className="btn_sus" value="SUSCRIBIRME!"></input>
                </div>
            </form>
        </div>
    )
}