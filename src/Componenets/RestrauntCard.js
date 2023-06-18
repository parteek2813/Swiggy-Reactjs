import { IMG_CDN_URL } from './Constants';
import { useContext } from 'react';
import UserContext from './Context';
import '../body.css';

export const RestrauntCard = ({
    //these are props to the Body.js
    cloudinaryImageId,
    name,
    cuisines,
    totalRatingsString,
    user
}) => {
    return (
        <div className="w-52 p-2 m-2 shadow-lg bg-pink-50 ">
            <div className="card-container">
                <img src={IMG_CDN_URL + cloudinaryImageId} />
                <h2 className="font-bold text-2xl"> {name} </h2>

                <h3 className="text-sm"> {cuisines?.join(', ')} </h3>

                <h4 className="text-xs"> {totalRatingsString} </h4>
            </div>
        </div>
    );
};
