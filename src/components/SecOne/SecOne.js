import React from 'react'
import './SecOne.css'

const SecOne = () => {
    return (
        <div className="info__wrapper">
            <div className="info__img">
                <img className='hvr-wobble-vertical' src="/img/SecOne.jpg" alt="Teeth" />
            </div>
            <div className="info__info">
                <h3 className="info__title">
                    HP Shiny Smiles Dentistry provides preventative and dental care for children from infancy through adolescence, including those with special health needs.
                </h3>
                <p className="info__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, animi obcaecati, beatae accusantium cum ullam ratione odit repudiandae modi dignissimos debitis autem minima soluta, aspernatur similique ipsa? Libero nihil, nisi cum vero nostrum nulla eos in ab tempore nesciunt aperiam.
                </p>
            </div>
        </div>
    )
}

export default SecOne;
