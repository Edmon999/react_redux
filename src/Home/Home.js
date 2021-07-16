import { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
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
      </div>
    );
  }
}
export default Home;
