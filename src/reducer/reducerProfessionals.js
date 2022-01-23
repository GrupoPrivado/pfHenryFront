import {GET_PROFESSIONAL} from "./../actions/professionalsActions"
const initialState = {
  professionalData: {},
  consultaMedicaData: {},
  profesionales:[]
};

export default function reducerProfessional(state = initialState, {type, payload}) {
  switch (type) {
    case "GET_CONSULTA_MEDICA":
      return { ...state, consultaMedicaData: payload };

    case "GET_PROFESSIONALDATA":
      return { ...state, professionalData: payload };
    
      case GET_PROFESSIONAL:
        return{
          ...state,
          profesionales: payload
        }
    default:
      return state;
  }
}
