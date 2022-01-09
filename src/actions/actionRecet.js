import axios from "axios";

export function getRecetas() {
    return async function (dispatch) {
      var json = await axios.get(
        ""
      );
  
      return dispatch({
        type: "GET_RECETAS",
        payload: json.data.message,
      });
    };
}