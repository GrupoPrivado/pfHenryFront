const inicialState = {
    facturas: [],
};
export default function getFacturas(state = inicialState, action) {
    switch (action.type) {
        case "GET_FACTURAS":
        return {
            ...state,
            facturas: action.payload,
        };
    default:
        return state;
    }
}