import { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";

import request from "../Helper.js/request";
import { getUserInfo } from "../Store/action";
class EditUserInfo extends Component {
   state = {
     email: this.props.userInfo.email || "",
     password: this.props.userInfo.password ||"" 
   }
    componentDidUpdate(prevProps){
        if(!prevProps.userInfo.email && this.props.userInfo.email){
        console.log(prevProps.userInfo.email, this.props.userInfo.email)
            this.setState({
                email: this.props.userInfo.email,
                password: this.props.userInfo.password
            })
        }
    }

  handleChange = (e) => {
      const {name,value} = e.target
      this.setState({
          [name]: value
      })
  };
  editUserInfo = () => {
      const id = localStorage.getItem('id')
      const editUserInfo = {
        email: this.state.email,
        password: this.state.password,
        first_name: this.props.userInfo.first_name,
        last_name: this.props.userInfo.last_name
      }
     request(`/users/${id}`,{
      method: "PUT",
      body:  editUserInfo
    })
    .then((response) => {
      console.log(response)
      this.props.getUserInfo(response)
      this.props.history.push('/userPage')
    })
  }
  render() {
    const { userInfo } = this.props;
    console.log(this.state)
     return (
      <div>
        <label>
          Name
          <input type="text" value={userInfo.first_name}  disabled/>
        </label>
        <label>
          Surname
          <input type="text" value={userInfo.last_name} disabled/>
        </label>
        <label>
          email
          <input
            type="text"
            value={this.state.email || ""}
            onChange={this.handleChange}
            name="email"
          />
        </label>
        <label>
          password
          <input
            type="text"
            value={this.state.password || ""}
            onChange={this.handleChange}
            name="password"
          />
        </label>
         <button onClick={this.editUserInfo}>Edit Info</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.profile.userInfo,
  };
};
const mapDispatchToProps = {
  getUserInfo,
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(EditUserInfo));
