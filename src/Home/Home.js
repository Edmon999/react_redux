 import { Link } from "react-router-dom";
function Home () {
    return (
      <div>
        home page
          <ul>
               <li>
                <Link to="/loginHook">LogIn</Link>
              </li>
              <li>
                <Link to="/SignUp">Sign Up</Link>
              </li>
          </ul>
      </div>
    );
}
export default Home;
