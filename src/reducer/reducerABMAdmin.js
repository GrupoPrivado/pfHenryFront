const initialState = {
  cities: [],
  provinces: [],
  allSpecialities: [],
  allAffiliates: [],
  allPlans: [],
  allPharmacies: [],
  pharmacies: [],
  allProfessionals: [],
  allPlansData: [],
  allEmployees:[],
  prescriptionDNI: [],
  affiliatePrescriptionData: [],
  updateData: {},
};

export default function reducerABMAdmin(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_PROVINCES":
      return {
        ...state,
        provinces: action.payload
      }
    case "GET_ALL_CITIES":
      return {
        ...state,
        cities: action.payload,
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
      console.log("reducer data affiliate", action.payload);
      return {
        ...state,
        updateData: action.payload,
      };

    case "GET_PLANS":
      return { ...state, allPlans: action.payload };

    case "GET_PHARMACIES":
      return { ...state, 
        allPharmacies: action.payload,
        pharmacies: action.payload };

    case "PHARMACY_DATA":
      let pharmData = state.allPharmacies.filter(
        (element) => element._id === action.payload
      );
      return {
        ...state,
        updateData: pharmData[0],
      };

    case "GET_ALL_PLANS_DATA":
      return { ...state, allPlansData: action.payload };

    case "PLAN_DATA":
      let planData = state.allPlansData.filter(
        (element) => element._id === action.payload
      );
      return {
        ...state,
        updateData: planData[0],
      };

    case "GET_PROFESSIONALS":
      return { ...state, allProfessionals: action.payload };

    case "PROFESSIONAL_DATA":
      let profData = state.allProfessionals.filter(
        (element) => element._id === action.payload
      );
      return {
        ...state,
        updateData: profData[0],
      };

    case "GET_PRESCRPTION_ID":
      return { ...state, updateData: action.payload };

    case "GET_PRESCRPTIONS_DNI":
      return {
        ...state,
        prescriptionDNI: action.payload.recetasResult,
        affiliatePrescriptionData: action.payload.affiliateResult,
      };

      case "GET_EMPLOYEES":
        return { ...state, allEmployees: action.payload };
  
      case "EMPLOYEE_DATA":
        let emploData = state.allEmployees.filter(
          (element) => element._id === action.payload
        );
        return {
          ...state,
          updateData: emploData[0],
        };

    case "DATA_RESET":
      return { ...state, updateData: action.payload };

    case "FILTER_ACTIV":
      let filterActiv = undefined;
      if(action.payload !== ""){
       filterActiv = action.payload ==='Si' ? state.pharmacies.filter(
        (element) => element.activo === true
      ): state.pharmacies.filter(
        (element) => element.activo !== true);
      } else { filterActiv = state.pharmacies}
       return { ...state, 
          allPharmacies: filterActiv };
    default:
      return state;
  }
}