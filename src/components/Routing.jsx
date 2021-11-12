import React from 'react';
import Home from "./Home";
import Info from "./Info";
import QA from "./Info";
import Todo from "./Todo";
import Wait from "./Wait";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/home" exact>
                    <Home />
                    </Route>
                    <Route path="/info">
                    <Info />
                    </Route>
                    <Route path="/qa" exact>
                    <QA />
                    </Route>
                    <Route path="/todo">
                    <Todo />
                    </Route>
                    <Route path="/wait">
                    <Wait />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routing