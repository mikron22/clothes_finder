import { GET_USER_SETTING, SET_DEFAULT_SETTINGS } from './types'
import axios from 'axios'


export const getUserSettings = dispatch => {
    axios.get('api/settings/1/')
        .then(res => {
            const data = res.data
            console.log(res)
            return data
        })
        .then(data => {
            dispatch({
                type: GET_USER_SETTING,
                payload: data
            })
        }).catch(err => console.log(err))
}

export const setDefaultSettings = dispatch => {
    const settings = {
        page_size: 12
    }
    dispatch({
        type: SET_DEFAULT_SETTINGS,
        payload: settings
    })
}