import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import PrivateRoute from "./Helper.js/PrivateRoute";

import Login from './Login/Login'
import Home  from "./Home/Home";
import User from './User/User' 
import UsersPage from "./PageForLogInUsers/UsersPage";
import MyForm from "./form.js/form";
import UserProfile from "./UserProfile/UserProfile";
import LoginHook from "./Login/LoginHook";
import AddPost from "./AddPost/AddPost";
import Post from "./Posts/Post";
function App(){
    return (
        <>
      <div>
        <Router>
            <Switch>
            <Route exact path="/">
                <Home />   
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
              <PrivateRoute exact path="/addPost">
                <AddPost />
              </PrivateRoute>
              <PrivateRoute exact path="/posts">
                <Post />
              </PrivateRoute>
            </Switch>
            <Route exact path="/Login">
            <LoginHook />
              </Route>
        </Router>
      </div>
        </>
    );
}

export default App;
