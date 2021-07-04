import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import App from '../components/App';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' >
                <App />
            </Route>
            <Route path="*">
                <Redirect to='/' />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;
