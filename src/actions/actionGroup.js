import axios from "axios";


export function getAllGroup() {
    return async function (dispatch) {
      var json = await axios.get(
        "https://arpymedical.herokuapp.com/api/"
      );
      return dispatch({
        type: "GET_ALL_GROUP",
        payload: json.data.message,
      });
    };
  }