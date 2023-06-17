import { IMG_CDN_URL } from "./Constants"
import { useContext } from "react"
import UserContext from "./Context"

export const RestrauntCard = ({
  //these are props to the Body.js
    cloudinaryImageId,
    name,
    cuisines,
    totalRatingsString,
    user,
  }) => {

    // const {user} = useContext(UserContext);
    return(
      <div className="w-52 p-2 m-2 shadow-lg bg-pink-50">
      <img 
      src=
  
      {
          IMG_CDN_URL + cloudinaryImageId
  }
        />
  
      <h2 className="font-bold text-2xl"> {name} </h2>
  
      <h3 > {cuisines.join(", ")} </h3>
  
      <h4> {totalRatingsString} </h4>
      <h4 className="font-bold "> {user.name}
      </h4>
      
      </div>
      
  )
  }
  