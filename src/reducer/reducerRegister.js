import { SET_FAMILIES, ADD_FAMILIAR, DELETE_FAMILIAR, FIND_FAMILIAR, EDIT_FAMILIAR, DELETE_ALL_DATA  } from "../actions/actionRegister";

const inicialState = {
    familiarData: [],
    member: {}
};

export default function reducerAuth(state = inicialState, {type, payload}) {
  switch (type) {
    case SET_FAMILIES:
        return {
            ...state,
            payload
        }

    case ADD_FAMILIAR:
        return {
            ...state,
            familiarData: [...state.familiarData, payload]
        }

    case DELETE_FAMILIAR:
        const newFamiliarData = state.familiarData.filter(f => f.idAf !== Number(payload))
        return {
            ...state,
            familiarData: newFamiliarData
        }
    case FIND_FAMILIAR:
        const member = state.familiarData.find(f => f.idAf === Number(payload))
        return {
            ...state,
            member: member
        }
    case EDIT_FAMILIAR:
        const index = state.familiarData.findIndex(f => f.idAf === Number(payload.idAf))
        state.familiarData[index] = payload
        return {
            ...state,
            member: [...state.familiarData]
        }
    case DELETE_ALL_DATA: 
        return {
            familiarData: [],
            member: {}
        }

    default:
      return state;
  }
}
