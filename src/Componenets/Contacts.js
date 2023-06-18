import React from 'react';
import '../styling/contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-heading">Contact Us</h2>
            <form className="contact-form">
                <div>
                    <label htmlFor="name" className="contact-label  mr-6">
                        Name:
                    </label>
                    <input type="text" id="name" className="contact-input" />
                </div>
                <div>
                    <label htmlFor="email" className="contact-label  mr-6">
                        Email:
                    </label>
                    <input type="email" id="email" className="contact-input" />
                </div>
                <div>
                    <label htmlFor="message" className="contact-label mr-6">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        className="contact-textarea"
                        rows="3"
                    ></textarea>
                </div>
                <button type="submit" className="contact-button bg-black">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
