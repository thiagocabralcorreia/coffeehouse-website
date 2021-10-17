import React, { useState, useCallback } from 'react';
import './styles.scss';

import Form from '../../components/Form';
import SuccessMessage from '../../components/Form/SuccessMessage';

function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const submitForm = useCallback(() => {
            setSubmitted(true);
          }, [setSubmitted])
          
    return (
        <div className='contact'>
            <div className='header'>
                <h1>Contact</h1>
            </div>
            <div className='content'>
                <h2>We want to hear from you</h2>
                <p>If you can’t find what you’re looking for on website, feel free to submit your question or suggestion using this form. We love to hear your feedback.</p>
            </div>
            {!submitted? <Form submitForm={submitForm} /> : <SuccessMessage /> }
        </div>
    )
}

export default Contact;
