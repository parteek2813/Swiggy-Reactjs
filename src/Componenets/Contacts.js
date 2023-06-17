import React from 'react';
import '../styling/contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-heading">Contact Us</h2>
            <form className="contact-form">
                <div>
                    <label htmlFor="name" className="contact-label">
                        Name:
                    </label>
                    <input type="text" id="name" className="contact-input" />
                </div>
                <div>
                    <label htmlFor="email" className="contact-label">
                        Email:
                    </label>
                    <input type="email" id="email" className="contact-input" />
                </div>
                <div>
                    <label htmlFor="message" className="contact-label">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        className="contact-textarea"
                        rows="4"
                    ></textarea>
                </div>
                <button type="submit" className="contact-button">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
