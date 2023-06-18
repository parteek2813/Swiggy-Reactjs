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

            <div class="style-0">
                <div class="style-1">
                    <div class="style-2">
                        <div class="style-3">
                            <div class="style-4">
                                <div class="style-5">
                                    <div
                                        data-testid="TextCauroselContainer0"
                                        class="style-6"
                                    >
                                        <div class="style-7">
                                            <p class="style-8">
                                                Daily essentials
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        data-testid="TextCauroselContainer1"
                                        class="style-9"
                                    >
                                        <div class="style-10">
                                            <p class="style-11">
                                                Fresh fruits &amp; veggies
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        data-testid="TextCauroselContainer2"
                                        class="style-12"
                                    >
                                        <div class="style-13">
                                            <p class="style-14">
                                                Dairy, bread &amp; eggs
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        data-testid="TextCauroselContainer3"
                                        class="style-15"
                                    >
                                        <div class="style-16">
                                            <p class="style-17">
                                                Snacks &amp; indulgences
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        data-testid="TextCauroselContainer4"
                                        class="style-18"
                                    >
                                        <div class="style-19">
                                            <p class="style-20">
                                                Emergency supplies
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="style-21">
                                    <h1 class="style-22">
                                        delivered in minutes,
                                    </h1>
                                    <h1 class="style-23">
                                        {' '}
                                        from the house of Swiggy.
                                    </h1>
                                    <p class="style-24">
                                        Open 6 AM to late night everyday
                                    </p>
                                </div>
                                <div class="style-25"></div>
                                <div class="style-26">
                                    <div class="style-27"></div>
                                </div>
                                <div class="style-28">
                                    <button class="style-29">
                                        Try Instamart on Swiggy app
                                    </button>
                                </div>
                            </div>
                            <div class="style-30"></div>
                            <div class="style-31">
                                <span class="style-32"></span>
                                <p class="style-33">
                                    Trusted by millions of shoppers in
                                    Bangalore, Delhi-NCR, Hyderabad, Mumbai,
                                    Chennai, Pune &amp; other cities
                                </p>
                            </div>
                            <div class="style-34"></div>
                        </div>
                    </div>
                    <div class="style-35">
                        <div class="style-36">
                            <div class="style-37">
                                <div class="style-38">
                                    <div class="style-39">
                                        <div class="style-40">
                                            <img
                                                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/1"
                                                class="style-41"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex m-60">
                                        <div class="style-42">
                                            <div class="style-43">
                                                <img
                                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/2"
                                                    class="style-44"
                                                />
                                            </div>
                                        </div>
                                        <div class="style-45">
                                            <div class="style-46">
                                                <img
                                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/3"
                                                    class="style-47"
                                                />
                                            </div>
                                        </div>
                                        <div class="style-48">
                                            <div class="style-49">
                                                <img
                                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/4"
                                                    class="style-50"
                                                />
                                            </div>
                                        </div>
                                        <div class="style-51">
                                            <div class="style-52">
                                                <img
                                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/5"
                                                    class="style-53"
                                                />
                                            </div>
                                        </div>
                                        <div class="style-54">
                                            <div class="style-55">
                                                <img
                                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/6"
                                                    class="style-56"
                                                />
                                            </div>
                                        </div>
                                        <div class="style-57">
                                            <div class="style-58">
                                                <img
                                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/7"
                                                    class="style-59"
                                                />
                                            </div>
                                        </div>
                                        <div class="style-60">
                                            <div class="style-61">
                                                <img
                                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/8"
                                                    class="style-62"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="style-63">
                                        <img
                                            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_660/InstamartMicrosite/Items/DotsAndLines"
                                            class="style-64"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="style-65">
                                <img
                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/InstamartMicrosite/InstamartEntrypoint"
                                    class="style-66"
                                />
                                <img
                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_760/InstamartMicrosite/MobileFrame"
                                    class="style-67"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Section
                title={'About Instamart'}
                description={
                    'We are about to launch the swiggy instamart page on the web. Till then you can enjoy the instamart services on the App.'
                }
                isVisible={visibleSection === 'about'}
                setisVisible={() => SetisVisibleSection('about')}
            />

            <Section
                title={'Convienece Grocery,  Powered By swiggy'}
                description={
                    'Grocery delivers in minutes, just as fast as we deliver food!'
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
