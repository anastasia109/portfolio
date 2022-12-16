import React from 'react';
import {Parallax} from 'react-parallax';

import './banner.css';

import figureImage1 from '../../static/images/figure-1.png';
import figureImage2 from '../../static/images/figure-2.png';
import figureImage3 from '../../static/images/figure-3.png';

const Banner = () => {

    return (
        <div className="banner aos-init">
            <div className="banner__content">
                <p className="banner__info">
                    <span data-aos="transform" data-aos-delay="150"
                          className="aos-init">Hello, my name's Anastasia. </span>
                    <span data-aos="transform" data-aos-delay="300"
                          className="aos-init">I'm a Front-end developer.</span>
                </p>
                <h1 className="banner__title aos-init" data-aos="animation-translate-up" data-aos-delay="200">Portfolio
                    site</h1>
            </div>
            <div className="banner__figures">
                <Parallax
                    className="banner__figure"
                    bgImage={figureImage1}
                    strength={100}
                    style={{
                        position: 'absolute',
                        overflow: 'visible',
                        willChange:'transform',
                        transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
                    }}
                >
                </Parallax>
                <Parallax
                    className="banner__figure"
                    bgImage={figureImage2}
                    strength={-100}
                    style={{
                        position: 'absolute',
                        overflow: 'visible',
                        willChange:'transform',
                        transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
                    }}
                >
                </Parallax>
                <Parallax
                    className="banner__figure"
                    bgImage={figureImage3}
                    strength={-100}
                    style={{
                        position: 'absolute',
                        overflow: 'visible',
                        willChange:'transform',
                        transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
                    }}
                >
                </Parallax>
            </div>
        </div>
    );
}

export default Banner;