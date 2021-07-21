import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./User.module.css";

import { getUsers } from "../Store//action";

export default function User() {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.users);
  const [name, setName] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("id");
    fetch(`http://localhost:3004/users/${id}`)
      .then((res) => res.json())
      .then((user) => {
        setName(user.first_name)
      });
      dispatch(getUsers())
   }, []);

  const handleClick = () => {
    localStorage.removeItem("id");
  };

  const renderUser = (card, index) => {
    return (
      <div key={index}>
        <div className={styles.card} key={index}>
          <div className={styles.name}> {card.first_name}</div>
          <img
            src="https://html5css.ru/bootstrap4/img_avatar3.png"
            alt="user"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <h1> Welcome {name}</h1>
      <div className={styles.flex}>{allUsers.map(renderUser)}</div>
      <button onClick={handleClick}>
        <Link to="/Login"> Log out</Link>
      </button>
    </>
  );
}
