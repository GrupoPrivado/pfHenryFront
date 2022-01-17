import { alertConstants } from '../actions/actionAlerts';
const inicialState = {
    type: '',
    message: ''
};

export function reducerAlerts(state = inicialState, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}