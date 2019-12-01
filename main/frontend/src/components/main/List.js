import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ListItem from './ListItem'

class List extends Component {
    state = {
        names: ['aaa', 'bbb', 'ccc']
    }

    static propTypes = {}
    render() {
        const elements = this.state.names.map((n, index) => {
            return (
                <ListItem key={index} name={n} />
            )
        })
        return (
            <div className="container">
                <Fragment>
                    {elements}
                </Fragment>
            </div>
        )
    }
}


export default connect(null)(List)
