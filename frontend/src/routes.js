import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// PAGES
const Home = lazy(() => import('./pages/Home'));
const Pets = lazy(() => import('./pages/Pets'));
const SignUp = lazy(() => import('./pages/Home'));

export default function Routes() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/pets/:id" component={Pets}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </Suspense>
        </Router>
    )
}