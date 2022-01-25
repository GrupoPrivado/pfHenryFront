import axios from "axios";
import { api } from '../urlHostApi'
import { getItem } from "./actionAuth";
export const GET_RECIPES = "GET_RECIPES"
export const GET_RECIPES_ID = "GET_RECIPES_ID"

export function getRecetas(payload) {
    return async function (dispatch) {
        const token = getItem("userToken");
        try {
            const { data } = await axios.get(`${api}/recetas`, {
                headers: {
                    'x-access-token': token
                }
            });
            if (data.success) {
                return dispatch({ type: GET_RECIPES, payload: data.message })
            } else {
                return { error: true }
            }
        } catch (error) {
            console.error(error)
            return { error: error.message }
        }
    };
}

export function getRecetaDetail(id){
    console.log(id, 'id en action')
    return async function(dispatch){
        const token = getItem("userToken");
        try {
            dispatch({type: GET_RECIPES_ID, payload: {}, loading: true })
            const { data } = await axios.get(`${api}/recetas/${id}`, {
                headers: {
                    'x-access-token': token
                }
            });
            if (data.success) {
                return dispatch({ type: GET_RECIPES_ID, payload: data.message, loading: false })
            } else {
                return { type: GET_RECIPES_ID, payload: {}, loading: false }
            }
        } catch (error) {
            console.error(error)
            return { error: error.message }
        }
    }
}
