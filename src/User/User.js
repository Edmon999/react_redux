import { Component } from "react";
import {Link} from "react-router-dom"
import styles from "./User.module.css";


class User extends Component {
  state = {
    name: "",
    userInfo: [],
  };
  componentDidMount(){
    const id = localStorage.getItem('id')
    fetch(`http://localhost:3004/users/${id}`)
    .then((res) => res.json())
    .then((user) => {
      this.setState({
        name: user.name
      })
    })
    fetch('http://localhost:3004/users')
    .then((res) => res.json())
    .then((data) => {
       this.setState({
         userInfo: data
       })
    })
  }
  handleClick = () => {
    localStorage.removeItem("id");
   }
  renderUser = (card, index) => {
    return (
      <div key={index}>
        <div className={styles.card} key={index}>
        <div className={styles.name}> {card.name}</div>
          <img src="https://html5css.ru/bootstrap4/img_avatar3.png" alt="user"/>
        </div>
      </div>
    );
  };
  render() {
    const {name} = this.state
    return (
      <>
        <h1> Welcome  {name}</h1>
        <div className={styles.flex}>
          {this.state.userInfo.map(this.renderUser)}
        </div>
        <button onClick={this.handleClick}>
          <Link to="/Login"> Log out</Link>
        </button>
        
      </>
    );
  }
}
export default User;
