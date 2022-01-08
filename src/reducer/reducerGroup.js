const inicialState = {
    grupo: [],
    afiliado :[],
  };
  export default function reducerGroup(state = inicialState, action) {
    switch (action.type) {
      case "GET_GROUP":
        return {
          ...state,
          grupo: action.payload,
        };
        case "GET_AFILIATE":
            return {
              ...state,
              afiliado: action.payload,
            };
      default:
        return state;
    }
  }