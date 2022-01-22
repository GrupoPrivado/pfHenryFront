import { SET_FAMILIES, ADD_FAMILIAR, DELETE_FAMILIAR, EDIT_FAMILIAR  } from "../actions/actionRegister";
const testData = [
    {
        "idAf": 3693,
        "nombre": "Mono",
        "apellido": "dsasaddas",
        "DNI": "556587653",
        "fechaNacimiento": "2022-01-13",
        "telefono": "3545435455",
        "correoElectronico": "aamonoa@gmail.com",
        "ciudadID": "61e358951425ae77d29485d6",
        "provinciaID": "61e34717be8bff00f69c5895",
        "direccion": "rewtrgdfh",
        "planID": "",
        "parentesco": "hijo/a"
    },
    {
        "idAf": 3233,
        "nombre": "Albert",
        "apellido": "dsasaddas",
        "DNI": "356547653",
        "fechaNacimiento": "2022-01-13",
        "telefono": "3545435455",
        "correoElectronico": "albeert@gmail.com",
        "ciudadID": "61e358951425ae77d29485d6",
        "provinciaID": "61e34717be8bff00f69c5895",
        "direccion": "rewtrgdfh",
        "planID": "",
        "parentesco": "hijo/a"
    },
    {
        "idAf": 3003,
        "nombre": "Thomas",
        "apellido": "dsasaddas",
        "DNI": "126547653",
        "fechaNacimiento": "2022-01-13",
        "telefono": "3545435455",
        "correoElectronico": "thomas@gaa.com",
        "ciudadID": "61e358951425ae77d29485d6",
        "provinciaID": "61e34717be8bff00f69c5895",
        "direccion": "rewtrgdfh",
        "planID": "",
        "parentesco": "hijo/a"
    },
]
const inicialState = {
    titularData: {},
    familiarData: [],
    member:{}
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
            familiarData: [...state.familiarData, ...testData, payload]
        }

    case DELETE_FAMILIAR:
        const newFamiliarData = state.familiarData.filter(f => f.idAf !== Number(payload))
        return {
            ...state,
            familiarData: newFamiliarData
        }
    case EDIT_FAMILIAR:
        // const index = state.familiarData.findIndex(f => f.idAf === payload.id)
        // const data = state.familiarData
        // data[index] = payload

        const member = state.familiarData.find(f => f.idAf === Number(payload))

        return {
            ...state,
            member: member
        }

    default:
      return state;
  }
}
