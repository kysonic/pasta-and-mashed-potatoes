import {List,fromJS} from 'immutable';
// Action Types
export const FETCH_EXTRAS = 'dishes/extras/FETCH_EXTRAS';
export const ADD_EXTRAS = 'dishes/extras/ADD_EXTRAS';

// Reducer
export default function reducer(state = List(), action = {}) {
    switch (action.type) {
        case ADD_EXTRAS:
            return state.concat(fromJS(action.payload.data));
            break;
        default:
            return state;
            break;
    }
}

// Actions
export function fetchExtras() {
    return {type: FETCH_EXTRAS}
}
export function addExtras(extras) {
    return {type: ADD_EXTRAS,payload:{data:extras}}
}
