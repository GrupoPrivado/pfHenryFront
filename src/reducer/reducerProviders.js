const inicialState = {
  allProviders: [],
  cities: [],
  specialties: [],
};
export default function reducerPrestadores(state = inicialState, action) {
  switch (action.type) {
    case "GET_ALL_PROVIDERS":
      return {
        ...state,
        allProviders: action.payload,
      };
    case "GET_ALL_CITIES":
      return {
        ...state,
        cities: action.payload,
      };

    case "GET_ALL_SPECIALTIES":
      return {
        ...state,
        specialties: action.payload,
      };

    default:
      return state;
  }
}
