import React from 'react'
import {listaTienda} from './ProductosJSON'
import {Footer} from './Footer'

import '../css/tienda.css'

export const Tienda = () => {

    console.log("ARRAY LISTA: ",listaTienda)

    return(
        <section className="section_tienda">
            <div className="titulo_tienda">Nuestros productos</div>
            <div className="sub_tienda">
                Adquirilos en nuestra
                <a href="https://www.instagram.com/tienda.pambo/" target="_blank">Tienda!</a>
            </div>

            <div className="cont_productos">
                <div className="grid_prods">
                {
                    listaTienda.map((item)=>{
                        return(
                            <div className="cont_prod" key={listaTienda.indexOf(item)}>
                                
                                <img className="img_prod" src={item.img} alt="img_prod"></img>
                                
                                <div className="titulo_prod">{item.titulo}</div>

                            </div>
                        )
                    })
                }
                </div>
            </div>

            <Footer />

        </section>
    )
}