// React
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

// Redux
import { Provider } from 'react-redux'
import Store from '../redux/store'

// Components
import List from './main/List'

class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <Fragment>
                    <List />
                </Fragment>
            </Provider>
        )
    }
}


export default App

ReactDOM.render(<App />, document.getElementById('app'))