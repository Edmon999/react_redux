import { Component } from "react";
import styles from "./form.module.css";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
    e.preventDefault();
    if (!this.checkPassword(this.state.password)) {
        this.setState({
            hideWarning: false,
        })
    }else{
        this.setState({
            hideWarning: true,
        })
    } 
    if(!this.checkEmail(this.state.email)){
        this.setState({
            emailValid: false,
        })
    }else{
        this.setState({
            emailValid: true,
        })
    }
    if(this.state.name === ""){
        this.setState({
            checkName: false
        })
    }else{
        this.setState({
            checkName: true,
        })
    }
     if(this.checkPassword(this.state.password) && this.checkEmail(this.state.email) && this.state.name !== ""){
       this.setState({
        name: "",
        email: "",
        password: "",
        hideWarning: true,
        emailValid: true,
      });
      console.log(this.state);
    }
  };
  checkEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
  }
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
            <p className={this.state.checkName  ? styles.ok : styles.warning}>
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
      </div>
    );
  }
}

export default MyForm;
