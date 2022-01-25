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
      
      // else {
      //   return dispatch({ type: "ERRORS", payload: data });
      // }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function getAllProvinces() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${api}/provincias`);

      if (data.success) {
        return dispatch({
          type: "GET_ALL_PROVINCES",
          payload: data.message,
        });
      } else {
        return dispatch({ type: "ERRORS", payload: data });
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

/************* Fin Actions Para ABM Ciudades***********/

/************* Actions Para ABM Especialidades***********/

export function getAllSpecialities(skip, limit) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${api}/especialidades?skip=${skip}&limit=${limit}`
      );
      if (data.success) {
        return dispatch({
          type: "GET_SPECIALITIES",
          payload: data.message,
          limitPaged: data.limitPaged,
        });
      } else {
        return dispatch({ type: "ERRORS", payload: data });
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
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
    try {
      const token = getItem("userToken");
      const { data } = await axios.delete(
        `${api}/admin/deleteEspeciality/${payload}`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Especialidad borada con éxito",
        });
        return getAllSpecialities();
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al borrar la especialidad",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

/************* FIN Actions Para ABM Especialidades***********/

/************* Actions Para ABM Afiliados***********/

export function getAllAffiliates(skip, limit) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.get(
        `${api}/admin/allAffiliates?skip=${skip}&limit=${limit}`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      if (data.success) {
        return dispatch({
          type: "GET_AFFILIATES",
          payload: data.message,
          limitPaged: data.limitPaged,
        });
      } else {
        return dispatch({ type: "ERRORS", payload: data });
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function addAffiliate(payload) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.post(`${api}/admin/addAffiliate`, payload, {
        headers: {
          "x-access-token": token,
        },
      });
      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Afiliado agregado",
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al agregar al afiliado",
        });
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export const getAffiliateData = (payload) => {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.get(
        `${api}/admin/affiliateData?idAfilFam=${payload}`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );

      if (data.success) {
        return dispatch({
          type: "AFFILIATE_DATA",
          payload: data.message,
        });
      } else {
        return dispatch({ type: "ERRORS", payload: data });
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
};

export function updateAffiliateAct(payload) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.put(
        `${api}/admin/updateAffiliate`,
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
          message: "Afiliado modificado",
        });
        return getAllSpecialities();
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al moficiar al afiliado",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function upDownAffiliateAct(payload) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.put(
        `${api}/admin/upDownAffiliate`,
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
          message: "afiliado dado de baja/alta",
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al dar de baja/alta al afiliado",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function getAllPlans() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${api}/planesMutual`);
      if (data.success) {
        return dispatch({ type: "GET_PLANS", payload: data.message });
      } else {
        return dispatch({ type: "ERRORS", payload: data });
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

/************* FIN Actions Para ABM Afiliados***********/

/************* Actions Para ABM Farmacias***********/

export function getAllPharmacies(skip, limit, provinciaID, ciudadID) {
  return async (dispatch) => {
    try {
      console.log(skip, limit, ciudadID, provinciaID)
      const token = getItem("userToken");
      const { data } = await axios.get(
        `${api}/admin/farmacias?ciudadID=${ciudadID}&provinciaID=${provinciaID}&skip=${skip}&limit=${limit}`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      if (data.success) {
        return dispatch({
          type: "GET_PHARMACIES",
          payload: data.message,
          limitPaged: data.limitPaged,
        });
      } else {
        return dispatch({ type: "ERRORS", payload: data });
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function getFilterPharmacy(payload) {
  return { type: "GET_PHARMACIES", payload: payload };
}

export function addPharmacy(payload) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.post(`${api}/admin/addPharmacy`, payload, {
        headers: {
          "x-access-token": token,
        },
      });

      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Farmacia Cargada",
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al agregar la farmacia",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
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
    try {
      const token = getItem("userToken");
      const { data } = await axios.put(`${api}/admin/updatePharmacy`, payload, {
        headers: {
          "x-access-token": token,
        },
      });

      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Farmacia Modificada",
        });
        return getAllSpecialities();
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al moficiar la farmacia",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function deletePharmacy(payload) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.delete(
        `${api}/admin/deletePharmacy/${payload}`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );

      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Farmacia borrada con éxito",
        });
        return getAllSpecialities();
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al borrar la farmacia",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
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

export const getViewData = (data) => {
  return {
    type: "GET_PLANES_VIEW",
    payload: data,
  };
};

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
    try {
      const token = getItem("userToken");
      const { data } = await axios.delete(
        `${api}/admin/deletePlan/${payload}`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Plan borrado con éxito",
        });
        return getAllSpecialities();
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al borrar el plan",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

/************* FIN Actions Para ABM Planes***********/

/************* Actions Para ABM Profesionales***********/

export function getAllProfessionals(skip, limit, provinciaID, ciudadID) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.get(
        `${api}/admin/professionals?ciudadID=${ciudadID}&provinciaID=${provinciaID}&skip=${skip}&limit=${limit}`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      if (data.success) {
        return dispatch({
          type: "GET_PROFESSIONALS",
          payload: data.message,
          limitPaged: data.limitPaged,
        });
      } else {
        return dispatch({ type: "ERRORS", payload: data });
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function addProfessional(payload) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.post(
        `${api}/admin/addProfessional`,
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
          message: "Profesional Cargado",
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al agregar el profesional",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
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
    try {
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

      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Profesional modificado",
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al mdificar el profesional",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function upDownProfessionalAct(payload) {
  return async (dispatch) => {
    try {
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
      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Profesional dado de baja/alta",
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al dar de baja/alta al profesional",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function deleteProfessional(payload) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.delete(
        `${api}/admin/deleteProfessional/${payload}`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Profesional eliminado",
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al eliminar el profesional",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

/************* FIN Actions Para ABM Profesionales***********/

/************* Actions Para ABM Prescripciones***********/
//Ver si esta se saca xq la busqueda es por DNI y ya trae todos los datos
export function getPrescriptionById(payload, skip, limit) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.get(
        `${api}/prescriptionByID?id=${payload}&skip=${skip}&limit=${limit}`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      if (data.success) {
        return dispatch({
          type: "GET_PRESCRPTION_ID",
          payload: data.message,
          limitPaged: data.limitPaged,
        });
      } else {
        return dispatch({ type: "ERRORS", payload: data });
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function getPrescriptionsByDNI(payload, skip, limit) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.get(
        `${api}/admin/prescriptionByDNI/${payload}&skip=${skip}&limit=${limit}`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );

      if (data.success) {
        return dispatch({
          type: "GET_PRESCRPTIONS_DNI",
          payload: data.message,
          limitPaged: data.limitPaged,
        });
      } else {
        return dispatch({ type: "ERRORS", payload: data });
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
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
    try {
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
      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Receta modificada",
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al mdificar la receta",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

/************* FIN Actions Para ABM Prescripciones***********/

/************* Actions Para ABM Empleados***********/

export function getAllEmployees(skip, limit) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");

      const { data } = await axios.get(
        `${api}/admin/employees?skip=${skip}&limit=${limit}`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      console.log('<<<<<<<<<<<data',data)
      if (data.success) {
        return dispatch({
          type: "GET_EMPLOYEES",
          payload: data.message,
          limitPaged: data.limitPaged,
        });
      } else {
        return dispatch({ type: "ERRORS", payload: data });
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function addEmployee(payload) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.post(`${api}/admin/addEmployee`, payload, {
        headers: {
          "x-access-token": token,
        },
      });
      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Empleado Cargado",
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al agregar el empleado",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
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
    try {
      const token = getItem("userToken");
      const { data } = await axios.put(`${api}/admin/updateEmployee`, payload, {
        headers: {
          "x-access-token": token,
        },
      });

      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Empleado modificado",
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al modificar a empleado",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function upDownEmployeeAct(payload) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.put(`${api}/admin/upDownEmployee`, payload, {
        headers: {
          "x-access-token": token,
        },
      });

      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Empleado dado de baja/alta",
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al dar de baja/alta al empleado",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };
}

export function deleteEmployee(payload) {
  return async (dispatch) => {
    try {
      const token = getItem("userToken");
      const { data } = await axios.delete(
        `${api}/admin/deleteEmployee/${payload}`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      if (data.success) {
        dispatch({
          type: alertConstants.SUCCESS,
          message: "Empleado eliminado",
        });
      } else {
        dispatch({
          type: alertConstants.ERROR,
          message: "Error al eliminar al empleado",
        });

        return; // dispatch({type: NOT_AUTHENTICATED, payload: data})
      }
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
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

export const deleteCities = () => dispatch => {
  return dispatch({type: 'RESET_CITIES_ABM'})
}

/*************FIN Actions Comunes Para ABM***********/
