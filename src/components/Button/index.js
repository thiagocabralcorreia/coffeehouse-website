import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import Icon from '../Icon';

const Button = ({ text, white, type, onClick, icon, iconSize }) => {

    return (
        <button
        className={white ? 'white-button' : 'brown-button'}
        onClick={onClick}
        type={type}>
            {text}
            {icon !== '' && (
                <Icon
                className={icon}
                size={iconSize}
                />
            )}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    white: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string,
};

Button.defaultProps = {
    text: '',
    icon: '',
    iconSize: '1rem',
    onClick: undefined,
};

export default Button;
