import { useState, useEffect } from 'react';

// Defining a custom hook here in which if we pass the resId in the parameter it will return us the restaurant data
// in the json format

const useRestraunt = (resId) => {
    console.log(resId); // working
    const [restraunt, setrestraunt] = useState(null);

    // After loading up this page , useEffect will be call this fn
    useEffect(() => {
        getrestranutinfo();
    }, []);

    async function getrestranutinfo() {
        const data = await fetch(
            'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=' +
                resId
        );
        const json = await data.json();
        console.log(json.data);
        setrestraunt(json.data);
    }
    return restraunt;
};

export default useRestraunt;
