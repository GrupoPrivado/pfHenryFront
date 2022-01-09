import { GET_AFILIATE } from "../actions/actionAuth";

const inicialState = {
  user: {},
  route: ''
};

export default function reducerAuth(state = inicialState, {type, payload}) {
  switch (type) {
    case GET_AFILIATE:
      return {
        ...state,
        route: '',
        user: payload
      }
    case 'NOT_AUTHENTICATED':
      return {
        user: {},
        route: 'login'
      }


    default:
      return state;
  }
}
