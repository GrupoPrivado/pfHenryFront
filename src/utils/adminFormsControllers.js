export const functionErrorsBtn = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");

  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
};

export const validateEspeciality = (input) => {
  let errores = {};

  if (input.nombre && input.nombre.length < 5) {
    errores.nombre = "El nombre debe tener minimo 5 caracteres";
  }

  if (input.descripcion && input.descripcion.length < 5) {
    errores.descripcion = "La descripcion debe tener minimo 5 caracteres";
  }

  if (input.activa === "") {
    errores.activa = "Debe seleccionar si la especialidad esta activa o no";
  }
 
  return errores;
};

export const validatePlan = (input) => {
  let errores = {};
 
  if (input.codePlan && (input.codePlan.length < 3 || input.codePlan.length >5)) {
    errores.codePlan = "El código debe tener entre 3 y 5 caracteres";
  }

  if (input.name && input.name.length < 5) {
    errores.name = "El nombre debe tener minimo 5 caracteres";
  }

  if (input.precio && typeof(parseInt(input.precio)) !== 'number') {
    errores.precio = "Debe ingresar un valor válido";
  }

  if (input.planActivo === "") {
    errores.planActivo = "Debe seleccionar si la especialidad esta activa o no";
  }
  
  if (input.descripcion && input.descripcion.length <= 0) {
    errores.descripcion = "Dentener al menos una descripcion";
  }

  return errores;
};

export const validateUpdatePlan = (input) => {
  let errores = {};
 
 if (input.precio && typeof(parseInt(input.precio)) !== 'number') {
    errores.precio = "Debe ingresar un valor válido";
  }

  if (input.planActivo === "") {
    errores.planActivo = "Debe seleccionar si la especialidad esta activa o no";
  }
  
  if (input.descripcion && input.descripcion.length <= 0) {
    errores.descripcion = "Dentener al menos una descripcion";
  }

  return errores;
};