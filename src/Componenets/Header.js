import { useState, useContext } from 'react';
import Logo from './assets/img/FoodVilla.png';
import { Link } from 'react-router-dom';
import useOnline from './utils/useOnline';
import UserContext from './Context';
import { useSelector } from 'react-redux';

const LoginUser = () => {
    return false;
};

const title = () => (
    <a href="/">
        <img className="h-28 pl-2" src={Logo} alt="Food Villa" />
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
        <div className="flex justify-between bg-pink-50 shadow-lg">
            {title()}

            <div className="nav-items nav-style">
                <ul className="flex py-10 ">
                    <li className="px-2">
                        <Link to="/"> Home</Link>
                    </li>

                    <li className="px-2">
                        {' '}
                        <Link to="/about"> About</Link>
                    </li>
                    <li className="px-2">
                        {' '}
                        <Link to="/contact"> Contact Us</Link>
                    </li>

                    <li className="px-2">
                        {' '}
                        <Link to="/cart"> Cart- {cartItems.length} </Link>
                    </li>

                    <li className="px-2">
                        {' '}
                        <Link to="/Instamart"> Instamart </Link>
                    </li>

                    <UserContext.Consumer>
                        {({ user }) => {
                            <h4 className="font-bold text-xl m-3 p-3 ">
                                {user.name} - {user.email}
                            </h4>;
                        }}
                    </UserContext.Consumer>
                </ul>
            </div>

            <UserContext.Consumer>
                {({ user }) => {
                    <h4 className="font-bold text-xl m-3 p-3">
                        {' '}
                        {user.name} - {email.email}{' '}
                    </h4>;
                }}
            </UserContext.Consumer>

            <h1 className="p-10 font-bold text-red-900">
                {user.name}-{email.email}
            </h1>
            {/* {console.log(user.email)} // undefined */}
            <h1> {isOnline ? '✔' : '🎁'}</h1>
            {isLoggedIn ? (
                <button onClick={() => setisLoggenIn(false)}> Log In</button>
            ) : (
                <button onClick={() => setisLoggenIn(true)}> Log Out</button>
            )}
        </div>
    );
};

export default Header;
