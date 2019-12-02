import { GET_CLOTHES, CLEAR_CLOTHES, REMOVE_CLOTH } from './types'


export const clearClothes = dispatch => {
    dispatch({ type: CLEAR_CLOTHES })
}

export const removeCloth = (dispatch, clothes, cloth) => {
    const data = clothes.filter(element => element !== cloth)
    dispatch({
        type: REMOVE_CLOTH,
        payload: data
    })
}