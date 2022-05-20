import { ActionTypes } from "../constants/action-types";

// class product {
  
//     id
//      number,
//     name
//      string,
//     count
//      number,
//     description
//      string,
//     imageUrl
//      string,
//     // size
//      object {
//     //   "width"
//      200,
//     //   "height"
//      200
//     // },
//     weight
//      string,
//     comments
//      string[],
  
// }

const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
