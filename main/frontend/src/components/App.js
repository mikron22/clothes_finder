// React
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

// Redux
import { Provider } from 'react-redux'
import Store from '../redux/store'

// Components
import Body from './main/Body'

const App = () => {
    return (
        <Provider store={Store}>
            <Fragment>
                <div className="container">
                    <Body />
                </div>
            </Fragment>
        </Provider>
    )
}


export default App

ReactDOM.render(<App />, document.getElementById('app'))