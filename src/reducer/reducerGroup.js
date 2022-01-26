const inicialState = {
    group: [],
    afiliate:[],
    isLoading: false
  };
  export default function reducerGroup(state = inicialState, action) {
    switch (action.type) {
      case "GET_GROUP":
        return {
          ...state,
          group: action.payload,
          isLoading: action.loading
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