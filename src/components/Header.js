import React from 'react'
import VideoPlayer from 'react-video-js-player'

import landing from '../videos/landing.mp4'

import '../css/header.css'

export const Header =  ()=> {
    const videoLanding = landing;
    
    return(
        <div className="cont-video">
        </div>
    )
}