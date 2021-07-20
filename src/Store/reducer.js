import { combineReducers } from "redux"

const defaultStateProfile = {
    userInfo: {}
}
const defaultStateUsers = {
    allUsers: []
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
        default: return state
    }
}

export default combineReducers({
    profile: reducerProfile,
    users: reducerUsers
})