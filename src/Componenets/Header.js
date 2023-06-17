import { useState, useContext } from 'react';
import Logo from './assets/img/FoodVilla.png';
import { Link } from 'react-router-dom';
import useOnline from './utils/useOnline';
import UserContext from './Context';
import { useSelector } from 'react-redux';

import '../header.css'; // Import the CSS file

const LoginUser = () => {
    return false;
};

const title = () => (
    <a href="/">
        <img className="logo" src={Logo} alt="Food Villa" />
    </a>
);

const Header = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const { user, email } = useContext(UserContext);
    {
        console.log(user);
        console.log(email);
    }

    const [isLoggedIn, setisLoggenIn] = useState(true);
    const isOnline = useOnline();

    return (
        <div className="header">
            {title()}

            <div className="nav-items nav-style">
                <ul className="nav-style-element">
                    <li>
                        <Link to="/"> Home</Link>
                    </li>

                    <li>
                        <Link to="/about"> About</Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact Us</Link>
                    </li>

                    <li>
                        <Link to="/cart"> Cart- {cartItems.length} </Link>
                    </li>

                    <li>
                        <Link to="/Instamart"> Instamart </Link>
                    </li>
                </ul>
            </div>

            <div className="user-info">
                <h1>
                    {user.name}-{email.email}
                </h1>

                <div className="online-indicator">{isOnline ? '✔' : '🎁'}</div>

                {isLoggedIn ? (
                    <button
                        className="login-button"
                        onClick={() => setisLoggenIn(false)}
                    >
                        Log In
                    </button>
                ) : (
                    <button
                        className="login-button"
                        onClick={() => setisLoggenIn(true)}
                    >
                        Log Out
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
