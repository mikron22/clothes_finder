import React from 'react'
import { useDispatch } from 'react-redux'

export default FormInput = () => {

    const dispatch = useDispatch()

    const FormInput = ({ action, name, ...rest }) => {
        return <Input onImput={action(dispatch, name)} {...rest} />
    }

    FormInput.propTypes = {
        action = PropTypes.func.isRequired,
    }

    return FormInput
}
