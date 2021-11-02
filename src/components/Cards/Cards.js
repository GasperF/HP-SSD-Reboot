import React from 'react'
import Header from './Header'
import './Cards.css'

const Cards = () => {
    return (
        <>
            <Header />
            <div className='cards__container'>
                <div className="cardz">
                    <div className="card">
                        <h2>Sealants</h2>
                        <img className='hvr-bounce-in' src="/img/SVGs/dental.png" alt="/Dental Sealants" />
                    </div>
                    <div className="card">
                        <h2>Crowns</h2>
                        <img className='hvr-bounce-in' src="/img/SVGs/dental-crown.png" alt="/Dental Crown" />
                    </div>
                    <div className="card">
                        <h2>Extractions</h2>
                        <img className='hvr-bounce-in' src="/img/SVGs/tooth-extraction.png" alt="/Tooth Extraction" />
                    </div>
                    <div className="card">
                        <h2>Brushing</h2>
                        <img className='hvr-bounce-in' src="/img/SVGs/toothbrush.png" alt="/Tooth Brush" />
                    </div>
                    <div className="card">
                        <h2>Cleanings</h2>
                        <img className='hvr-bounce-in' src="/img/SVGs/tooth.png" alt="/Clean Tooth" />
                    </div>
                    <div className="card">
                        <h2>Fluoride</h2>
                        <img className='hvr-bounce-in' src="/img/SVGs/toothpaste.png" alt="/Toothpaste" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
