import { GET_USER_SETTING, SET_DEFAULT_SETTINGS } from '../actions/types'


const initialState = {
    settings: {},
    isLoggedIn: false,
    view: {
        page: 0
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DEFAULT_SETTINGS:
            return {
                ...state,
                settings: action.payload,
                isLoggedIn: false
            }
        case GET_USER_SETTING:
            return {
                ...state,
                settings: action.payload,
                isLoggedIn: true
            }
        default:
            return { ...state }
    }
}