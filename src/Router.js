import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';
import CreateTask from './Components/CreateTask';
import CompletedTasks from './Components/CompletedTasks';

const Router = () => {
    return (
        <HashRouter>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/create" component={CreateTask} />
                    <Route exact path="/completed" component={CompletedTasks} />
                </Switch>
            </div>
        </HashRouter>
    );  
};

export default Router;
