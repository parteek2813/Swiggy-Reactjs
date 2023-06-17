import React from "react";


class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userinfo: {
                name: "Dummy name",
                location: "Dummy location",
            }
        }
        console.log("Child Constuctor");
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/parteek2813")
            const json =await data.json();
            this.setState({
                userinfo: json,
            })
        console.log("Child componentDidMount")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    
    render(){
        
        const {name, location, avatar_url} = this.state.userinfo;
        console.log(" Child render");
        return (
            <> 
            <h1> This is a profile based componenet </h1>;

            <h3> Name isssss classs: {name} </h3>
            <h3> Name isssss classs: {location} </h3>
            <h3> Name isssss classs: {avatar_url} </h3>
            

           
            

    </>
        )
      
    }

}
export default Profile