import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ListItem from './ListItem'

import { clearClothes, removeCloth } from '../../redux/actions/clothes'



const List = () => {
    const clothes = useSelector(state => state.clothes.clothes)
    const dispatch = useDispatch()

    const removeHandler = cloth => {
        removeCloth(dispatch, clothes, cloth)
    }

    const elements = clothes.map(cloth => {
        return (
            <div className='col-4' key={cloth.url}>
                <ListItem cloth={cloth} onRemove={removeHandler} />
            </div>
        )
    })

    return (
        <Fragment>
            <div className='row'>
                {elements}
            </div>
            <button onClick={() => clearClothes(dispatch)}>DELETE</button>
        </Fragment>
    )
}


export default List
