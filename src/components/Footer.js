import React from 'react'
import '../css/footer.css'

//import icon
import iconfb from '../icons/icon-fb-70.png'
import iconig from '../icons/icon-ig-75.png'
import iconyt from '../icons/icon-yt-75.png'

export const Footer = () => {
    return(
        <section className="section_footer">
            <div className="titulo_footer">¡Seguinos en nuestras redes!</div>
            <div className="img_redes">
                <img src={iconfb} alt="icon-fb"></img>
                <img src={iconig} alt="icon-ig"></img>
                <img src={iconyt} alt="icon-yt"></img>
            </div>
            <div className="footer_description">
                <div className="titulo_desc">¡Contactanos!</div>
                <div>11 6805-7707</div>
                <div>adiestramientopambo@gmail.com</div>
                <div className="linea"></div>
                <div>Copyright © 2021 All rights reserved | </div>
            </div>
        </section>
    )
}