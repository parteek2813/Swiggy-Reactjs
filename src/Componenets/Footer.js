import { useContext } from "react";
import UserContext from "./Context.js";

const Footer = () =>{

    const {user} = useContext(UserContext);
    return(
        <>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div>
        <h4>This site is developed by:  {user.name} 😊 </h4>
        
        </div>
       
        </>
       
    )
}
 

export default Footer;