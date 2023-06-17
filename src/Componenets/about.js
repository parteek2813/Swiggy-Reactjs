import { Outlet } from "react-router-dom";
import { Profile } from "./Profile";
import Profilefun from "./ProfileClass"
import { Component , useContext } from "react";
import UserContext from "./Context";


class About extends Component{
        constructor(props) {
            super(props);
            
            console.log("Parent Constuctor")
        }

        componentDidMount(){
            
            
            //API call
            console.log("Parent - ComponeetdidMount")
        }
    render(){
        console.log("Parent-Render")
        return(
            <div>
                <h1>About us Page</h1>
                
                <UserContext.Consumer>
                 
                    {({user})=> <h4 className="font-bold text-2xl"> 
                    {user.name} - {user.email}
                    </h4> }
                </UserContext.Consumer>

                <p>
                This is the namaste react live course and i am ready to build something creative and new.!
                </p>
                <Profile name = {"parteek Kumar"} />
                <Profilefun name ={"Parteek Kumar"}/>
               
            </div>
        )
    }
}


export default About;
