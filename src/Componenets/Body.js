import { useState, useEffect } from 'react';
import { restrauntList } from './Constants';
import { RestrauntCard } from './RestrauntCard';
import Shimer from './Shimer';
import { Link } from 'react-router-dom';
import { filter } from './Helper';
import useOnline from './utils/useOnline';
import { useContext } from 'react';
import UserContext from './Context';

import '../body.css'; // Import the CSS file

const Body = ({ user }) => {
    const [allRestraunt, setAllRestraunts] = useState([]);
    const [searchtext, setsearchtext] = useState('');
    const [filteredRestraunts, setfilteredRestraunts] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.139117687032826&lng=76.70138239860535&page_type=DESKTOP_WEB_LISTING'
        );

        const json = await data.json();

        setAllRestraunts(json?.data?.cards[0]?.data?.data?.cards);
        setfilteredRestraunts(json?.data?.cards[0]?.data?.data?.cards);
    }

    const isOnline = useOnline();

    if (!isOnline) {
        return (
            <h1>
                Offline, Please check your internet Connection and try Again.
            </h1>
        );
    }

    // not render component (early return)
    if (!allRestraunt) return null;

    // if(filteredRestraunts == 0) return <h1> No restraunts match your query!! </h1>

    return allRestraunt.length === 0 ? (
        <Shimer />
    ) : (
        <>
            <div className="SearchContainer">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchtext}
                    onChange={(e) => {
                        setsearchtext(e.target.value);
                    }}
                />

                <button
                    className="search-button"
                    onClick={() => {
                        const data = filter(searchtext, allRestraunt);
                        setfilteredRestraunts(data);
                    }}
                >
                    Search
                </button>
            </div>

            <div className="restaurants-container">
                {/* <RestrauntCard restraunt = {restrauntList[0]}/>
          <RestrauntCard restraunt = {restrauntList[1]}/>
          <RestrauntCard restraunt = {restrauntList[2]}/>
          <RestrauntCard restraunt = {restrauntList[3]}/>
          <RestrauntCard restraunt = {restrauntList[4]}/>
          <RestrauntCard restraunt = {restrauntList[5]}/> */}

                {filteredRestraunts.map((restaurant) => {
                    return (
                        <Link
                            to={'/Restraunt/' + restaurant.data.id}
                            key={restaurant.data.id}
                        >
                            <RestrauntCard {...restaurant.data} user={user} />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Body;
