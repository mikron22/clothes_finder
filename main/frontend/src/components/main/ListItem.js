import React from 'react'
import PropTypes from 'prop-types'


const ListItem = ({ cloth, onRemove }) => {
    return (
        <div className='card mb-5'>
            <p>{cloth.id}
                <a href={cloth.url} className='text-primary'>
                    {cloth.url}
                </a>
            </p>
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