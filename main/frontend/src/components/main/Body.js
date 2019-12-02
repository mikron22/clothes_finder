import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import List from './List'
import Controls from './Controls'
import { setDefaultSettings } from '../../redux/actions/user'


const Body = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    !isLoggedIn && (setDefaultSettings(dispatch))
    return (
        <Fragment>
            <Controls />
            <List />
        </Fragment>
    )
}


export default Body

