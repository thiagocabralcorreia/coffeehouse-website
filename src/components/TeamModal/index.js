import React from 'react';
import Modal from '../Modal/';

function TeamModal({ open, close}) {
    return (
        <Modal open={open}>
            <button onClick={close}></button>
            <h1 style={{ color: 'black', fontSize: '5rem '}}>Teste</h1>
        </Modal>
    )
}

export default TeamModal;
