import { Component } from "react";
import styles from "./UsersPage.module.css"
import {Link} from 'react-router-dom'
class UsersPage extends Component{
    render(){
        return(
            <div className={styles.buttonStyle}>
                 <button> <Link to="/user">See all the user profile</Link> </button>
                 <button>  <Link to="/userProfile"> Go your page</Link></button>
            </div>
        )
    }
}

export default UsersPage