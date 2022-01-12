import React from 'react';
import Banner from './Banner/Banner';
import OurQualities from './OurQualities/OurQualities';
import Recomend from './Recomend/Recomend';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Recomend></Recomend>
            <OurQualities></OurQualities>
        </div>
    );
};

export default Home;