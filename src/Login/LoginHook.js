import { useState} from "react";
import { Link, useHistory} from "react-router-dom";

import request from "../Helper.js/request";
import styles from "./Login.module.css"

export default function LoginHook() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const emailHandler = (e) => {
      setEmail(e.target.value)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }
  const checkUserInfo = (e) => {
    e.preventDefault();
    request('/users',{
      query: {
        email
      }
    })
    .then((user) => {
        if(user.length > 0 && user[0].password === password){
         localStorage.setItem('id',user[0].id)
          history.push('/userPage')
       }else{
         alert("email or password is incorrect")
       }
    })
  }
  return (
    <div className={styles.form}>
    <form onSubmit={(e) => checkUserInfo(e)}>
        <label>
            Email
            <input type="email" placeholder="email" value={email} onChange={(e) => emailHandler(e)}/>
        </label>
        <label>
            Password
            <input type="password" placeholder="password" value={password} onChange={(e) => passwordHandler(e)}/>
        </label>
        <button>
            Login
        </button>
    </form>
    <p>
    If you doesnt have account please   <Link to="/SignUp">Sign Up</Link> <br/>
    <Link to="/"> Go home page </Link>
  </p>
</div>
  )
}
