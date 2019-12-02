import React from 'react'
import PropTypes from 'prop-types'


const ListItem = ({ cloth, onRemove }) => {
    return (
        <div className='card'>
            <a href={cloth.url} className='text-primary'>
                {cloth.url}
            </a>
            <small className='text-muted'>
                {cloth.price}
            </small>
            <img src={cloth.photo} alt={cloth.photo} style={{ padding: '10px' }}></img>
            <button className='btn btn-primary' onClick={() => onRemove(cloth)}>REMOVE</button>
        </div>
    )
}

ListItem.propTypes = {
    cloth: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
}

export default ListItem