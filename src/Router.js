import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
const Router = () => {
    return (
        <HashRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </div>
        </HashRouter>
    );  
};

export default Router;
