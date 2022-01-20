import {GET_RECIPES} from "./../actions/actionRecet"
const inicialState = {
  recipes: [],
  };
  export default function reducerRecetas(state = inicialState, {type, payload}) {
    switch (type) {
      case GET_RECIPES:
        return {
          ...state,
          recipes: payload,
        };
      
      default:
        return state;
    }
  }