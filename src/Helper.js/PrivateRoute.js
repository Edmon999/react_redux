import React from 'react'
import {Redirect,Route} from "react-router-dom"
 
const PrivateRoute = ({children: Component, ...props}) => {
    const length = localStorage.getItem("id");
      return <Route {...props}> 
        {length? [Component]: <Redirect to='/Login'/>}
    </Route>
 }
 export default PrivateRoute