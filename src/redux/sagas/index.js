import {all} from 'redux-saga/effects';
import overallSaga from './overall';

// In case if we gonna use a few sagas lets define `all` here
export default function* rootSaga() {
    yield all([
        overallSaga()
    ]);
}