import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'library/store';

// import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from '../aws-exports';
// Amplify.configure(awsconfig);

const pageMapping = {
    start: lazy( () => import('../components/pages/start') ),
    game: lazy( () => import('../components/pages/game') ),
    results: lazy( () => import('../components/pages/results') )
};

const Application = ( props ) => {

    const { start, game, results } = pageMapping;

    return (
        <Provider store={ store }>
            <Suspense fallback={ <h1>Loading...</h1> }>
                <Router>
                    <Switch>
                        <Route exact path='/' component={ start } />
                        <Route exact path='/:gameId' component={ game } />
                        <Route exact path='/:gameId/results' component={ results } />
                    </Switch>
                </Router>
            </Suspense>
        </Provider>
    );

};

export default Application;
