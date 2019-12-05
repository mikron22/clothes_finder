import React from 'react'
import { useDispatch } from 'react-redux'

export default (WrappedComponent) => {

    const dispatch = useDispatch()

    const hocComponent = ({ action, name, props }) => {
        return <Input onImput={action(dispatch, name)} {...props} />
    }

    hocComponent.propTypes = {
        action = PropTypes.func.isRequired,
    }

    return hocComponent
}
