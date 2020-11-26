import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './Style.scss'

const Hero = ({ title, slogan, off }) => {
    return (
        <>
        <div className="hero-wrapper">
            <div className="hero-text">
                <h1 className="hero-title"> { title } </h1>
                <div className="hr"></div>
                <h3 className="slogan"> { slogan } </h3>
            </div>
        </div>
        </>
    );

}

export default Hero