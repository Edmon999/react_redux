import { Component } from "react";
import { Link ,withRouter} from 'react-router-dom'
 
import styles from "./Login.module.css"
import request  from "../Helper.js/request";
 
 class Login extends  Component{
    state = {
        email: "",
        password: "",
    }
   handleChange = (e) => {
       const {name,value} = e.target;
       this.setState({
           [name]: value,
       })
   }
   handleSubmit = (e) => {
       const {email,password} = this.state
       e.preventDefault();
      request(`/users`,{
       query: {
           email,
       }
      }).then((user) => {
        if(user.length > 0 && user[0].password === password){
            localStorage.setItem('id',user[0].id)
             this.props.history.push('/userPage')
        }else{
            alert("email or password is incorrect")
        }
    })
   }
    render(){
          return(
            <div className={styles.form}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input type="email" placeholder="email" value={this.state.email} name="email" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password
                        <input type="password" placeholder="password" value={this.state.password} name="password" onChange={this.handleChange}/>
                    </label>
                    <button onClick={this.handleClick}>
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
}
 

export default   (withRouter(Login))