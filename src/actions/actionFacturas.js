import axios from "axios";
import { getItem } from "./actionAuth";
import { api } from "../urlHostApi";

export function getFacturas() {
    return async function (dispatch) {
    
        const {data} = await axios.get(
            `${api}/facturas`,
            {
                headers: {
                "x-access-token": getItem("userToken"),
                },
            }
        );
    
        return dispatch({
            type: "GET_FACTURAS",
            payload: data.message,
        });
    
    };
}