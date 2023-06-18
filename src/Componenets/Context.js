import React, { createContext } from 'react';

const UserContext = createContext({
    user: {
        name: 'Dummy Name'
    },
    email: {
        email: 'Dummy@gmail.com'
    }
});

export const BodyContext = React.createContext();

export default UserContext;
