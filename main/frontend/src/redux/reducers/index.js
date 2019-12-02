import { combineReducers } from 'redux'
import clothes from './clothes'
import user from './user'

export default combineReducers({
    clothes,
    user
})