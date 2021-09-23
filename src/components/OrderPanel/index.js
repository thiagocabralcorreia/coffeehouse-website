import React from 'react';
import './styles.css';

const Order = () => {
    return (
         <div className='order-container'>
            <h1 className='order-title'>Ways to Order</h1>
            <p className='order-text'>Tell us how you want your order.</p>
            <div className='cards-container'>
                <div className='card'>
                    <i className='fas fa-car fa-2x'></i>
                    <h1>Drive-Thru</h1>
                    <p>Hop in the line and let us know you have a mobile order.</p>
                </div>
                
                <div className='card'>
                    <i className='fas fa-motorcycle fa-2x'></i>
                    <h1>Delivery</h1>
                    <p>Get your CH favorites delivered right to your doorstep with our app</p>
                </div>
                <div className='card'>
                    <i className='fas fa-mug-hot fa-2x'></i>
                    <h1>In-Store</h1>
                    <p>Pick up your order inside the restaurant.</p>
                </div>
            </div>
        </div>
    )
}

export default Order;
