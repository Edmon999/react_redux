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
export  function addPost(post) {
  return (dispatch) => {
    request('/posts', {
            method: "POST",
            body:  post
          })
          .then((post) => {
              dispatch({
                type: "addPost",
              })
           })
  }
}
export function getPosts(){
  return (dispatch) => {
    request('/posts')
    .then((posts) => {
      dispatch({
        type: 'getPosts',
        payload: posts
      })
    })
  }
}
export function deletePost(id) {
  return (dispatch) => {
    request(`/posts/${id}`,{
      method: "DELETE"
    }).then((res) => {
      dispatch({type: "deleteTask", id})
    })
  }
}
export function editPost(post) {
  return (dispatch) => {
    request(`/posts/${post.id}`,{
      method: "PUT",
      body: post
    }).then((post) => {
      dispatch({type: "editPost",payload: post})
    })
    .catch((err) => {
      console.log(err.message)
    })
  }
}
export function getUserInfo(id) {
  return (dispatch) => {
    request(`/users/${id}`)
    .then((userInfo) => {
      dispatch({
        type: "userInfo",
        payload: userInfo,
      });
    });
  };
}
