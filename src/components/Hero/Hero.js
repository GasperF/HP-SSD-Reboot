import React from 'react'
import './Hero.css'
import { Link } from '../footer/styles/footer'

const Hero = () => {

    return (
        <div className="hero__container">
            <img src="/img/brush.jpeg" alt="Girl Brushing her teeth" />
            <div className="content">
                <h1>Great Child <br /> Friendly <br /> Dentistry!</h1>
                <p>Schedule your child's <br /> appointment today!
                <div className='hero__btn'>
                    <a href="#formHeader"><button className='she__btn hvr-wobble-horizontal'>Schedule</button></a>
                </div>
                </p>
            </div>
        </div>
    )
}

export default Hero
