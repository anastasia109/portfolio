import React, {Component, Fragment} from 'react';
import Spinner from "../components/spinner";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import Top from "../components/top";
import AOS from "aos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../static/scss/base/module.css';

export default class Home extends Component {
    state = {
        isLoading: true
    }

    async componentDidMount() {
        AOS.init();
        AOS.refresh();

        this.setState({
            isLoading: false
        })
    }

    render() {
        const {isLoading} = this.state;
        return (
            <Fragment>
                {
                    isLoading
                        ? <Spinner/>
                        :
                        <div className="page" data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0"
                             id="top">
                            <Header/>
                            <Main/>
                            <Footer/>
                            <Top/>
                        </div>
                }
            </Fragment>
        );
    }
};
