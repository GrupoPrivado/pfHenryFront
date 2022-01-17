import { GET_AFILIATE, GET_MEDICAL_TOKEN, NOT_AUTHENTICATED, GET_ERROR } from "../actions/actionAuth";

const inicialState = {
  user: {},
  medicalToken: [],
  data: false,
  route: '',
  error: ''
};

export default function reducerAuth(state = inicialState, {type, payload}) {
  switch (type) {
    case GET_AFILIATE:
      return {
        ...state,
        route: '',
        medicalToken: [],
        data: true,
        user: payload,
        error: ''
      }
    case GET_MEDICAL_TOKEN:
      return {
        ...state,
        medicalToken: payload
      }
    case NOT_AUTHENTICATED:
      return {
        user: {},
        medicalToken: [],
        data: false,
        route: 'login'
      }

    case GET_ERROR: 
      return {
        ...state,
        error: payload
      }

    default:
      return state;
  }
}
