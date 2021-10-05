import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Button = ({ text, white, type, onClick, hasIcon }) => {
    const { icon } = hasIcon || {};

    return (
        <button
        className={white ? 'white-button' : 'brown-button'}
        onClick={onClick}
        type={type}
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

Button.propTypes = {
    text: PropTypes.string,
    white: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string,
};

Button.defaultProps = {
    text: '',
    size: 'true',
    onClick: undefined,
};

export default Button;
