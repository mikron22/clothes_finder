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

    const elements = clothes.map(cloth => <ListItem key={cloth.url} cloth={cloth} onRemove={removeHandler} />)

    return (
        <Fragment>
            {elements}
            <button onClick={() => clearClothes(dispatch)}>DELETE</button>
        </Fragment>
    )
}


export default List
