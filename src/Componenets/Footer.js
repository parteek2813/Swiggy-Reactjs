import { useContext } from 'react';
import UserContext from './Context.js';
import '../styling/footer.css';

const Footer = () => {
    const { user } = useContext(UserContext);
    return (
        <>
            <div>
                <div class="style-123">
                    <footer class="style-124">
                        <div class="style-125">
                            <div class="style-126">
                                <a
                                    class="style-127"
                                    href="https://www.swiggy.com"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <div class="style-128">
                                        <img
                                            class="style-129"
                                            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_284/Logo_f5xzza"
                                        />
                                    </div>
                                </a>
                            </div>
                            <div class="style-130">
                                <p class="style-131">
                                    Developed by Parteek kumar with Love 💖
                                </p>
                            </div>
                            <div class="style-132">
                                <a
                                    class="style-133"
                                    href="https://github.com/parteek2813"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <div class="style-134">
                                        <img
                                            class="style-135"
                                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                        />
                                    </div>
                                </a>
                                <a
                                    class="style-136"
                                    href="https://www.linkedin.com/in/parteek-kumar-68881b15a/"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <div class="style-137">
                                        <img
                                            class="style-138"
                                            src="https://img.freepik.com/premium-vector/linkedin-icon_488108-5.jpg?w=2000"
                                        />
                                    </div>
                                </a>
                                <a
                                    class="style-139"
                                    href="https://instagram.com/swiggyindia/"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <div class="style-140">
                                        <img
                                            class="style-141"
                                            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_48/icon-instagram_b7nubh"
                                        />
                                    </div>
                                </a>
                                <a
                                    class="style-142"
                                    href="https://twitter.com/swiggyinstamart"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <div class="style-143">
                                        <img
                                            class="style-144"
                                            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_48/icon-twitter_gtq8dv"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Footer;
