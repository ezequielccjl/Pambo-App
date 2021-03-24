import React, {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import '../css/cursos.css'

import {CursosInd} from './CursosInd'
import {CursosGru} from './CursosGru'
import {CursosMas} from './CursosMas'
import {Footer} from './Footer'

export const Cursos = () => {

    const {categoriaCurso} = useParams()

    useEffect(()=>{
        console.log(categoriaCurso)
    },[])

    const handlerPintarCurso = () => {
            if (categoriaCurso === "individuales") {
                document.querySelector(".gru").classList.remove("curso_pintado")
                document.querySelector(".mas").classList.remove("curso_pintado")
                document.querySelector(".ind").classList.add("curso_pintado")
            }else{
                if (categoriaCurso === "grupales") {
                    document.querySelector(".ind").classList.remove("curso_pintado")
                    document.querySelector(".mas").classList.remove("curso_pintado")
                    document.querySelector(".gru").classList.add("curso_pintado")
                }else{
                    document.querySelector(".gru").classList.remove("curso_pintado")
                    document.querySelector(".ind").classList.remove("curso_pintado")
                    document.querySelector(".mas").classList.add("curso_pintado")
                }
            }
        
    }

    const handlerCurso = () => {
        if (categoriaCurso === "individuales") {
        return(
            <CursosInd handlerPintarCurso={handlerPintarCurso}/>
        )
        }else{
            if (categoriaCurso === "grupales") {
                return (
                    <CursosGru handlerPintarCurso={handlerPintarCurso} />
                )
            }else{
                return (
                    <CursosMas handlerPintarCurso={handlerPintarCurso}/>
                )
            }
        }
    }
    

    return (
        <section className="section_cursos">
            <div className="nav_cursos">
                <Link to="/cursos/individuales">
                    <div className="curso_btn ind">Cursos individuales</div>
                </Link>
                <Link to="/cursos/grupales">
                    <div className="curso_btn gru">Cursos grupales</div>
                </Link>
                <Link to="/cursos/masterclass">
                    <div className="curso_btn ultimo_curso_btn mas">Masterclass</div>
                </Link>
            </div>
            {
                handlerCurso()
            }

        </section>
    )
}