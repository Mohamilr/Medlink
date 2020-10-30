import React, { lazy, Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
const Home = lazy(() => import('../pages/home/home'));
const Details = lazy(() => import('../pages/details/details'));
const History = lazy(() => import('../pages/history/history'));
const About = lazy(() => import('../pages/about/about'));

const Routes = () => {
    return (
        <Suspense fallback='loading'>
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/details/:id' component={Details} />
                <Route exact path='/history' component={History} />
                <Route exact path='/about' component={About} />
            </Switch>
        </Router>
        </Suspense>
    )
}

export default Routes;