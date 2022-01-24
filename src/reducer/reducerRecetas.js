import {GET_RECIPES, GET_RECIPES_ID} from "./../actions/actionRecet"
const inicialState = {
  recipes: [],
  detail:{},
  isLoading: false
  };
  export default function reducerRecetas(state = inicialState, {type, payload, loading}) {
    switch (type) {
      case GET_RECIPES:
        return {
          ...state,
          recipes: payload,
        };
      case GET_RECIPES_ID:
        if(payload){
          return {
            ...state,
            detail: payload,
            isLoading: loading
          }
        }
        return {
          ...state,
          isLoading: loading
        }

      
      default:
        return state;
    }
  }