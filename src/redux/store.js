import { legacy_createStore as createStore } from "redux";

// array of products
const initialState = [];

export const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            
            break;
    
        default:
            return state;
    }
}

const store = createStore(shoppingCartReducer);

export default store;