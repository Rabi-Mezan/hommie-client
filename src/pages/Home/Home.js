import React from 'react';
import Offer from '../Offer/Offer';
import Footer from '../Shared/Header/Footer/Footer';
import Banner from './Banner/Banner';
import OurQualities from './OurQualities/OurQualities';
import Property from './Property/Property';
import Recomend from './Recomend/Recomend';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Recomend></Recomend>
            <OurQualities></OurQualities>
            <Property></Property>
            <Review></Review>
            <Offer></Offer>

        </div>
    );
};

export default Home;