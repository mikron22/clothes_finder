import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ListItem from './ListItem'

import { clearClothes, removeCloth, updateClothes } from '../../redux/actions/clothes'



const List = () => {
    const dispatch = useDispatch()
    const clothes = useSelector(state => state.clothes.clothes)
    const loading = useSelector(state => state.clothes.loading)
    const pageSize = useSelector(state => state.user.settings.page_size)
    const page = useSelector(state => state.user.view.page)

    const removeHandler = cloth => {
        removeCloth(dispatch, clothes, cloth)
    }
    let elements
    loading ? elements = <h4>Loading</h4> :
        elements = clothes.map(cloth => {
            return (
                <div className='col-4' key={cloth.id}>
                    <ListItem cloth={cloth} onRemove={removeHandler} />
                </div>
            )
        })


    return (
        <Fragment>
            <div className='row'>
                {elements}
            </div>
            <button
                className="btn btn-primary mr-5"
                onClick={() => clearClothes(dispatch)}
            >DELETE</button>
            <button
                className="btn btn-primary"
                onClick={() => updateClothes(dispatch, pageSize, page)}
            >UPDATE LIST</button>
        </Fragment>
    )
}


export default List
