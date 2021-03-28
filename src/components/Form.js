import React from 'react'

export const Form = () => {
    return(
        <div className="section_form">
            <div className="titulo_form">También podés dejarnos tu mensaje aquí</div>
            <div className="grid_form">
                <div className="cont_form">
                    <form>
                        <input placeholder="Nombre"></input>
                        <input placeholder="Email"></input>
                        <textarea placeholder="Mensaje"></textarea>
                    </form>
                </div>
                <div className="cont_img">

                </div>
            </div>
        </div>
    )
}