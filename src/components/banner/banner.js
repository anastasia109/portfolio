import React from 'react';
import './banner.css'
import bannerImage from '../../static/images/laptop.png';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__content">
                <h1 className="banner__title">Portfolio site</h1>
                <div className="banner__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <a href="/" className="btn">More details</a>
            </div>
            <div className="banner__image">
                <img src={bannerImage} alt='banner'/>
            </div>
        </div>
    );
};

export default Banner;