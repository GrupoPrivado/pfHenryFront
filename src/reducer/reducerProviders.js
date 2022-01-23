import {
  GET_ALL_PROVINCES,
  GET_ALL_PHARMACIES,
} from "../actions/actionProviders";

const inicialState = {
  allProviders: [],
  providers: [],
  cities: [],
  provinces: [],
  specialties: [],
  pharmacies: [],
};
export default function reducerPrestadores(state = inicialState, action) {
  switch (action.type) {
    case "GET_ALL_PROVIDERS":
      return {
        ...state,
        providers: action.payload,
        allProviders: action.payload,
      };
    case GET_ALL_PHARMACIES:
      return {
        ...state,
        pharmacies: action.payload,
      };
    case GET_ALL_PROVINCES:
      return {
        ...state,
        provinces: action.payload,
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

      return {
        ...state,
        providers: action.payload,
      };
    case "RESET_CITIES":
      return {
        ...state,
        cities: []
      }
    // case "FILTER_BY_SPECIALTIES":
    // return {
    //   ...state,
    //   providers: action.payload,
    // };

    default:
      return state;
  }
}
