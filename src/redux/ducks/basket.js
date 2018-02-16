import {List,fromJS} from 'immutable';
// Action Types
export const ADD_BASKET_ITEMS = 'dishes/basket/ADD_BASKET_ITEMS';
export const REMOVE_BASKET_ITEM = 'dishes/basket/REMOVE_BASKET_ITEM';
export const CLEAR_BASKET = 'dishes/basket/CLEAR_BASKET';

// Reducer
export default function reducer(state = List(), action = {}) {
    switch (action.type) {
        case ADD_BASKET_ITEMS:
            // Remove duplicates by toSet -> toList
            return state.concat(fromJS(action.payload.data)).toSet().toList();
            break;
        case REMOVE_BASKET_ITEM:
            return state.delete(action.payload.index);
            break;
        case CLEAR_BASKET:
            return List();
            break;
        default:
            return state;
            break;
    }
}

// Actions
export function addBasketItems(input) {
    let data = List();
    if(!List.isList(input)) data = data.push(input);
    else data = input;
    return {type: ADD_BASKET_ITEMS,payload:{data}};
}
export function removeBasketItem(index) {
    return {type: REMOVE_BASKET_ITEM,payload:{index}}
}
export function clearBasket() {
    return {type: CLEAR_BASKET}
}