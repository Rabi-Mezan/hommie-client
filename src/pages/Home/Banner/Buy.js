import React from 'react';

const Buy = () => {
    return (
        <div className='d-flex banner-buy justify-content-between bg-white align-items-center p-3' style={{ color: 'black' }}>
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