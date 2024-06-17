import { legacy_createStore as createStore } from "redux";

// array of products
const initialState = [];

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      if (!state.find((item) => item.id === action.payload.id)) {
        return [
          ...state,
          {
            ...action.payload,
            count: 1,
          },
        ];
			} else {
				const tempArray = [...state];
				
				const index = tempArray.findIndex(item => item.id === action.payload.id);
				
				tempArray[index].count++;

				return tempArray
			};

    default:
      return state;
  }
};

const store = createStore(shoppingCartReducer);

export default store;
