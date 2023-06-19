import { useState } from 'react';
import '../styling/instamart.css';
import { Link } from 'react-router-dom';

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
        <div>
            <div className="container ">
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
                                                    Dairy, bread &amp;
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            data-testid="TextCauroselContainer3"
                                            class="style-15"
                                        >
                                            <div class="style-16">
                                                <p class="style-17">
                                                    Snacks indulgences
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
                                        Bangalore and Delhi-NCR, Hyderabad,
                                        Mumbai, Chennai, Pune &amp; other cities
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
                                            <div class="style-40 mr-20">
                                                <img
                                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/1"
                                                    class="style-41"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex ml-[120px]">
                                            <div class="style-42 ">
                                                <div class="style-43">
                                                    <img
                                                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/2"
                                                        class="style-44"
                                                    />
                                                </div>
                                            </div>
                                            <div class="style-45 ml-[120px]">
                                                <div class="style-46">
                                                    <img
                                                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/3"
                                                        class="style-47"
                                                    />
                                                </div>
                                            </div>
                                            <div class="style-48 mt-[140px]">
                                                <div class="style-49">
                                                    <img
                                                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/4"
                                                        class="style-50"
                                                    />
                                                </div>
                                            </div>
                                            <div class="style-51 ml-[120px] mt-[130px]">
                                                <div class="style-52">
                                                    <img
                                                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/5"
                                                        class="style-53"
                                                    />
                                                </div>
                                            </div>
                                            {/* <div class="style-54 ml-[200px] ">
                                            <div class="style-55">
                                                <img
                                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/6"
                                                    class="style-56"
                                                />
                                            </div>
                                        </div> */}
                                            {/* <div class="style-57">
                                            <div class="style-58">
                                                <img
                                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/7"
                                                    class="style-59"
                                                />
                                            </div>
                                        </div> */}
                                            {/* <div class="style-60">
                                            <div class="style-61">
                                                <img
                                                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/InstamartMicrosite/Items/8"
                                                    class="style-62"
                                                />
                                            </div>
                                        </div> */}
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
            </div>

            <div className="style-68"></div>
            <h1 class="style-69">We have got all the brands you trust...</h1>

            <div class="style-70">
                <div class="style-71">
                    <div class="style-72">
                        <img
                            class="style-73"
                            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200/rng/md/carousel/production/ywebhvvcmlvn23lbdn9g"
                        />
                    </div>
                </div>
                <div class="style-74">
                    <div class="style-75">
                        <img
                            class="style-76"
                            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200/rng/md/carousel/production/u9qznmgui5vqgkqqqobv"
                        />
                    </div>
                </div>
                <div class="style-77">
                    <div class="style-78">
                        <img
                            class="style-79"
                            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200/rng/md/carousel/production/vjdf1aupdw67gqjyqv9d"
                        />
                    </div>
                </div>
                <div class="style-80">
                    <div class="style-81">
                        <img
                            class="style-82"
                            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200/rng/md/carousel/production/swcncvofcjsimievsiwd"
                        />
                    </div>
                </div>
                <div class="style-83">
                    <div class="style-84">
                        <img
                            class="style-85"
                            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200/rng/md/carousel/production/ixwxrgz0edpnjizlbxuw"
                        />
                    </div>
                </div>
                <div class="style-86">
                    <div class="style-87">
                        <img
                            class="style-88"
                            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200/rng/md/carousel/production/dplozfrjdtygo1skxm3h"
                        />
                    </div>
                </div>
                <div class="style-89">
                    <div class="style-90">
                        <img
                            class="style-91"
                            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200/rng/md/carousel/production/mmz6nkq1wdhheigw2byv"
                        />
                    </div>
                </div>
                <div class="style-92">
                    <div class="style-93">
                        <img
                            class="style-94"
                            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200/rng/md/carousel/production/eqfm500sk0iwbvkvkmjb"
                        />
                    </div>
                </div>
                <div class="style-95">
                    <div class="style-96">
                        <img
                            class="style-97"
                            src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/07/17/705519-hul-012317.jpg"
                        />
                    </div>
                </div>
                <div class="style-98">
                    <div class="style-99">
                        <img
                            class="style-100"
                            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200/rng/md/carousel/production/zye0waarsdxcznrkzolb"
                        />
                    </div>
                </div>
            </div>

            {/** Footer part starts here . */}
            <div className="style-101"></div>

            {/* Last footer and download link part*/}

            <div className="flex">
                {/* Left image wala pane*/}
                <img
                    class="style-102"
                    tir
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1000/InstamartMicrosite/FooterVisual"
                />

                {/* Right image wala pane*/}
                <div class="style-103">
                    <div class="style-104">
                        <h1 class="style-105">Download Swiggy &amp;</h1>
                        <h1 class="style-106">order now on Instamart!</h1>
                        <div class="style-107"></div>
                        <div class="style-108">
                            <span class="style-109"></span>
                            <p
                                data-testid="offer-displaytext"
                                class="style-110"
                            >
                                🚀 Auto
                            </p>
                        </div>
                        <div class="style-111"></div>
                        <div class="style-112">
                            <span class="style-113"></span>
                            <p class="style-114">
                                💖 Trusted by millions of shoppers in Bangalore,
                                Delhi-NCR, Hyderabad, &amp; Mumbai, Chennai,
                                Pune other cities.
                            </p>
                        </div>
                        <div class="style-115"></div>
                        <div class="style-116">
                            <div class="style-117">
                                <div class="style-118"></div>
                            </div>

                            <div className="flex">
                                <a
                                    data-testid="a-IOSClick-link"
                                    href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920?utm_source=instamart&amp;utm_medium=weblanding&amp;utm_campaign=ios"
                                    rel="noreferrer"
                                    target="_blank"
                                    class="style-119"
                                >
                                    <img
                                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_100/InstamartMicrosite/DownloadAppStore"
                                        class="style-120"
                                    />
                                </a>
                                <a
                                    data-testid="a-AndroidClick-link"
                                    href="https://play.google.com/store/apps/details?id=in.swiggy.android&amp;referrer=utm_source%3Dinstamart%26utm_medium%3Dweblanding%26anid%3Dadmob"
                                    rel="noreferrer"
                                    target="_blank"
                                    class="style-121"
                                >
                                    <img
                                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_100/InstamartMicrosite/GooglePlayStore"
                                        class="style-122"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Section
                    title={'About Instamart'}
                    description={
                        '👤 We are about to launch the swiggy instamart page on the web. Till then you can enjoy the instamart services on the App.'
                    }
                    isVisible={visibleSection === 'about'}
                    setisVisible={() => SetisVisibleSection('about')}
                />

                <Section
                    title={'Convienece Grocery,  Powered By swiggy'}
                    description={
                        '🚀 Grocery delivers in minutes, just as fast as we deliver food!'
                    }
                    isVisible={visibleSection === 'team'}
                    setisVisible={() => SetisVisibleSection('team')}
                />

                <Section
                    title={'Contact Us'}
                    description={
                        <div>
                            💁 You can contact us by clicking it here to submit
                            any query:
                            <span className="pl-3">
                                <button>
                                    <Link to="/contact">Contact</Link>
                                </button>
                            </span>
                        </div>
                    }
                    isVisible={visibleSection === 'contact'}
                    setisVisible={() => SetisVisibleSection('contact')}
                />
            </div>
        </div>
    );
};

export default Instamart;
