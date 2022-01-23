import {GET_PROFESSIONAL} from "./../actions/professionalsActions"
const initialState = {
  professionalData: {},
  consultaMedicaData: {},
<<<<<<< HEAD
  clinicHistory:[]
=======
  profesionales:[]
>>>>>>> development
};

export default function reducerProfessional(state = initialState, {type, payload}) {
  switch (type) {
    case "GET_CONSULTA_MEDICA":
      return { ...state, consultaMedicaData: payload };

    case "GET_PROFESSIONALDATA":
<<<<<<< HEAD
      return { ...state, professionalData: action.payload };

      case "GET_MEDICAL_HISTORY":
      return { ...state, clinicHistory: action.payload };

=======
      return { ...state, professionalData: payload };
    
      case GET_PROFESSIONAL:
        return{
          ...state,
          profesionales: payload
        }
>>>>>>> development
    default:
      return state;
  }
}
