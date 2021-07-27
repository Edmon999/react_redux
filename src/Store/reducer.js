import { combineReducers } from "redux"

const defaultStateProfile = {
    userInfo: {}
}
const defaultStateUsers = {
    allUsers: [],
    posts: [],
    loading: false
}
const reducerProfile = (state = defaultStateProfile,action) => {
    switch(action.type){
        case "userInfo": {
            return {
                userInfo: action.payload
            }
        }
        default: return state
    }
}

const reducerUsers = (state = defaultStateUsers,action) => {
    switch(action.type){
        case "getUsers": {
            return {
                ...state,
                allUsers: [...action.payload]
            }
        }
        case "addPost": {
            return {
                ...state,
            }
        }
        case "getPosts": {
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        }
        case "deletePost": {
        const newPosts = state.posts.filter((post) => post.id !== action.id)
            return {
                ...state,
                posts: newPosts
            }
        }
        case "editPost": {
            const posts = [...state.posts]
            const editPostId = state.posts.findIndex((post) => post.id === action.payload.post.id);
            posts[editPostId] = action.payload.post
            return {
                ...state,
                posts,
            }
        }
        default: return state
    }
}

export default combineReducers({
    profile: reducerProfile,
    users: reducerUsers
})