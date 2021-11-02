import React from 'react'
import useForm from './UseForm'
import VaInfo from './VaInfo'
import './Form.css'

const FormSignUp = ({ submitForm }) => {

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, VaInfo);

    return (
        <div className="form__content__right">
            <form className='form' onSubmit={handleSubmit}>
                <div className="form__inputs">
                    <label htmlFor="firstName" className='form__label'>
                        First Name
                    </label>
                        <input
                            id='first name'
                            type="text"
                            name='firstName'
                            className='form__input'
                            placeholder='Enter your first name'
                            value={values.firstName}
                            onChange={handleChange}
                    />
                    {errors.firstName && <p>{errors.firstName}</p>}
                </div>

                <div className="form__inputs">
                    <label htmlFor="lastName" className='form__label'>
                        Last Name
                    </label>
                        <input
                            id='last name'
                            type="text"
                            name='lastName'
                            className='form__input'
                            placeholder='Enter your Last name'
                            value={values.lastName}
                            onChange={handleChange}
                    />
                    {errors.lastName && <p>{errors.lastName}</p>}
                </div>

                <div className="form__inputs">
                    <label htmlFor="birthday" className='form__label'>
                        Patient's Birthday
                    </label>
                        <input
                            id='date'
                            type="date"
                            name='birthday'
                            className='form__input'
                            placeholder='Enter your Last name'
                            value={values.birthday}
                            onChange={handleChange}
                    />
                    {errors.birthday && <p>{errors.birthday}</p>}
                </div>

                <div className="form__inputs">
                    <label htmlFor="email" className='form__label'>
                        Email
                    </label>
                        <input
                            id='email'
                            type="email"
                            name='email'
                            className='form__input'
                            placeholder='Enter your email'
                            value={values.email}
                            onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className="form__inputs">
                    <label htmlFor="phoneNumber" className='form__label'>
                        Phone Number
                    </label>
                        <input
                            id='phone number'
                            type="tel"
                            name='phoneNumber'
                            className='form__input'
                            placeholder='Enter your phone number'
                            value={values.phoneNumber}
                            onChange={handleChange}
                    />
                    {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                </div>

                <div className="form__inputs">
                    <label htmlFor="reason" className='form__label'>
                        Reason For Visit
                    </label>
                        <input
                            id='reason for visit'
                            type="text"
                            name='reason'
                            className='form__input'
                            placeholder='Enter your reason'
                            value={values.reason}
                            onChange={handleChange}
                    />
                    {errors.reason && <p>{errors.reason}</p>}
                </div>
                <button className="form__input__btn hvr-pop" type='submit'>
                    Submit
                </button>

            </form>
        </div>
    )
}

export default FormSignUp
