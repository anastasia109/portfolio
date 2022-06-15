import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact mb-50">
            <h2 className="main__title">Get in touch</h2>
            <p className="contact__content">If you'd like to get in touch, talk to me about collaborating on a project,
                or just say hi,
                <br/>fill out the great form below or send an email to <span className="fancy">
                    <a href="mailto:anastasia18106@gmail.com">anastasia18106@gmail.com</a></span> and ~let's talk.</p>
            <div className="contact__form">
                <form>
                    <ul className="contact_form-block animated">
                        <li className="active name">
                            <div className="label">
                                <label title="Name" data-text="Fill with your name" data-value="">Fill with your
                                    name</label>
                            </div>
                            <input autoComplete="off" type="text" name="name"/>
                        </li>
                        <li className="email">
                            <div className="label">
                                <label title="email" data-text="now your email address" data-value=""></label>
                            </div>
                            <input autoComplete="off" type="text" name="email"/>
                        </li>
                        <li className="msg">
                            <div className="label">
                                <label title="message" data-text="now write your awesome message :)"
                                       data-value=""></label>
                            </div>
                            <textarea name="message"></textarea>
                        </li>
                    </ul>
                    <div className="submit">
                        <a href="/" className="answer-btn">
                            <span className="answer-btn__content" data-status="Success!" data-loading="Wait for it ..">
                                <span>Next</span>
                            </span>
                        </a>
                        <a href="/" className="answer-btn">
                            <span className="answer-btn__content" data-status="Success!" data-loading="Wait for it ..">
                                <span>Submit your message</span>
                            </span>
                        </a>
                    </div>
                    <div className="status"></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
