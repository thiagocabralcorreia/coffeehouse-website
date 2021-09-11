import React from 'react';
import '../styles/Button.css';
import Icon from './Icon';

const Button = ({ text, white, onClick, hasIcon }) => {
    const { icon } = hasIcon || {};

    return (
        <button
        className={white ? 'white-button' : 'brown-button'}
        onClick={onClick}
        style={hasIcon && {display: 'flex'}}>
            {text}
            {hasIcon && (<Icon icon={icon}/>)}
        </button>
    )
}

export default Button;
