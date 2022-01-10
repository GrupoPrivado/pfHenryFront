const inicialState = {
    group: [],
    afiliate:[],
  };
  export default function reducerGroup(state = inicialState, action) {
    switch (action.type) {
      case "GET_GROUP":
        return {
          ...state,
          group: action.payload,
        };
        case "GET_AFILIATE":
            return {
              ...state,
              afiliate: action.payload,
            };
      default:
        return state;
    }
  }