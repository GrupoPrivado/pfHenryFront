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
    case "POST_AFILIATE":
      return {
        ...state,
      };
    default:
      return state;
  }
}
