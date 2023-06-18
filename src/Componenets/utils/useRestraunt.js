import { useState, useEffect } from 'react';

const useRestraunt = (resId) => {
    const [restraunt, setrestraunt] = useState(null);

    useEffect(() => {
        getrestranutinfo();
    }, []);

    async function getrestranutinfo() {
        const data = await fetch(
            'https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=' +
                resId
        );
        const json = await data.json();
        console.log(json.data);
        setrestraunt(json.data);
    }
    return restraunt;
};

export default useRestraunt;
