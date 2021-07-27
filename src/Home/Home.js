import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Button from "@material-ui/core/Button";

function Home() {
  return (
    <>
      <div className={styles.divik}>
        <h1>Home Page</h1>
        <div>
          
          <Button variant="contained" color="primary">
            <Link to="/login">LogIn</Link>{" "}
          </Button>
          
          <Button variant="contained" color="secondary">
          <Link to="/SignUp">Sign Up</Link>
           </Button>
        </div>
      </div>
    </>
  );
}
export default Home;
