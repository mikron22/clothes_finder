import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getUserSettings } from '../../redux/actions/user'
import LoginForm from './LoginForm'

const Controls = () => {
    const dispatch = useDispatch()
    return (
        <div className="navbar sticky-top navbar-light bg-light">
            <Link to="/" className="mr-auto">
                <h2 className="navbar-brand">
                    Cloth Finder
                </h2>
            </Link>
            <div class="btn-group">
                <div className="btn-group dropleft">
                    <button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                        <LoginForm />
                    </div>
                </div>
                <button className="btn btn-warning mr-2" onClick={() => getUserSettings(dispatch)}>
                    Login
                </button>
            </div>
            <Link to="/settings">
                <button className="btn btn-secondary">Settings</button>
            </Link>
            <Link to="/login">
                <button className="btn btn-secondary">Login</button>
            </Link>
        </div>
    )
}


export default Controls