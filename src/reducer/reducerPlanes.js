const inicialState = {
  planes: [],
  
};
export default function getPlanes(state = inicialState, action) {
  switch (action.type) {
    case "GET_PLANES":
      return {
        ...state,
        planes: action.payload,
      };
      case "GET_PLANES_VIEW":
        let plan = state.planes.filter( e=> e._id === action.payload)
        
      return {

        ...state,
        viewPlan: plan,
      };
    case "POST_AFILIATE":
      return {
        ...state,
      };
    default:
      return state;
  }
}
