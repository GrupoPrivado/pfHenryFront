const inicialState = {
  allProviders: [],
  providers:[],
  cities: [],
  specialties: [],
};
export default function reducerPrestadores(state = inicialState, action) {
  switch (action.type) {
    case "GET_ALL_PROVIDERS":
      return {
        ...state,
        providers:action.payload,
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
      case "FILTER_BY_CITY":
        const allProviders2 = state.allProviders
        const providerCities = action.payload === ''? allProviders2: allProviders2.filter(e => e.ciudadCP === action.payload )

      return {
        ...state,
        providers: providerCities,
      };
      case "FILTER_BY_SPECIALTIES":
      return {
        ...state,
        providers: action.payload,
      };

    default:
      return state;
  }
}
