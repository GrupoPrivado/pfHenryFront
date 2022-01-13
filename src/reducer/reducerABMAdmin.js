const initialState = {
  allCities: [],
  allSpecialities: [],
  allAffiliates: [],
  allPlans: [],
  allPharmacies: [],
  updateData: {},
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
        updateData: citData[0],
      };

    case "GET_SPECIALITIES":
      return { ...state, allSpecialities: action.payload };

    case "SPECIALITY_DATA":
      let speData = state.allSpecialities.filter(
        (element) => element._id === action.payload
      );
      return {
        ...state,
        updateData: speData[0],
      };

    case "GET_AFFILIATES":
      return { ...state, allAffiliates: action.payload };

    case "AFFILIATE_DATA":
      console.log("affiliate_data", action.payload);
      return {
        ...state,
        updateData: action.payload,
      };

    case "GET_PLANS":
      return { ...state, allPlans: action.payload };

    case "GET_PHARMACIES":
      return { ...state, allPharmacies: action.payload };

    case "PHARMACY_DATA":
      let pharmData = state.allPharmacies.filter(
        (element) => element._id === action.payload
      );
      return {
        ...state,
        updateData: pharmData[0],
      };

    case "DATA_RESET":
      return { ...state, updateData: {} };

    default:
      return state;
  }
}
