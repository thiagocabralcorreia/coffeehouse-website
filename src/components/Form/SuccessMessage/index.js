import React from 'react';
import './styles.css';

import Icon from '../../Icon';

const SuccessMessage = () => {
    return (
        <div className='success-message'>
            <Icon
                className='fas fa-check-circle'
                size='3.5rem'
            />
            <h2>Message sent!</h2>
            <p>Coffee House’s customer service will get back to you shortly.</p>
        </div>
    )
}

export default SuccessMessage;
