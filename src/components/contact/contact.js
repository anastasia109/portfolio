import React, {Component} from 'react';
import {Parallax} from 'react-parallax';
import axios from 'axios';

import './contact.css';
import Social from "../social";
import figureImage1 from "../../static/images/figure-1.png";
import figureImage4 from "../../static/images/figure-4.png";
import figureImage5 from "../../static/images/figure-5.png";

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        mailSent: false,
        error: null,
    }

    handleFormSubmit = e => {
        e.preventDefault();
        const api = 'https://anastasiia-portfolio.netlify.app/mail.php';
        axios({
            method: 'post',
            url: api,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({ error: error.message }));
    };

    render() {
        const {name, email, message} = this.state;
        return (
            <div className="contact" id="contact">
                <div className="contact__info">
                    <div className="contact__content">
                        <h3 className="main__title aos-init" data-aos="animation-scale-y" data-aos-delay="150">Get in touch</h3>
                        <p className="contact__text aos-init" data-aos="animation-translate-y" data-aos-delay="200">If you'd like to get in touch, talk to me about collaborating
                            on a
                            project, or just say hi,<br/> fill out the great form below or send an email to <a
                                href="mailto:anastasia18106@gmail.com">anastasia18106@gmail.com</a> and ~let's talk.
                        </p>
                    </div>
                    <div className="contact__figures">
                        <Parallax
                            className="contact__figure"
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
                            className="contact__figure"
                            bgImage={figureImage4}
                            strength={-50}
                            style={{
                                position: 'absolute',
                                overflow: 'visible',
                                willChange:'transform',
                                transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
                            }}
                        >
                        </Parallax>
                        <Parallax
                            className="contact__figure"
                            bgImage={figureImage5}
                            strength={50}
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
                <div className="contact__details">
                    <div className="contact__social">
                        <Social/>
                    </div>
                    <div className="contact__form">
                        <form>
                            <div className="contact__form-block">
                                <div className="contact__form-input aos-init" data-aos="animation-scale-y" data-aos-delay="100">
                                    <input autoComplete="off" type="text" name="name" placeholder="Name"
                                           value={name}
                                           onChange={e => this.setState({name: e.target.value})}
                                    />
                                </div>
                                <div className="contact__form-input aos-init" data-aos="animation-scale-y" data-aos-delay="200">
                                    <input autoComplete="off" type="text" name="email" placeholder="email"
                                           value={email}
                                           onChange={e => this.setState({email: e.target.value})}
                                    />
                                </div>
                                <div className="contact__form-input aos-init" data-aos="animation-scale-y" data-aos-delay="300">
                                        <textarea name="message" placeholder="now write your awesome message :)"
                                                  value={message}
                                                  onChange={e => this.setState({message: e.target.value})}
                                        >
                                        </textarea>
                                </div>
                                <div className="contact__form-submit aos-init" data-aos="animation-scale-y" data-aos-delay="400">
                                    <input type="submit" className="contact__submit btn"  onClick={e => this.handleFormSubmit(e)} value="Let’s Talk" />
                                </div>
                            </div>
                            <div>
                                {this.state.mailSent &&
                                <div>Thank you for contcting us.</div>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
