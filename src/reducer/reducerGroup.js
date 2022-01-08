const inicialState = {
    grupo: [],
  };
  export default function reducerGroup(state = inicialState, action) {
    switch (action.type) {
      case "GET_ALL_GROUP":
        return {
          ...state,
          grupo: action.payload,
        };
      
      default:
        return state;
    }
  }