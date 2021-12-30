import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [{
        id: 1,
        title: Chandra,
        category: developer,
    }]
}

export const productReducer = (state, {action: type, payload}) => {
        switch (type) {
            case ActionTypes.SET_PRODUCTS:
                return state
            default:
                break;
        }
}