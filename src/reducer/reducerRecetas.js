import {GET_RECIPES, GET_RECIPES_ID} from "./../actions/actionRecet"
const inicialState = {
  recipes: [],
  detail:[]
  };
  export default function reducerRecetas(state = inicialState, {type, payload}) {
    switch (type) {
      case GET_RECIPES:
        return {
          ...state,
          recipes: payload,
        };
      case GET_RECIPES_ID:
        return {
          ...state,
          detail: payload
        }
      
      default:
        return state;
    }
  }