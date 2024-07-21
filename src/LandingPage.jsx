import React from 'react';
import './LandingPage.css';

const images = [
    'images/1.png',
    'images/2.JPG',
    'images/3.png',
    'images/4.png',
    'images/5.JPG',
    'images/6.JPG',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg',
    'images/11.jpg',
    'images/12.jpg',
];

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="pentagon-container">
                <div className="pentagon">
                    {images.map((image, index) => (
                        <div key={index} className="grid-item" style={{ backgroundImage: `url(${image})` }}></div>
                    ))}
                </div>
            </div>
            <div className="text-container">
                <h1>Prisma</h1>
                <h2>ADVERTISEMENT</h2>
            </div>
        </div>
    );
};

export default LandingPage;
