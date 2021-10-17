import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputSearch = ({ placeholder }) => {
    return (
        <div className='search-form'>
            <input
                type='search'
                placeholder={placeholder}            
            />
            <button>
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
