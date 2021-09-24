import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const InputSearch = ({ placeholder }) => {
    return (
        <div className='search-form'>
            <input
                className='search-input'
                type='search'
                placeholder={placeholder}            
            />
            <button className='search-btn'>
                <i className='fas fa-search'/>
            </button>
        </div>
    )
}

InputSearch.propTypes = {
    placeholder: PropTypes.string,
};

InputSearch.defaultProps = {
    placeholder: '',
};

export default InputSearch;
