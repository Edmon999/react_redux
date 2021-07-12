import { Component } from "react";
import MyForm from "./form.js/form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login/Login'
import Home  from "./Home/Home";
import User from './User/User' 
import Store from './Store'
class App extends Component {
  state = {
    name: ""
  }
  getUserName = (name) => {
     this.setState({
       name,
     })
  }
  render() {
    return (
        <>
      <div>
        <Router>
            <Switch>
            <Route exact path="/">
                <Home />   
              </Route>
              <Route exact path="/Login">
                <Login userName={this.getUserName}/>   
              </Route>
              <Route exact path="/SignUp">
                <MyForm />
              </Route>
              <Route exact path="/user">
                <User name={this.state.name}/>
              </Route>
            </Switch>
        </Router>
      </div>
      {/* <Store /> */}
       </>
    );
  }
}

export default App;
