import React from 'react';
import '../styles/Button.css';
import Icon from './Icon';

const Button = ({ text, onClick, display, hasIcon }) => {
    const { icon } = hasIcon || {};

    return (
        <button
        className='main-button'
        onClick={onClick}
        style={hasIcon && {display: 'flex'}}>
            {text}
            {hasIcon && (<Icon icon={icon}/>)}
        </button>
    )
}

export default Button;
