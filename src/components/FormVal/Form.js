import React, {useState} from 'react'
import FormSignUp from './FormSignUp'
import FormSuccess from './FormSuccess';
import FormHeader from './FormHeader';
import './Form.css'

const Form = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>
            <div className="link" id='formHeader'></div>
                <FormHeader />
                <div className="form__container">
                    <div className="form__content__left">
                        <img src="/img/formimgleft.jpg" alt="Collage of dentistry images" />
                    </div>
                    {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
                </div>
        </>
    )
}

export default Form
