import React, { lazy, Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
const Home = lazy(() => import('../pages/home/home'));
const Details = lazy(() => import('../pages/details/details'));

const Routes = () => {
    return (
        <Suspense fallback='loading'>
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/details/:id' component={Details} />
            </Switch>
        </Router>
        </Suspense>
    )
}

export default Routes;