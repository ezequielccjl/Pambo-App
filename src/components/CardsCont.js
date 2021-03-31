import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

import perrito1 from '../imgs/perrito-1.jpg'
import perrito2 from '../imgs/perrito-2.jpg'
import perrito3 from '../imgs/perrito-3.jpg'
import nnumeros from '../imgs/nuestros-numeros.jpeg'

export const CardsCont = () => {

    const {params} = useParams()

    let positionCards;
    let videoHeight, escuelaHeight, educacionHeight, deporteHeight;

    const calculoAltura = () => {

        if(params===undefined ){
            videoHeight = document.getElementsByClassName("cont-video")[0].offsetHeight
            escuelaHeight = document.getElementsByClassName("escuela_lider")[0].offsetHeight
            educacionHeight = document.getElementsByClassName("section_edu")[0].offsetHeight
            deporteHeight = document.getElementsByClassName("section_deportes")[0].offsetHeight

            positionCards = (videoHeight + escuelaHeight + educacionHeight+ deporteHeight) - 300
        }
    }

    const scrollHandler = () => {
        
        calculoAltura()

        //console.log("TOTAL: ", positionCards) 

        if(window.scrollY>positionCards){
            //console.log("SE ACTIVA EL SCROLLHANDLER")
            const counters = document.querySelectorAll('.num-card');
            const speed = 500; // The lower the slower

            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    
                    // Lower inc to slow and higher to slow
                    //const inc = target / speed;

                    // console.log(inc);
                    // console.log(count);

                    // Check if target is reached
                    if (count < target) {
                        // Add inc to count and output in counter
                        counter.innerText = Math.ceil(count + 1);
                        // Call function every ms
                        setTimeout(updateCount, 500);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
            });
        }
    }

    useEffect(()=>{
        
        positionCards = document.querySelector(".trigger_cont").offsetTop
        
        window.addEventListener('scroll', scrollHandler)
        window.addEventListener('resize', calculoAltura)

        return ()=>{
            window.removeEventListener('resize', calculoAltura)
            window.removeEventListener('scroll', scrollHandler)
        }

    }, [])



    return(
        <div className="row">
            <div className="col-xl-8 col-md-8 col-sm-12 cont_grid">

                <div className="cont_numeros">
                    <div className="cont-card-num cont_card_uno">
                        <div className="tarjeta-num">
                            <img src={perrito3} alt="perrito3" className="img_curso"></img>
                            <div className="num-card" data-target="999999">245</div>
                            <div className="titulo-card">Amor y diversión</div>
                        </div>
                    </div>
                    <div className="cont-card-num cont_card_dos">
                        <div className="tarjeta-num">
                            <img src={perrito1} alt="perrito1" className="img_curso"></img>
                            <div className="num-card" data-target="999999">376</div>
                            <div className="titulo-card">Perros educados</div>
                        </div>
                    </div>
                    <div className="cont-card-num cont_card_tres">
                        <div className="trigger_cont"></div>
                        <div className="tarjeta-num">
                            <img src={perrito2} alt="perrito2" className="img_curso"></img>
                            <div className="num-card" data-target="999999">341</div>
                            <div className="titulo-card">Familias felices</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-xl-4 col-md-4 col-sm-12 cont_img_num">
                <img src={nnumeros} alt="nnumeros" className="img_num"></img>
            </div>
        </div>
    )
}