import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'library/store';

// import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from '../aws-exports';
// Amplify.configure(awsconfig);

const pageMapping = {
    start: lazy(() => import('../components/scenes/start'))
};

const Application = (props) => {

    return (
        <Provider store={store}>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Router>
                    <Switch>
                        <Route exact path='/' component={pageMapping.start} />
                    </Switch>
                </Router>
            </Suspense>
        </Provider>
    );

};

export default Application;
