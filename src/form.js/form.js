import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

import styles from "./form.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { checkPassword,checkEmail} from "../Helper.js/Validation";
import request from '../Helper.js/request'

class MyForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      hideWarning: true,
      emailValid: true,
      checkName: true,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    const {email,password} = this.state
    e.preventDefault();
    const validPas = checkPassword(password);
    const validEmail = checkEmail(email);
    if (
      validPas &&
      validEmail &&
      this.state.name !== ""
    ) {
      const userObj = {
        name: this.state.name,
        password,
        email,
      };
      this.setState({
        name: "",
        email: "",
        password: "",
        hideWarning: true,
        emailValid: true,
      });
      request(`/users`,{
          query: {
              email,
            }})
      .then((data) => {
        if(data.length === 0){
          request('/users',{
            method:"POST",
            body: userObj,
          })
          .then((res) => {
            console.log(res)
            console.log(this.props)
             this.props.history.push("/Login");
          })
        }
      });
     } else {
      this.setState({
        hideWarning: validPas,
        checkName: this.state.name,
        emailValid: validEmail
      });
     }
  };
  
  render() {
    return (
      <div className={styles.form}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Name"
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
            />
            <p className={this.state.checkName ? styles.ok : styles.warning}>
              name can't be blank
            </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
            />
            <p className={this.state.emailValid ? styles.ok : styles.warning}>
              please fill in a valid e-mail address
            </p>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
            />
            <p className={this.state.hideWarning ? styles.ok : styles.warning}>
              min 8 letter password, with at least a symbol, upper and lower
              case letters and a number
            </p>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
        <div>
          If you have account, you can <Link to="/Login">Sign in </Link> Now.
          Ara! <br />
          <Link to="/"> Go home page </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(MyForm);
