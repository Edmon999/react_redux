import { Component } from "react";
import {Link} from "react-router-dom"
import { connect } from "react-redux";

import styles from "./User.module.css";

import {getUsers} from '../Store//action'
 class User extends Component {
  state = {
    name: "",
   };
  componentDidMount(){
    const id = localStorage.getItem('id')
    fetch(`http://localhost:3004/users/${id}`)
    .then((res) => res.json())
    .then((user) => {
      this.setState({
        name: user.first_name
      })
    })
    // fetch('http://localhost:3004/users')
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data)
    //    this.props.getUsers(data)
    // })
    this.props.getUsers()
  }
  handleClick = () => {
    localStorage.removeItem("id");
   }
  renderUser = (card, index) => {
    return (
      <div key={index}>
        <div className={styles.card} key={index}>
        <div className={styles.name}> {card.first_name}</div>
          <img src="https://html5css.ru/bootstrap4/img_avatar3.png" alt="user"/>
        </div>
      </div>
    );
  };
  render() {
     const {name} = this.state
    const {userInfo} = this.props
    console.log(userInfo)
     return (
      <>
        <h1> Welcome  {name}</h1>
        <div className={styles.flex}>
          {userInfo.map(this.renderUser)}
        </div>
        <button onClick={this.handleClick}>
          <Link to="/Login"> Log out</Link>
        </button>
        
      </>
    );
  }
}

const mapDispatchToProps  = {
  getUsers,
}
const mapStateToProps = (state) => {
  return {
    userInfo: state.users.allUsers
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(User);
