import { GET_CONSULTS } from "./../actions/actionConsultas"
const inicialState = {
    consultas: [],
};
export default function reducerHistorial(state = inicialState, { type, payload }) {
    switch (type) {
        case GET_CONSULTS:
            return {
                ...state,
                consultas: payload,
            };

        default:
            return state;
    }
}