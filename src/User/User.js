import { Component } from "react";
import { Card } from "react-bootstrap";
import styles from "./User.module.css";
class User extends Component {
  state = {
    name: this.props.name,
    userInfo: [],
  };
  componentDidMount(){
    fetch('http://localhost:3004/users')
    .then((res) => res.json())
    .then((data) => {
       this.setState({
         userInfo: data
       })
    })
  }
  renderUser = (card, index) => {
    return (
      <div key={index}>
        <div className={styles.card} key={index}>
        <div className={styles.name}> {card.name}</div>
          <img src="https://html5css.ru/bootstrap4/img_avatar3.png" />
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
        ;
      </>
    );
  }
}
export default User;
