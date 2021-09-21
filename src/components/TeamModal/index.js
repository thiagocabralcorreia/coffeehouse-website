import React from 'react';
import Modal from '../Modal/';

function TeamModal({ onClose, open}) {
    return (
        <Modal open={open} onClose={onClose}>
            <button onClick={onClose}></button>
            <h1 style={{ color: 'black', fontSize: '5rem '}}>Teste</h1>
        </Modal>
    )
}

export default TeamModal;
