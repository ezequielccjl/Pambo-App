import React from 'react'
import '../css/contacto.css'
import {Footer} from './Footer'

//import icon
import iconfb from '../icons/icon-fb-70.png'
import iconig from '../icons/icon-ig-75.png'
import iconyt from '../icons/icon-yt-75.png'

export const Contacto = () => {
    return (
        <section className="cont_contacto">
            <div className="row_info row">
                <div className="info_consulta col-xl-6 col-md-6 col-sm-12">
                    <div className="info_info_consulta">
                        <div className="titulo_esperamos">¡Esperamos tu consulta!</div>

                        <div>
                            WhatsApp:
                            <a href="https://wa.link/e7hd3a" target="_blank" rel="noopener noreferrer">
                                <span className="span_info">https://wa.link/e7hd3a</span>
                            </a>
                        </div>
                        <div>
                            Teléfono:<span className="span_info">011- 6805-7707</span>
                        </div>
                        <div>
                            E-mail:<span className="span_info">adiestramientopambo@gmail.com</span>
                        </div>
                        <div className="img_info">
                            <img src={iconfb} alt="icon-fb"></img>
                            <img src={iconig} alt="icon-ig"></img>
                            <img src={iconyt} alt="icon-yt"></img>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12">
                    <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13130.932197664526!2d-58.45121349401856!3d-34.636185744518265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca352926551d%3A0x7298d774e4597f81!2sParque%20Chacabuco!5e0!3m2!1ses-419!2sar!4v1615219945158!5m2!1ses-419!2sar" style={{border:0}} allowFullScreen="" importance="high"></iframe>
                </div>
            </div>

            <div className="row_form">
                <div className="col-6">
                    
                </div>

                <div className="col-6">
                    
                </div>
            </div>

            <Footer />

        </section>
    )
}