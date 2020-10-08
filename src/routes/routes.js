import React, { lazy, Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
const Home = lazy(() => import('../components/home/home'));

const Routes = () => {
    return (
        <Suspense fallback='loading'>
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
        </Suspense>
    )
}

export default Routes;