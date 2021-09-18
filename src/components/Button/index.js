import React from 'react';
import './styles.css';

const Button = ({ text, white, onClick, hasIcon }) => {
    const { icon } = hasIcon || {};

    return (
        <button
        className={white ? 'white-button' : 'brown-button'}
        onClick={onClick}
        style={hasIcon && {display: 'flex'}}>
            {text}
            {hasIcon && (
                <div>
                    <i className={icon}></i>
                </div>
            )}
        </button>
    )
}

export default Button;
