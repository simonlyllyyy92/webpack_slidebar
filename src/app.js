import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import Homepage from "./component/homepage";

//root style
import './styles/rootStyles.scss'

function App() {
    return (
        <div>
            <Switch>
                {/* because we don't have exact props here so '/admin/dashboard' will navigate to homepage here */}
                <Route path="/admin" component={Homepage} /> 
                <Redirect from="/" to="/admin/dashboard" />
            </Switch>
        </div>
    )
}

export default App