const inicialState = {
    recetas:[]
  };
  export default function reducerRecetas(state = inicialState, action) {
    switch (action.type) {
      case "GET_RECETAS":
        return {
          ...state,
          recetas: action.payload,
        };
      
  
      default:
        return state;
    }
  }