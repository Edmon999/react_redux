import { Component } from "react";
import {connect} from 'react-redux' 

import request from "../Helper.js/request";
import { getUserInfo } from "../Store/action";
import styles from './UserProfile.module.css'
import EditUserInfo from "../EditUserInfo/editUserInfo";

class UserProfile extends Component{
 
componentDidMount(){
    const id = localStorage.getItem('id')
     request(`/users/${id}`)
     .then((userInfo) => {
         console.log(userInfo)
         this.props.getUserInfo(userInfo)
     })
    
}
    render(){
        const {userInfo} = this.props
          return(
            <div className={styles.card}>
                <h1>{userInfo.first_name} {" "} {userInfo.last_name}</h1>
                <div>
                    <p>{userInfo.email}</p>
                    <p>{userInfo.password}</p>
                </div>
                 {
                    userInfo? <EditUserInfo />: <>Loading...</>
                }
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.profile.userInfo
    }
}
const mapDispatchToProps = {
    getUserInfo,
}
export default connect(mapStateToProps,mapDispatchToProps)(UserProfile)