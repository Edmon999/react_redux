import { useState} from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import styles from "./form.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { checkPassword, checkEmail } from "../Helper.js/Validation";
import request from "../Helper.js/request";

function MyForm() {
  const history = useHistory()
  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [warnings, setWarnings] = useState({
    hideWarning: true,
    emailValid: true,
    checkName: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputField({
      ...inputField,
      [name]: value
    })
   };

 const  handleSubmit = (e) => {
    const {email,password,name} = inputField
    e.preventDefault();
    const validPas = checkPassword(password);
    const validEmail = checkEmail(email);
    if (
      validPas &&
      validEmail &&
       name !== ""
    ) {
      const userObj = {
        first_name: name,
        password,
        email,
      };
      
      setInputField({
        name: "",
        email: "",
        password: "",
      })
      setWarnings({
        hideWarning: true,
        emailValid: true,
      })
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
              history.push("/LoginHook");
          })
        }
      })
     }
      else {
      setWarnings({
        hideWarning: validPas,
        checkName: name,
        emailValid: validEmail
      })
     }
  };

  return (
    <div className={styles.form}>
      <h1>Sign Up</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            onChange={(e) => handleChange(e)}
            value={inputField.name}
            name="name"
          />
          <p className={warnings.checkName ? styles.ok : styles.warning}>
            name can't be blank
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => handleChange(e)}
            value={inputField.email}
            name="email"
          />
          <p className={warnings.emailValid ? styles.ok : styles.warning}>
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
            onChange={(e) => handleChange(e)}
            value={inputField.password}
            name="password"
          />
          <p className={warnings.hideWarning ? styles.ok : styles.warning}>
            min 8 letter password, with at least a symbol, upper and lower case
            letters and a number
          </p>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e)=>handleSubmit(e)}>
          Submit
        </Button>
      </Form>
      <div>
        If you have account, you can <Link to="/LoginHook">Sign in </Link> Now. Ara!{" "}
        <br />
        <Link to="/"> Go home page </Link>
      </div>
    </div>
  );
}

export default MyForm;
