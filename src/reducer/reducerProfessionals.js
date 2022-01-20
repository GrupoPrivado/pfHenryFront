const initialState = {
  professionalData: {},
  consultaMedicaData: {},
  clinicHistory:[]
};

export default function reducerProfessional(state = initialState, action) {
  switch (action.type) {
    
    case "GET_CONSULTA_MEDICA":
      return { ...state, consultaMedicaData: action.payload };

    case "GET_PROFESSIONALDATA":
      return { ...state, professionalData: action.payload };

      case "GET_MEDICAL_HISTORY":
      return { ...state, clinicHistory: action.payload };

    default:
      return state;
  }
}
