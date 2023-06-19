import React, { Children, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Componenets/Header';
import Body from './Componenets/Body';
import Footer from './Componenets/Footer';
import { IMG_CDN_URL } from './Componenets/Constants';
import About from './Componenets/about';
import ErrorPage from './Componenets/error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './Componenets/Contacts';
import RestrauntMenu from './Componenets/RestrauntMenu';
import UserContext from './Componenets/Context';
import Profile from './Componenets/ProfileClass';
import Instamart from './Componenets/Instamart';
import { Provider } from 'react-redux';
import store from './Componenets/utils/store';
import Cart from './Componenets/Cart';
import { useContext } from 'react';
import { BodyContext } from './Componenets/Context';

const AppLayout = () => {
    //local state of App Layout

    const [user, setUser] = useState({
        name: 'Parteek Kumar'
    });

    const [email, setEmail] = useState({
        email: 'digital@gmail.com'
    });

    return (
        // <Provider store= {store}>

        <Provider store={store}>
            <React.Fragment>
                <UserContext.Provider
                    value={{
                        user: user,
                        email: email
                    }}
                >
                    <Header />
                    <Outlet />
                    {/* { outlet } */}
                    <Footer />
                </UserContext.Provider>
            </React.Fragment>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: (
                    <Body
                        user={{
                            name: 'Parteek Kumar',
                            Email: 'ujeefanclub@gmail.com'
                        }}
                    />
                )
            },
            {
                path: '/about',
                element: <About />,
                children: [
                    {
                        path: 'profile', //(Not use / before profile as it will consider this) => http://localhost:1234/profile /parentpath/{path}
                        element: <Profile />
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/Restraunt/:resId',
                element: <RestrauntMenu />
            },
            {
                path: '/instamart',
                element: <Instamart />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
