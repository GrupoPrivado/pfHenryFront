import { GET_AFILIATE, GET_MEDICAL_TOKEN, NOT_AUTHENTICATED, GET_ERROR, DELETE_ROUTE } from "../actions/actionAuth";

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
      if(payload.activo){
        return {
          ...state,
          route: '',
          data: true,
          user: payload,
          error: ''
        }
      } else {
        return {
          ...state,
          route: 'afiliado/perfil',
          data: true,
          user: payload,
          error: ''
        }
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

    case DELETE_ROUTE: {
      return {
        ...state,
        route:''
      }
    }

    case GET_ERROR: 
      return {
        ...state,
        error: payload
      }

    case 'RESET_AUTH': 
    return {
      ...inicialState
    }
    

    default:
      return state;
  }
}
