import styles from "./UsersPage.module.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function UsersPage() {
  return (
    <div className={styles.divik}>
      <Button variant="contained" color="secondary">
        <Link to="/user">See all the user profile</Link>
      </Button>
      <Button variant="contained">
        <Link to="/userProfile"> Go your page</Link>
      </Button>
      <Button variant="contained" color="primary">
        <Link to="/addPost"> Add Post</Link>
      </Button>
    </div>
  );
}
