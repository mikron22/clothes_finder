import React from 'react'
import PropTypes from 'prop-types'


const ListItem = ({ cloth, onRemove }) => {
    return (
        <div className='card'>
            <h4>
                {cloth.url}
            </h4>
            <small>
                {cloth.price}
            </small>
            <button onClick={() => onRemove(cloth)}>REMOVE</button>
        </div>
    )
}

ListItem.propTypes = {
    cloth: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
}

export default ListItem