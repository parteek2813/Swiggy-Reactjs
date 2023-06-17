import { Outlet } from 'react-router-dom';
import { Profile } from './Profile';
import Profilefun from './ProfileClass';
import { Component, useContext } from 'react';
import UserContext from './Context';
import '../styling/about.css';

class About extends Component {
    constructor(props) {
        super(props);

        console.log('Parent Constuctor');
    }

    componentDidMount() {
        //API call
        console.log('Parent - ComponeetdidMount');
    }
    render() {
        console.log('Parent-Render');
        return (
            <div>
                <div className="about-container">
                    <h2 className="about-heading">About Us</h2>

                    <UserContext.Consumer>
                        {({ user, email }) => (
                            <h4 className="font-bold text-2xl">
                                {user.name} - {email.email}
                            </h4>
                        )}
                    </UserContext.Consumer>

                    <p className="about-description">
                        Welcome to our Swiggy clone website! We are dedicated to
                        providing a seamless and convenient food ordering
                        experience for our users. With a wide range of
                        restaurants and cuisines to choose from, you can satisfy
                        your cravings with just a few clicks.
                    </p>

                    <p className="about-description">
                        Our mission is to connect food lovers with their
                        favorite restaurants and deliver delicious meals
                        straight to their doorsteps. Whether you're craving
                        pizza, sushi, or any other delicacy, our platform has
                        got you covered.
                    </p>
                    <p className="about-description">
                        Join us today and explore the diverse culinary options
                        available in your area. Experience the convenience of
                        online food ordering and enjoy mouthwatering meals from
                        the comfort of your home.
                    </p>

                    <button className="about-button">Order Now!</button>
                </div>
            </div>
        );
    }
}

export default About;
