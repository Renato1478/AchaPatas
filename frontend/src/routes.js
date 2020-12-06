import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// PAGES
const Home = lazy(() => import('./components/pages/Home'));
const Pets = lazy(() => import('./components/pages/Pets'));
const SignUp = lazy(() => import('./components/pages/Home'));
const Login = lazy(() => import('./components/pages/Pets'));

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));

export default function Routes() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/pets" component={Pets}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
                <Footer/>
            </Suspense>
        </Router>
    )
}