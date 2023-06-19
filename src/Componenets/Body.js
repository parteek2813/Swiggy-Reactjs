import { useState, useEffect } from 'react';
import { restrauntList } from './Constants';
import { RestrauntCard } from './RestrauntCard';
import Header from './Header';
import Shimer from './Shimer';
import { Link } from 'react-router-dom';
import { filter } from './Helper';
import useOnline from './utils/useOnline';
import { useContext } from 'react';
import UserContext from './Context';
import { BodyContext } from './Context';

import '../body.css';

const Body = ({ user }) => {
    const [allRestraunt, setAllRestraunts] = useState([]);
    const [searchtext, setsearchtext] = useState('');
    const [filteredRestraunts, setfilteredRestraunts] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    const searchVisible = useContext(BodyContext);

    async function getRestaurants() {
        const data = await fetch(
            // 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.139117687032826&lng=76.70138239860535&page_type=DESKTOP_WEB_LISTING'
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING'
        );

        const json = await data.json();

        setAllRestraunts(json?.data?.cards[2]?.data?.data?.cards);
        // console.log(json?.data?.cards[2]?.data?.data?.cards);
        setfilteredRestraunts(json?.data?.cards[2]?.data?.data?.cards);
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
            {searchVisible ? (
                <div className="SearchContainer p-2">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for restaurants and food"
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
            ) : null}

            {/* carousal Part  */}
            <div class="style-500">
                <div class="style-501">
                    <div class="style-502">
                        <div className="style-503 flex justify-between ml-20 mr-20 mt-8">
                            <div class="style-504" subtype="topCarousel">
                                <a
                                    // href="/collections/56413?type=rcv2"
                                    class="style-505"
                                >
                                    <img
                                        width="260"
                                        height="260"
                                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t"
                                        class="style-506"
                                    />
                                </a>
                            </div>
                            <div class="style-507" subtype="topCarousel">
                                <a
                                    // href="/collections/56414?type=rcv2"
                                    class="style-508"
                                >
                                    <img
                                        width="260"
                                        height="260"
                                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/nhubtkw7dukg3ukcmpam"
                                        class="style-509"
                                    />
                                </a>
                            </div>
                            <div class="style-510" subtype="topCarousel">
                                <a
                                    // href="/collections/11740?type=rcv2"
                                    class="style-511"
                                >
                                    <img
                                        width="260"
                                        height="260"
                                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/oxe97jexxbnxqtbhg2zo"
                                        class="style-512"
                                    />
                                </a>
                            </div>
                            <div class="style-513" subtype="topCarousel">
                                <a
                                    // href="/collections/56421?type=rcv2"
                                    class="style-514"
                                >
                                    <img
                                        width="260"
                                        height="260"
                                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"
                                        class="style-515"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <button class="style-516">
                        <i class="style-517"></i>
                    </button>
                </div>
            </div>

            {/* Resaurant Part */}
            <div className="restaurants-container ml-8 mt-5">
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
