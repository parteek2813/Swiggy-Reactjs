import { useState } from 'react';
import '../styling/instamart.css';

const Section = ({ title, description, isVisible, setisVisible }) => {
    return (
        <div className="section">
            <h3>{title}</h3>

            {isVisible ? (
                <button
                    onClick={() => setisVisible(false)}
                    className="cursor-pointer"
                >
                    Hide
                </button>
            ) : (
                <button
                    onClick={() => setisVisible(true)}
                    className="cursor-pointer"
                >
                    Show
                </button>
            )}

            {isVisible && <p>{description}</p>}
        </div>
    );
};

const Instamart = () => {
    const [visibleSection, SetisVisibleSection] = useState('about');

    return (
        <div className="container">
            <h1 className="title">Instamart</h1>

            <Section
                title={'About Instamart'}
                description={
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                }
                isVisible={visibleSection === 'about'}
                setisVisible={() => SetisVisibleSection('about')}
            />

            <Section
                title={'Team Page'}
                description={
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                }
                isVisible={visibleSection === 'team'}
                setisVisible={() => SetisVisibleSection('team')}
            />

            <Section
                title={'Contact Us Instamart'}
                description={
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                }
                isVisible={visibleSection === 'contact'}
                setisVisible={() => SetisVisibleSection('contact')}
            />
        </div>
    );
};

export default Instamart;
