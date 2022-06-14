import React, {Component, Fragment} from 'react';

import Spinner from '../spinner';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../static/scss/base/module.css';
import './app.css';

export default class App extends Component {
    state = {
        isLoading: true
    }

    async componentDidMount() {
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
                        <div className="page">
                            <Header/>
                            <Main/>
                            <Footer/>
                        </div>
                }
            </Fragment>
        );
    };
}
