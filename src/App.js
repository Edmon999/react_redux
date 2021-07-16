import { Component } from "react";
import MyForm from "./form.js/form";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Login from './Login/Login'
import Home  from "./Home/Home";
import User from './User/User' 
import PrivateRoute from "./Helper.js/PrivateRoute";
class App extends Component {
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
                <Login />   
              </Route>
              <Route exact path="/SignUp">
                <MyForm />
              </Route>
              <PrivateRoute exact path="/user">
                <User />
              </PrivateRoute>
            </Switch>
        </Router>
      </div>
        </>
    );
  }
}

export default App;
