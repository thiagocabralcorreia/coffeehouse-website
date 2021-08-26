import React from 'react';
import '../styles/InputSearch.css';
import Icon from './Icon';

const InputSearch = ({ placeholder }) => {
    return (
        <div className='search-form'>
            <input
                className='search-input'
                type='search'
                placeholder={placeholder}            
            />
            <button className='search-btn'>
                <Icon icon='fas fa-search'/>
            </button>
        </div>
    )
}

export default InputSearch;
