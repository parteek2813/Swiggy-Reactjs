import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from './Constants';
import Shimer from './Shimer';
import useRestraunt from './utils/useRestraunt';
import { addItem } from './utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestrauntMenu = () => {
    const { resId } = useParams();

    const dispatch = useDispatch();

    const restraunt = useRestraunt(resId); // it is returning json data

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    };

    //grapes are passed as the action in the CartSlice.!

    //dispatch an action(additem)  and pass the payload/data

    // provider, useselector, usedispatch are something part of react-redux.!

    return !restraunt ? (
        <Shimer />
    ) : (
        <>
            <div className="flex">
                <div>
                    <h1>Restraunt id: {resId} </h1>
                    <h2>
                        Restraunt Name: {restraunt.cards[0].card.card.info.name}
                    </h2>

                    <img
                        src={
                            IMG_CDN_URL +
                            restraunt.cards[0].card.card.info.cloudinaryImageId
                        }
                        alt="Menu Image"
                    />
                    <h3>{restraunt.cards[0].card.card.info.areaName}</h3>
                    <h3>{restraunt.cards[0].card.card.info.city}</h3>
                    <h3>{restraunt.cards[0].card.card.info.avgRating}</h3>
                    <h3>{restraunt.cards[0].card.card.info.costForTwo}</h3>
                </div>

                {/* <div>
                <button className="p-2 m-2 bg-green-100" onClick={()=> handleAdditem()}>Add Item</button>
            </div> */}

                <div className="p-5">
                    <h1>Menu</h1>
                    {/* <ul>
                        {Object.values(restraunt?.menu?.items).map((item) => (
                            <li key={item.id}>
                                {item.name}-{' '}
                                <button
                                    className="p-2 m-2 bg-green-50"
                                    onClick={() => addFoodItem()}
                                >
                                    Add
                                </button>
                            </li>
                        ))}
                    </ul> */}
                </div>
            </div>
        </>
    );
};

export default RestrauntMenu;
