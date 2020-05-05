import { call, put, takeEvery } from 'redux-saga/effects';
import { NAME } from 'library/store/todo/constants';
import { INITIAL_REQUEST } from 'library/store/todo/action-types';
import { addItems } from 'library/store/todo/actions';
import { requested } from 'library/utilities/request';
import { services } from 'library/store/todo/services';

export function* initialRequest() {

    try {

        const { getAll } = services;
        const response = yield call(requested, getAll);
        console.log(response.data);
        yield put(addItems(response.data));

    }
    catch (error) {

        console.error(`${NAME} Saga Error: initialRequest`);

    }

}

export function* watch() {

    try {

        yield takeEvery(INITIAL_REQUEST, initialRequest);

    }
    catch (error) {

        console.error(`${NAME} Saga Error`);

    }

}

export default watch;
