import React from 'react'
import {listaTienda} from './ProductosJSON'

import '../css/tienda.css'
import icon from '../icons/liston.png'

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
                                
                                <div className={`cont_img_prod ${item.css===true && "alfombra"}`}>
                                    
                                {item.css===undefined && 
                                    <img className="img_prod" src={item.img} alt="img_prod"></img>
                                }
                                    
                                </div>
                                
                                <div className="cont_desc_prod">
                                    <div className="titulo_prod">{item.titulo}</div>
                                    
                                    <ul className="ul_desc_prod">
                                        {
                                            item.detalle.map((desc)=>{
                                                return(
                                                    <li className="li_desc_prod" key={item.detalle.indexOf(desc)}>
                                                        <img className="icon_li" src={icon} alt="icon"></img>
                                                        {desc}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div> 

                            </div>
                        )
                    })
                }
                </div>
            </div>

        </section>
    )
}