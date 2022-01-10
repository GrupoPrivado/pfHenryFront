import {api} from '../urlHostApi'

import axios from "axios";

export function getAllCities (){
    return async (dispatch) => {
        const {data} = await axios.get(`${api}/ciudades`);
        if(data.success){
            return dispatch({type: "GET_CIUDADES", payload: data.message})
        } else {
            return dispatch({type: "ERRORS", payload: data})

        }
    }
}

export function addCity (city){
    return async (dispatch) => {
        const response = await axios.post(`${api}/ciudades`,city);
        return response.data.message;
        // if(data.success){
        //     return dispatch({type: "GET_CIUDADES", payload: data.message})
        // } else {
        //     return dispatch({type: "ERRORS", payload: data})

        // }
    }
}

export const getCityData = (payload) => {
    return {
      type: "CITY_DATA",
      payload: payload,
    };
  };

  export function updateCity (city){
    return async (dispatch) => {
        const response = await axios.put(`${api}/ciudades`,city);
        console.log('response', response.data)
        return response.data.message;
        // if(data.success){
        //     return dispatch({type: "GET_CIUDADES", payload: data.message})
        // } else {
        //     return dispatch({type: "ERRORS", payload: data})

        // }
    }
}  

export function deleteCity(id) {
    return async (dispatch) => {
        console.log('id',id)
        const response = await axios.delete(`${api}/ciudades/${id}`);
        console.log('response', response.data)
        return response.data.message;
        // if(data.success){
        //     return dispatch({type: "GET_CIUDADES", payload: data.message})
        // } else {
        //     return dispatch({type: "ERRORS", payload: data})

        // }
    }
  }

    