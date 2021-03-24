import React from 'react'
import '../css/modalLand.css'
import news from '../imgs/newsletter.png'

export const ModalLand = () => {

    const handlerModal = () => {
        document.querySelector(".cont_modal").classList.add("subir_modal")
    }

    return(
        <div className="cont_modal">
            <i className="fas fa-times" onClick={()=>{handlerModal()}}></i>
            <img src={news} alt="news" className="news"></img>
            <div className="titulo_modal">¿Ya te suscribiste a nuestro newsletter?</div>
            <div className="sub_modal">Suscribite y enterate de todas nuestras novedades al instante</div>
            <div className="cont_input">
                <label for="input">Email: <span className="asterisco">*</span></label>
                <input id="input"></input>
                <div className="cont_btn_modal">
                    <button className="btn_sus">SUSCRIBIRME!</button>
                </div>
            </div>
        </div>
    )
}