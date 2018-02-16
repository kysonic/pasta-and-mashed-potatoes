import {List,fromJS} from 'immutable';
// Action Types
export const FETCH_DISHES = 'dishes/dishes/FETCH_DISHES';
export const ADD_DISHES = 'dishes/dishes/ADD_DISHES';

// Reducer
export default function reducer(state = List(), action = {}) {
    switch (action.type) {
        case ADD_DISHES:
            return state.concat(fromJS(action.payload.data));
            break;
        default:
            return state;
            break;
    }
}

// Actions
export function fetchDishes() {
    return {type: FETCH_DISHES}
}
export function addDishes(dishes) {
    return {type: ADD_DISHES,payload:{data:dishes}}
}