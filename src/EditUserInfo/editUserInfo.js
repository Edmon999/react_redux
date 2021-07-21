import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router";

import request from "../Helper.js/request";
import { getUserInfo } from "../Store/action";

export default function EditUserInfo(){

  const {userInfo} = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const history = useHistory()

   const [inputField,setInputField] = useState({
     email: userInfo.email,
     password: userInfo.password 
   })
  const handleChange = (e) => {
      const {name,value} = e.target
      setInputField({
        ...inputField,
        [name]: value
      })
  };
  const editUserInfo = () => {
      const id = localStorage.getItem('id')
      const editUserInfo = {
        email: inputField.email || userInfo.email,
        password: inputField.password || userInfo.password,
        first_name: userInfo.first_name,
        last_name:  userInfo.last_name
      }
     request(`/users/${id}`,{
      method: "PUT",
      body:  editUserInfo
    })
    .then((response) => {
      console.log(response)
       dispatch(getUserInfo(response.id))
       history.push('/userPage')
    })
  }
     return (
      <div>
        <label>
          Name
          <input type="text" value={userInfo.first_name}  disabled/>
        </label>
        <label>
          Surname
          <input type="text" value={userInfo.last_name} disabled/>
        </label>
        <label>
          email
          <input
            type="text"
            defaultValue={inputField.email || userInfo.email}
            onChange={(e) => handleChange(e)}
            name="email"
          />
        </label>
        <label>
          password
          <input
            type="text"
            defaultValue={inputField.password || userInfo.password}
            onChange={(e) => handleChange(e)}
            name="password"
          />
        </label>
         <button onClick={(e) => editUserInfo(e)}>Edit Info</button>
      </div>
    );
}
