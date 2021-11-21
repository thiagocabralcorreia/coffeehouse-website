import React, { useState, useEffect, useCallback } from 'react';
import './styles.scss';

import Form from '../../components/Form';
import SuccessMessage from '../../components/Form/SuccessMessage';

const Contact = () => {      
    const [submitted, setSubmitted] = useState(false);

    const submitForm = useCallback(() => {
            setSubmitted(true);
    }, [setSubmitted])    
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
          
    return (
        <div className='contact'>
            <div className='page-header'>
                <h1>Contact</h1>
            </div>
            <div className='content'>
                <h2>Get in Touch with Us</h2>
                <p>If you can’t find what you’re looking for on website, feel free to submit your question or suggestion using this form. We love to hear your feedback.</p>
            </div>
            {!submitted? <Form submitForm={submitForm} /> : <SuccessMessage /> }
        </div>
    )
}

export default Contact;
