import React from 'react';

import './banner.css';

import figureImage1 from '../../static/images/figure-1.png';
import figureImage2 from '../../static/images/figure-2.png';
import figureImage3 from '../../static/images/figure-3.png';

const Banner = () =>  {

        return (
            <div className="banner aos-init">
                <div className="banner__content">
                    <p className="banner__info aos-init" data-aos="animation-translate-up" data-aos-delay="100">Hello, my name's Anastasia. I'm a Front-end developer.</p>
                    <h1 className="banner__title aos-init" data-aos="animation-translate-up" data-aos-delay="200">Portfolio site</h1>
                    {/*<h1 className="main__title title h1">*/}
                    {/*    <span data-aos="transform" data-aos-delay="150">Hello, my</span>*/}
                    {/*    <span data-aos="transform" data-aos-delay="300">name's Anastasia.</span>*/}
                    {/*    <span data-aos="transform" data-aos-delay="450">I'm a Front-end</span><span*/}
                    {/*    data-aos="transform" data-aos-delay="600">Developer.</span></h1>*/}

                <a className="btn banner__contact" href="/">More details</a>
                </div>
                <div className="banner__figures">
                    <div className="banner__figure">
                        <img className="details__pic js-parallax" data-scale="2" data-orientation="down"
                             src={figureImage1}
                             alt='figure'/>
                    </div>
                    <div className="banner__figure">
                        <img className="details__pic js-parallax" data-scale="2" data-orientation="up"
                             src={figureImage2}
                             alt='figure'/>
                    </div>
                    <div className="banner__figure">
                        <img className="details__pic js-parallax" data-scale="1.2" data-orientation="up"
                             src={figureImage3}
                             alt='figure'/>
                    </div>
                </div>
            </div>
        );
}

export default Banner;