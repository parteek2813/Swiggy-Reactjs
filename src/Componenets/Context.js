import { createContext } from 'react';

const UserContext = createContext({
    user: {
        name: 'Dummy Name'
    },
    email: {
        email: 'Dummy@gmail.com'
    }
});

export default UserContext;
