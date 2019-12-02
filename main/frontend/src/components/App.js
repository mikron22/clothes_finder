// React
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import Store from '../redux/store'

// Components
import Body from './main/Body'
import Controls from './main/Controls'
import Settings from './main/Settings'
import UserRoute from './other/UserRoute'
import LoginForm from './main/LoginForm'

const App = () => {
    return (
        <Provider store={Store}>
            <Router>
                <Fragment>
                    <div className="container">
                        <Controls />
                        <Switch>
                            <Route exact path="/">
                                <Body />
                            </Route>
                            <Route exact path="/login">
                                <LoginForm />
                            </Route>
                            <UserRoute path="/settings">
                                <Settings />
                            </UserRoute>
                            <Route path="*">
                                <h1>Wrong path</h1>
                            </Route>
                        </Switch>
                    </div>
                </Fragment>
            </Router >
        </Provider >
    )
}


export default App

ReactDOM.render(<App />, document.getElementById('app'))