import React from 'react';
import PropTypes from 'prop-types';
import '../styles.scss';

import useForm from '../../../hooks/useForm';
import validate from '../Validation';
import Input from '../../../components/Form/Input';
import Button from '../../../components/Button';

const SignUp = ({ submitForm }) => {
    const { handleSubmit, handleChange, values, errors } = useForm( submitForm, validate );

    return (
        <form
            className='subscribe-container'
            onSubmit={handleSubmit}
            noValidate
        >
            <div className='subscribe-column'>
                <h1>Never Miss Our Latest News<span> </span><br/>& Offers</h1>
                <p>Join today to get 15% off your first order and enjoy a free beverage. Sign up for our newsletter and receive surprise rewards.</p>
            </div>
            <div className='subscribe-row'>
                <Input
                    type='text'
                    name='email'
                    placeholder='Enter Email Address'
                    value={values.email}
                    errors={errors.email}
                    onChange={handleChange}
                />
                <Button type='submit' text='Sign Up'/>
            </div>
        </form>
    )
}

SignUp.propTypes = {
    submitForm: PropTypes.func,
  };
  
SignUp.defaultProps = {
    submitForm: '',
  };

export default SignUp;
