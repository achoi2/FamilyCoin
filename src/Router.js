import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ViewTask from './Components/ViewTask';

const Router = () => {
    return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/:acNum" component={ViewTask} />
                    </Switch>
                </div>
            </HashRouter>
    );  
};

export default Router;
