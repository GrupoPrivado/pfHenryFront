const initialState = {
  allCities: [],
  cityData: {}
};

export default function reducerABMAdmin(state = initialState, action) {
  switch (action.type) {
    case "GET_CIUDADES":
      return { ...state, allCities: action.payload };
      case "CITY_DATA":
        let citData = state.allCities.filter(
          (element) => element.CP === parseInt(action.payload)
        );
        return {
          ...state,
          cityData: citData[0],
        };
    default:
      return state;
  }
}
