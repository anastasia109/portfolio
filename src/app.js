import React, {Fragment, useState, useEffect} from 'react';

import AppRouter from "./components/app-router";
import Footer from "./components/footer";
import Top from "./components/top";
import Spinner from "./components/spinner";

import AOS from "aos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './static/scss/base/module.css';

const App = () => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init();
        AOS.refresh();

        setLoading(false);
    }, [])
    return (
        <Fragment>
            {
                isLoading
                    ? <Spinner />
                    :
                    <div className="page" data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0"
                         id="top">
                        <AppRouter/>
                        <Footer/>
                        <Top/>
                    </div>
            }
        </Fragment>
    );
}

export default App;