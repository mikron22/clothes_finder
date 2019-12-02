import { GET_CLOTHES, CLEAR_CLOTHES, REMOVE_CLOTH } from '../actions/types'

const initialState = {
    clothes: [],
    loading: true
}


export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CLOTHES:
            return {
                ...state,
                clothes: action.payload,
                loading: false
            }
        case CLEAR_CLOTHES:
            return {
                ...state,
                clothes: [],
                loading: true
            }
        case REMOVE_CLOTH:
            return {
                ...state,
                clothes: action.payload
            }
        default:
            return { ...state }
    }
}