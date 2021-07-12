import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        home page
          <ul>
               <li>
                <Link to="/Login">LogIn</Link>
              </li>
              <li>
                <Link to="/SignUp">Sign Up</Link>
              </li>
              <li>
                <Link to="/user">Users</Link>
              </li>
          </ul>
        
        {/* <button>Login</button>
        <button>Sign up</button> */}
      </div>
    );
  }
}
export default Home;
