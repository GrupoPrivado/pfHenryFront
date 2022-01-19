import { alertConstants } from '../actions/actionAlerts';
const inicialState = {
    type: '',
    message: '',
    error: '',
};

export function reducerAlerts(state = inicialState, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message,
        error: action.error,
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
        error: action.error
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}