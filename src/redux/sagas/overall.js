import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
// Data
import typesData from '../../data/types.json';
import dishesData from '../../data/dishes.json';
import extrasData from '../../data/extras.json';
// Ducks
import {FETCH_TYPES, addTypes} from '../ducks/types';
import {FETCH_DISHES, addDishes} from '../ducks/dishes';
import {FETCH_EXTRAS, addExtras} from '../ducks/extras';
import {setTypesLoading,setDishesLoading,setExtrasLoading} from '../ducks/loading';

function* fetchTypesAsync() {
    yield put(setTypesLoading(true));
    // Simulate request pending
    yield delay(Math.random()*1000 + 500);
    yield put(addTypes(typesData));
    yield put(setTypesLoading(false));
}

function* fetchDishesAsync() {
    yield put(setDishesLoading(true));
    // Simulate request pending
    yield delay(Math.random()*1000 + 500);
    yield put(addDishes(dishesData));
    yield put(setDishesLoading(false));
}

function* fetchExtrasAsync() {
    yield put(setExtrasLoading(true));
    // Simulate request pending
    yield delay(Math.random()*100 + 200);
    yield put(addExtras(extrasData));
    yield put(setExtrasLoading(false));
}

export default function* watchDataRequests() {
    yield takeEvery(FETCH_TYPES, fetchTypesAsync);
    yield takeEvery(FETCH_DISHES, fetchDishesAsync);
    yield takeEvery(FETCH_EXTRAS, fetchExtrasAsync);
}




