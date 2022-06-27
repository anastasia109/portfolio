import React, {Component} from 'react';
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

        axios({
            method: 'post',
            url: `${process.env.REACT_APP_API}`,
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
                        <h3 className="main__title">Get in touch</h3>
                        <p className="contact__text">If you'd like to get in touch, talk to me about collaborating
                            on a
                            project, or just say hi,<br/> fill out the great form below or send an email to <a
                                href="mailto:anastasia18106@gmail.com">anastasia18106@gmail.com</a> and ~let's talk.
                        </p>
                    </div>
                    <div className="contact__figures">
                        <div className="contact__figure">
                            <img className="details__pic js-parallax" data-scale="2" data-orientation="down"
                                 src={figureImage1}
                                 alt='figure'/>
                        </div>
                        <div className="contact__figure">
                            <img className="details__pic js-parallax" data-scale="2" data-orientation="up"
                                 src={figureImage4}
                                 alt='figure'/>
                        </div>
                        <div className="contact__figure">
                            <img className="details__pic js-parallax" data-scale="1.2" data-orientation="up"
                                 src={figureImage5}
                                 alt='figure'/>
                        </div>
                    </div>
                </div>
                <div className="contact__details">
                    <div className="contact__social">
                        <Social/>
                    </div>
                    <div className="contact__form">
                        <form>
                            <div className="contact__form-block">
                                <div className="contact__form-input">
                                    <input autoComplete="off" type="text" name="name" placeholder="Name"
                                           value={name}
                                           onChange={e => this.setState({name: e.target.value})}
                                    />
                                </div>
                                <div className="contact__form-input">
                                    <input autoComplete="off" type="text" name="email" placeholder="email"
                                           value={email}
                                           onChange={e => this.setState({email: e.target.value})}
                                    />
                                </div>
                                <div className="contact__form-input">
                                        <textarea name="message" placeholder="now write your awesome message :)"
                                                  value={message}
                                                  onChange={e => this.setState({message: e.target.value})}
                                        >
                                        </textarea>
                                </div>
                                <div className="contact__form-submit">
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
