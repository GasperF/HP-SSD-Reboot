import React from 'react'
import './Form.css'

const FormSuccess = () => {
    return (
        <div className="form__content-right">
            <div className="form__success">
                Your request was submitted successfully! <br /> We will be in contact with you soon.
            </div>
            <img src="/img/formimg.jpg" className='form__img__2'
            alt="toothbrushes in a glass jar next to the words, See you soon." />
        </div>
    )
}

export default FormSuccess
