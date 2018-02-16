import {List,fromJS} from 'immutable';
// Action Types
export const FETCH_TYPES = 'dishes/types/FETCH_TYPES';
export const ADD_TYPES = 'dishes/types/ADD_TYPES';

// Reducer
export default function reducer(state = List(), action = {}) {
    switch (action.type) {
        case ADD_TYPES:
            return state.concat(fromJS(action.payload.data));
            break;
        default:
            return state;
            break;
    }
}

// Actions
export function fetchTypes() {
    return {type: FETCH_TYPES}
}
export function addTypes(types) {
    return {type: ADD_TYPES,payload:{data:types}}
}
