import React from 'react'
import { useDispatch } from 'react-redux'

import { getUserSettings } from '../../redux/actions/user'

const Controls = () => {
    const dispatch = useDispatch()

    return (
        <div className="navbar sticky-top navbar-light bg-light">
            <h2 className="navbar-brand mr-auto">Cloth Finder</h2>
            <button className="btn btn-warning" onClick={() => getUserSettings(dispatch)}>Login</button>
        </div>
    )
}


export default Controls