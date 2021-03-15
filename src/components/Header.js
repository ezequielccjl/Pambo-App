import React from 'react'
import VideoPlayer from 'react-video-js-player'

import landing from '../videos/landing1.mp4'

import {Footer} from './Footer'

import img from '../imgs/perrito-escuela.jpeg'

import '../css/header.css'

export const Header =  ()=> {
    const videoLanding = landing;
    
    return(
        <div>
            <div className="cont-video">
                <video src={landing} loop autoPlay muted preload="auto" className="video-land"></video>
            </div>

            <div className="escuela_lider row">
                <div className="col-6 cont_text_escuela">
                    <div>
                        ESCUELA LIDER EN EDUCACIÓN Y REACREACIÓN EN ARGENTINA
                    </div>
                </div>
                <div className="col-6 cont_img_escuela">
                    <img className="perrito_escuela" src={img} alt="perrito_escuela"></img>
                </div>
            </div>

            <section>
                <div>EDUCACIÓN</div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                </div>
            </section>
            <Footer />
        </div>
    )
}