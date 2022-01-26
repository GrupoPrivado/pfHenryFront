const initialState = {
  professionalData: {},
  consultaMedicaData: {},
  clinicHistory: [],
};

export default function reducerProfessional(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "GET_CONSULTA_MEDICA":
      return { ...state, consultaMedicaData: payload };

    case "GET_PROFESSIONALDATA":
      return { ...state, professionalData: payload };

    case "GET_MEDICAL_HISTORY":
      return { ...state, clinicHistory: payload };

    case "RESET_DATA":
      return { ...state, clinicHistory: [], consultaMedicaData: {} };

    default:
      return state;
  }
}
