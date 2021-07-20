import request from "../Helper.js/request";

export function getUsers() {
    return (dispatch) => {
        request(`/users`)
        .then((users) => {
             dispatch({
                type: "getUsers",
                payload: users
            })
        })
    }
 
}

export function getUserInfo(id) {
  return (dispatch) => {
    request(`/users/${id}`).then((userInfo) => {
      dispatch({
        type: "userInfo",
        payload: userInfo,
      });
    });
  };
}
