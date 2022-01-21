export const functionErrorsBtn = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");

  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
};

export const validateAddEspeciality = (input) => {
  let errores = {};
  console.log(input)
  if (input.nombre && input.nombre.length < 5) {
    errores.nombre = "El nombre debe tener minimo 5 caracteres";
  }

  if (input.descripcion && input.descripcion.length < 5) {
    errores.descripcion = "La descripcion debe tener minimo 5 caracteres";
  }

  if (input.activa === "") {
    errores.activa = "Debe seleccionar si la especialidad esta activa o no";
  }
  console.log(errores)
  return errores;
};
