import { GET_AFILIATE, GET_MEDICAL_TOKEN, NOT_AUTHENTICATED } from "../actions/actionAuth";

const inicialState = {
  user: {},
  medicalToken: [],
  route: ''
};

export default function reducerAuth(state = inicialState, {type, payload}) {
  switch (type) {
    case GET_AFILIATE:
      return {
        ...state,
        route: '',
        medicalToken: [],
        user: payload
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
        route: 'login'
      }


    default:
      return state;
  }
}
