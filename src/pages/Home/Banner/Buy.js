import React from 'react';

const Buy = () => {
    return (
        <div className='d-flex banner-buy w-full justify-content-between align-items-center text-light p-3' style={{ color: 'black', backgroundColor: '#366e54' }}>
            <div>
                <p>Location</p>
            </div>
            <div>
                <p>Type</p>
            </div>
            <div>
                <p>Price Range</p>
            </div>
            <div>
                <button id='log-in'>Search</button>
            </div>
        </div>
    );
};

export default Buy;