import React from 'react';
import Header from './Header';
import WelcomeBanner from './WelcomeBanner';
import Features from './Features';
import Footer from './Footer';

function Landing() {
    return (
        <div>
            <Header />
            <WelcomeBanner />
            <Features />
            <Footer />
        </div>
    );
}

export default Landing;
