import { GET_CLOTHES, CLEAR_CLOTHES, REMOVE_CLOTH } from './types'
import axios from 'axios'


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

export const updateClothes = (dispatch, pageSize, page) => {
    console.log(page)
    console.log(pageSize)
    axios.get(`api/clothes/?limit=${pageSize}&offset=${page * pageSize}`)
        .then(res => {
            const data = res.data.results
            console.log(res)
            return data
        })
        .then(data => {
            dispatch({
                type: GET_CLOTHES,
                payload: data
            })
        }).catch(err => console.log(err))
}
