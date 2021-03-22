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

    const handlerCurso = () => {
        if (categoriaCurso === "individuales") {
            return <CursosInd />
        }else{
            if (categoriaCurso === "grupales") {
                return <CursosGru />
            }else{
                return <CursosMas />
            }
        }
    }

    return (
        <section className="section_cursos">
            <div className="nav_cursos">
                <Link to="/cursos/individuales">
                    <div className="curso_btn">Cursos individuales</div>
                </Link>
                <Link to="/cursos/grupales">
                    <div className="curso_btn">Cursos grupales</div>
                </Link>
                <Link to="/cursos/masterclass">
                    <div className="curso_btn">Masterclass</div>
                </Link>
            </div>
            {
                handlerCurso()
            }

        </section>
    )
}