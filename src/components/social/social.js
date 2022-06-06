import React from 'react';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './social.css';

const Social = () => {
    return (
        <div className="social">
            <FontAwesomeIcon icon={faFacebookF} />
        </div>
    );
};

export default Social;