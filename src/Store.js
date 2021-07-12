import { Component } from "react";
import User from "./User/User";
import Login from "./Login/Login";
class Store extends Component{
    render(){
        return(
            <div>
                <User name="arm"/>
            </div>
        )
    }
}

export default Store