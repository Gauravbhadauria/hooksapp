import {ADD_USER, DELETE_USER} from '../actionTypes';

export const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case DELETE_USER:
      const deleteNewArray = state.filter((item, index) => {
        return index != action.payload;
      });
      return deleteNewArray;
    default:
      return state;
  }
};
