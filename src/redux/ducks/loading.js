import {Map} from 'immutable';
// Action Types
export const SET_TYPES_LOADING = 'dishes/types/SET_TYPES_LOADING';
export const SET_DISHES_LOADING = 'dishes/types/SET_DISHES_LOADING';
export const SET_EXTRAS_LOADING = 'dishes/types/SET_EXTRAS_LOADING';
// Default state
const defaultState = Map({
    typesIsLoading: false,
    dishesIsLoading: false,
    extrasIsLoading: false
});
// Reducer
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case SET_TYPES_LOADING:
            return state.merge({typesIsLoading:action.payload.data});
            break;
        case SET_DISHES_LOADING:
            return state.merge({dishesIsLoading:action.payload.data});
            break;
        case SET_EXTRAS_LOADING:
            return state.merge({extrasIsLoading:action.payload.data});
            break;
        default:
            return state;
            break;
    }
}
// Creators
export function setTypesLoading(state) {
    return {type:SET_TYPES_LOADING,payload:{data:state}};
}
export function setDishesLoading(state) {
    return {type:SET_DISHES_LOADING,payload:{data:state}};
}
export function setExtrasLoading(state) {
    return {type:SET_EXTRAS_LOADING,payload:{data:state}};
}
