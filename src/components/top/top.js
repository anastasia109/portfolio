import React from 'react';

import './top.scss';
import {Link as LinkS} from "react-scroll";

const Top = () => {
    return (
        <LinkS activeClass="active"
               to="top"
               spy={true}
               smooth={true}
               offset={-10}
               duration={500}>
            <div className="top aos-init" data-aos="animation-translate-up" data-aos-delay="200"/>
        </LinkS>
    );
};

export default Top;