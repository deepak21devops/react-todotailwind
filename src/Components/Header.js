import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import AllTask from './AllTask'
import HeaderLinks from './HeaderLinks'




function Header() {
    return (

        <Router>
            <>
                <HeaderLinks />
                <div>
                    <Switch>
                        <Route path="/" exact><Home /></Route>
                        <Route path="/alltasks"><AllTask /></Route>
                    </Switch>
                </div>

            </>


        </Router>


    )
}

export default Header
