// React
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

// Redux
import { Provider } from 'react-redux'
import Store from '../redux/store'

// Components
import List from './main/List'

const App = () => {
    const names = ['spodnie', 'kurtka', 'dres']
    return (
        <Provider store={Store}>
            <Fragment>
                <div className="container">
                    <List names={names} />
                </div>
            </Fragment>
        </Provider>
    )
}


export default App

ReactDOM.render(<App />, document.getElementById('app'))