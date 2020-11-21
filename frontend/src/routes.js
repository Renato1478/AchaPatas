import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./components/pages/Home'));
const Pets = lazy(() => import('./components/pages/Pets'));
const Header = lazy(() => import('./components/Header'));

export default function Routes() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/pets" component={Pets}/>
                </Switch>
            </Suspense>
        </Router>
    )
}