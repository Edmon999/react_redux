export function getUsers(usersData){
  return  {
      type: "getUsers",
      payload: usersData
  }
}

export function getUserInfo(data){
    return {
        type: "userInfo",
        payload: data
    }
}

// export function editInfo(editedData){
//     return {
//         type: "editInfo",
//         payload: editedData
//     }
// }