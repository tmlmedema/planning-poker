import { all, call } from 'redux-saga/effects';
import todo from './todo';

export function* combinedSagas() {
    try {
        yield all([
            call(todo)
        ]);
    }
    catch (error) {
        console.log(error)
    }
};

export default combinedSagas;
