import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import Modal from '../Modal';
import Icon from '../Icon'

import { impactPratices } from '../../data/impactPratices';
import { useValue } from '../../context/PageContext';

function ImpactModal({ onClose, open }) {
    const { currentValue, setCurrentValue } = useValue();
    const length = impactPratices.length;

    const previousCard = () => {
        setCurrentValue(currentValue === 0 ? length - 1 : currentValue - 1); 
    }
    const nextCard = () => {
        setCurrentValue(currentValue === length - 1 ? 0 : currentValue + 1); 
    }

    if(!Array.isArray(impactPratices) || length <= 0) {
        return null;
    }
    return (
        <Modal open={open} onClose={onClose}>
            {impactPratices.map((item, index) => {
                return (
                    item.id === currentValue
                    && <div className='impact-modal' key={index}>
                        <div className='impact-modal-icon'>
                            <Icon
                                className='fas fa-times'
                                onClick={onClose}
                                hoverColor='var(--light-brown)'
                                size='1.5rem'
                                cursor='pointer'
                            />
                        </div>
                        <img src={item.image} alt={item.description}></img>
                        <div className='modal-arrows'>
                            <Icon
                                className='fas fa-chevron-left'
                                onClick={previousCard}
                                hoverColor='var(--light-brown)'
                                size='1.5rem'
                                cursor='pointer'
                            />
                            <Icon
                                className='fas fa-chevron-right'
                                onClick={nextCard}
                                hoverColor='var(--light-brown)'
                                size='1.5rem'
                                cursor='pointer'
                            />
                        </div>
                        <div className='impact-text-modal'>
                            <p>{item.text}</p>
                        </div>
                    </div>
                )
            })}
        </Modal>
    )
}

ImpactModal.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
    slides: PropTypes.arrayOf(PropTypes.object),
}

export default ImpactModal;
