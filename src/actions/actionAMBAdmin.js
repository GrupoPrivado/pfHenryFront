import { api } from "../urlHostApi";

import { getItem } from "./actionAuth";
import { alertConstants } from "./actionAlerts";

import axios from "axios";

/************* Actions Para ABM Ciudades***********/

export function getAllCities(payload) {

  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${api}/ciudades/${payload}`);

      if (data.success) {
        return dispatch({
          type: "GET_ALL_CITIES",
          payload: data.message,
        });
      }
    } catch (error) {
      return console.log(error, "error en get all cities");
    }
  };
}

export function getAllProvinces() {
  return async function (dispatch) {
    const { data } = await axios.get(`${api}/provincias`);
    return dispatch({
      type: "GET_ALL_PROVINCES",
      payload: data.message,
    });
  };
}

/************* Fin Actions Para ABM Ciudades***********/

/************* Actions Para ABM Especialidades***********/

export function getAllSpecialities() {
  return async (dispatch) => {
    const { data } = await axios.get(`${api}/especialidades`);
    if (data.success) {
      return dispatch({ type: "GET_SPECIALITIES", payload: data.message });
    } else {
      return dispatch({ type: "ERRORS", payload: data });
    }
  };
}

export function addSpeciality(payload) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.post(
        `${api}/admin/addEspeciality`,
        payload,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );

      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Especialidad agregada",
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al agregar la especialidad",
        });
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export const getSpecialityData = (data) => {
  return {
    type: "SPECIALITY_DATA",
    payload: data,
  };
};

export function updateSpecialityAct(payload) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.put(
        `${api}/admin/updateEspeciality`,
        payload,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Especialidad Modificada",
        });
        return getAllSpecialities();
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al Moficiar la especialidad",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function deleteSpeciality(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.delete(
      `${api}/admin/deleteEspeciality/${payload}`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    return data;

    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

/************* FIN Actions Para ABM Especialidades***********/

/************* Actions Para ABM Afiliados***********/

export function getAllAffiliates() {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.get(`${api}/admin/allAffiliates`, {
      headers: {
        "x-access-token": token,
      },
    });
    if (data.success) {
      return dispatch({ type: "GET_AFFILIATES", payload: data.message });
    } else {
      return dispatch({ type: "ERRORS", payload: data });
    }
  };
}

export function addAffiliate(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.post(`${api}/admin/addAffiliate`, payload, {
      headers: {
        "x-access-token": token,
      },
    });

    return data;
    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

export const getAffiliateData = (payload) => {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.get(
      `${api}/admin/affiliateData?idAfilFam=${payload}`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    return dispatch({
      type: "AFFILIATE_DATA",
      payload: data.message,
    });

    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
};

export function updateAffiliateAct(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.put(`${api}/admin/updateAffiliate`, payload, {
      headers: {
        "x-access-token": token,
      },
    });

    return data;
    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})
    // }
  };
}

export function upDownAffiliateAct(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.put(`${api}/admin/upDownAffiliate`, payload, {
      headers: {
        "x-access-token": token,
      },
    });
    return data;

    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})
    // }
  };
}

export function getAllPlans() {
  return async (dispatch) => {
    const { data } = await axios.get(`${api}/planesMutual`);
    if (data.success) {
      return dispatch({ type: "GET_PLANS", payload: data.message });
    } else {
      return dispatch({ type: "ERRORS", payload: data });
    }
  };
}

/************* FIN Actions Para ABM Afiliados***********/

/************* Actions Para ABM Farmacias***********/

export function getAllPharmacies(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.get(
      `${api}/admin/farmacias?ciudadID=${payload.ciudadID}&provinciaID=${payload.provinciaID}`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    if (data.success) {
      return dispatch({ type: "GET_PHARMACIES", payload: data.message });
    } else {
      return dispatch({ type: "ERRORS", payload: data });
    }
  };
}

// export function getFilterPharmacy(payload) {
//   return async (dispatch) => {
//     const { data } = await axios.get(`${api}/farmaciasFilter?ciudadID=${payload}`);
//     if (data.success) {
//       return dispatch({ type: "GET_PHARMACIES", payload: data.message });
//     } else {
//       return dispatch({ type: "ERRORS", payload: data });
//     }
//   };
// }

export function addPharmacy(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.post(`${api}/admin/addPharmacy`, payload, {
      headers: {
        "x-access-token": token,
      },
    });
    return data;

    // const response = await axios.post(`${api}/admin/addPharmacy`, data);
    // return response.data.message;
    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

export const getPharmacyData = (payload) => {
  return {
    type: "PHARMACY_DATA",
    payload: payload,
  };
};

export function updatePharmacy(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.put(`${api}/admin/updatePharmacy`, payload, {
      headers: {
        "x-access-token": token,
      },
    });

    return data;

    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

export function deletePharmacy(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.delete(
      `${api}/admin/deletePharmacy/${payload}`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    return data;

    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

/************* Fin Actions Para ABM Farmacias***********/

/************* Actions Para ABM Planes***********/

export function getAllPlansData() {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.get(`${api}/admin/getAllPlansData`, {
        headers: {
          "x-access-token": token,
        },
      });
      if (data.success) {
        return dispatch({ type: "GET_ALL_PLANS_DATA", payload: data.message });
      } else {
        return dispatch({ type: "ERRORS", payload: data });
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function addPlan(payload) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.post(`${api}/admin/addPlan`, payload, {
        headers: {
          "x-access-token": token,
        },
      });

      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Plan Cargado",
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al agregar el plan",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export const getPlanData = (data) => {
  return {
    type: "PLAN_DATA",
    payload: data,
  };
};

export function updatePlan(payload) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.put(`${api}/admin/updatePlan`, payload, {
        headers: {
          "x-access-token": token,
        },
      });

      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Plan Modificado",
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al Moficiar el Plan",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function deletePlan(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.delete(`${api}/admin/deletePlan/${payload}`, {
      headers: {
        "x-access-token": token,
      },
    });
    return data;

    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

/************* FIN Actions Para ABM Planes***********/

/************* Actions Para ABM Profesionales***********/

export function getAllProfessionals(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.get(
      `${api}/admin/professionals?ciudadID=${payload.ciudadID}&provinciaID=${payload.provinciaID}`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    if (data.success) {
      return dispatch({ type: "GET_PROFESSIONALS", payload: data.message });
    } else {
      return dispatch({ type: "ERRORS", payload: data });
    }
  };
}

export function addProfessional(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.post(`${api}/admin/addProfessional`, payload, {
      headers: {
        "x-access-token": token,
      },
    });
    return data;

    // const response = await axios.post(`${api}/admin/addPharmacy`, data);
    // return response.data.message;
    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

export const getProfessionalData = (payload) => {
  return {
    type: "PROFESSIONAL_DATA",
    payload: payload,
  };
};

export function updateProfessional(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.put(
      `${api}/admin/updateProfessional`,
      payload,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    return data;

    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

export function upDownProfessionalAct(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.put(
      `${api}/admin/upDownProfessional`,
      payload,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
  
    return data;

    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})
    // }
  };
}

export function deleteProfessional(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.delete(
      `${api}/admin/deleteProfessional/${payload}`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    return data;

    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

/************* FIN Actions Para ABM Profesionales***********/

/************* Actions Para ABM Prescripciones***********/
//Ver si esta se saca xq la busqueda es por DNI y ya trae todos los datos
export function getPrescriptionById(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.get(`${api}/prescriptionByID?id=${payload}`, {
      headers: {
        "x-access-token": token,
      },
    });

    if (data.success) {
      return dispatch({ type: "GET_PRESCRPTION_ID", payload: data.message });
    } else {
      return dispatch({ type: "ERRORS", payload: data });
    }
  };
}

export function getPrescriptionsByDNI(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.get(
      `${api}/admin/prescriptionByDNI/${payload}`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    if (data.success) {
      return dispatch({ type: "GET_PRESCRPTIONS_DNI", payload: data.message });
    } else {
      return dispatch({ type: "ERRORS", payload: data });
    }
  };
}

export const getPrescriptionData = (payload) => {
  return {
    type: "PRESCRIPTION_DATA",
    payload: payload,
  };
};

export function updatePrescription(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.put(
      `${api}/admin/updatePrescription`,
      payload,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    return data;

    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

/************* FIN Actions Para ABM Prescripciones***********/

/************* Actions Para ABM Empleados***********/

export function getAllEmployees(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");

    const { data } = await axios.get(`${api}/admin/employees`, {
      headers: {
        "x-access-token": token,
      },
    });
    if (data.success) {
      return dispatch({ type: "GET_EMPLOYEES", payload: data.message });
    } else {
      return dispatch({ type: "ERRORS", payload: data });
    }
  };
}

export function addEmployee(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.post(`${api}/admin/addEmployee`, payload, {
      headers: {
        "x-access-token": token,
      },
    });
    return data;

    // const response = await axios.post(`${api}/admin/addPharmacy`, data);
    // return response.data.message;
    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

export const getEmployeeData = (payload) => {
  return {
    type: "EMPLOYEE_DATA",
    payload: payload,
  };
};

export function updateEmployee(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.put(`${api}/admin/updateEmployee`, payload, {
      headers: {
        "x-access-token": token,
      },
    });

    return data;

    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

export function upDownEmployeeAct(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.put(`${api}/admin/upDownEmployee`, payload, {
      headers: {
        "x-access-token": token,
      },
    });

    return data;

    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})
    // }
  };
}

export function deleteEmployee(payload) {
  return async (dispatch) => {
    const token = getItem("userToken");
    const { data } = await axios.delete(
      `${api}/admin/deleteEmployee/${payload}`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    return data;

    // if(data.success){
    //     return dispatch({type: "GET_CIUDADES", payload: data.message})
    // } else {
    //     return dispatch({type: "ERRORS", payload: data})

    // }
  };
}

/************* FIN Actions Para ABM Empleados***********/

/*************Actions Comunes Para ABM***********/
export const resetDataUpdate = (payload) => {
  return {
    type: "DATA_RESET",
    payload: payload,
  };
};

export const filterActiv = (payload) => {
  return {
    type: "FILTER_ACTIV",
    payload: payload,
  };
};

/*************FIN Actions Comunes Para ABM***********/
