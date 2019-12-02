import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import List from './List'
import { setDefaultSettings } from '../../redux/actions/user'


const Body = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    !isLoggedIn && (setDefaultSettings(dispatch))
    return (
        <Fragment>
            <List />
        </Fragment>
    )
}


export default Body

