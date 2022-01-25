export const validateDNIToken = (input) => {
  let errores = {};

  if (input.DNI.length < 8) {
    errores.DNI = "El DNI ingresado debe ser mayor a 8 dígitos";
  }

  if (input.token.length === 6) {
    errores.token = "El Token ingresado debe ser de 6 numeros";
  }

  return errores;
};
