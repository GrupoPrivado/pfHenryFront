const inicialState = {
  group: [],
  isLoading: false,
};
export default function reducerGroup(state = inicialState, action) {
  switch (action.type) {
    case "GET_GROUP":
      return {
        ...state,
        group: action.payload,
        isLoading: action.loading,
      };
    case "RESET_GROUP":
      return {
        ...inicialState,
      };
    default:
      return state;
  }
}
