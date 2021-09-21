import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Icon({ className, size, color, hoverColor, width, height, pointer  }) {
    const [ fill, setFill ] = useState(color);
    return (
        <div>
            <i className={className}
                onMouseOver={() => setFill(hoverColor)}
                onMouseOut={() => setFill(color)}
                style={{ fontSize: size, color: fill, width: width, height: height, cursor: pointer }}
            />
        </div>
    )
}

Icon.propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Icon.defaultProps = {
    className: '',
    size: '',
    color: 'var(--white)',
    hoverColor: '',
    width: '100%',
    height: '100%',
};

export default Icon;