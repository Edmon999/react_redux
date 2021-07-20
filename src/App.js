import { Component } from "react";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import PrivateRoute from "./Helper.js/PrivateRoute";

import Login from './Login/Login'
import Home  from "./Home/Home";
import User from './User/User' 
import UsersPage from "./PageForLogInUsers/UsersPage";
import MyForm from "./form.js/form";
import UserProfile from "./UserProfile/UserProfile";
import LoginHook from "./Login/LoginHook";

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
              <PrivateRoute exact path="/userPage">
                <UsersPage />
              </PrivateRoute>
              <PrivateRoute exact path="/userProfile">
                <UserProfile />
              </PrivateRoute>
            </Switch>
            <Route exact path="/LoginHook">
            <LoginHook />
              </Route>
        </Router>
      </div>
        </>
    );
  }
}

export default App;
