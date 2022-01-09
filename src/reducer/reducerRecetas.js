const inicialState = {
    recetas:[{ autorizadas: {practica:'traumatologia', fecha:'13-02-2020'},
    pendientes: {practica:'oftalmologia', fecha:'30-12-2021'}}]
  };
  export default function reducerRecetas(state = inicialState, action) {
    switch (action.type) {
      case "GET_RECETAS":
        return {
          ...state,
          recetas: action.payload,
        };
      
  
      default:
        return state;
    }
  }