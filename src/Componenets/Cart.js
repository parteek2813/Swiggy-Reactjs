import { useSelector } from "react-redux";
// import {RestrauntCard} from "./RestrauntCard"


const Cart = () =>{

    const store = useSelector((store) => store.cart.items);

    // const store = useSelector((store) => store);

    //Useselector is used for subscribing to the store.
    // store.cart.items means it is subscribing to the (items present in cart in the store.)

    return (
    <div>
        <h1 className="font-bold text-3xl"> Cart Items - {store.length} </h1>
    </div>
    )

}

export default Cart;