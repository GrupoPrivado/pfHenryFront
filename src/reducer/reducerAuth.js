import { GET_AFILIATE, GET_MEDICAL_TOKEN, NOT_AUTHENTICATED, GET_ERROR } from "../actions/actionAuth";

const inicialState = {
  user: {},
  medicalToken: [],
  data: false,
  route: '',
  error: '',
  isLoading: false
};

export default function reducerAuth(state = inicialState, {type, payload, loading}) {
  switch (type) {
    case GET_AFILIATE:
      return {
        ...state,
        route: '',
        data: true,
        user: payload,
        error: ''
      }
    case GET_MEDICAL_TOKEN:
      return {
        ...state,
        medicalToken: payload,
        isLoading: loading
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
    
    // case GET_RECIPES:
    //   return {
    //     ...state,
    //     recipes: payload
    //   }

    default:
      return state;
  }
}
