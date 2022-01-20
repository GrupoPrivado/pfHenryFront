import photo from "../assets/logo_photo.png";
import date from "./date.js"

export const provincias = [
    { codeProv: "111", provincia: "Buenos Aires" },
    { codeProv: "122", provincia: "Catamarca" },
    { codeProv: "133", provincia: "Chaco" },
    { codeProv: "144", provincia: "Chubut" },
    { codeProv: "155", provincia: "Córdoba" },
    { codeProv: "166", provincia: "Corrientes" },
    { codeProv: "177", provincia: "Entre Ríos" },
    { codeProv: "188", provincia: "Jujuy" },
    { codeProv: "199", provincia: "La Pampa" },
    { codeProv: "211", provincia: "La Rioja" },
    { codeProv: "222", provincia: "Mendoza" },
    { codeProv: "233", provincia: "Misiones" },
    { codeProv: "244", provincia: "Neuquén" },
    { codeProv: "255", provincia: "Río Negro" },
    { codeProv: "266", provincia: "Salta" },
    { codeProv: "277", provincia: "San Juan" },
    { codeProv: "288", provincia: "San Luis" },
    { codeProv: "299", provincia: "Santa Cruz" },
    { codeProv: "311", provincia: "Santa Fe" },
    { codeProv: "322", provincia: "Santiago del Estero" },
    { codeProv: "333", provincia: "Tierra del Fuego" },
    { codeProv: "344", provincia: "Tucumán" },
];

export const profilePhoto = photo;

export const validate = (input) => {
    console.log(input)
    let errores = {};
    if (input.password && input.password.length < 8) {
        errores.password = "La contraseña debe tener minimo 8 caracteres";
    }
    if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.correoElectronico)
    ) {
        errores.correoElectronico = "Ingrese un mail válido";
    }
    if (input.DNI.length < 8) {
        errores.DNI = "DNI mínimo 8 caracteres";
    }
    if (input.telefono.length < 8 || input.telefono.length > 11) {
        errores.telefono = "Ingrese un teléfono válido";
    }
    if (input.fechaNacimiento.length <= 0 || input.fechaNacimiento > date) {
        errores.fechaNacimiento = "La fecha debe ser menor al día de hoy";
    }
    if (input.nombre.length < 3) {
        errores.nombre = "Escriba un nombre válido";
    }
    if (input.apellido.length < 2) {
        errores.apellido = "Escriba un apellido válido";
    }
    if (input.direccion.length < 4) {
        errores.direccion = "Escriba una dirección válida";
    }
    if (input.provinciaID.length <= 0) {
        errores.provinciaID = "Debe seleccionar una provincia";
    }
    if (input.ciudadID.length <= 0) {
        errores.ciudadID = "Debe seleccionar una localidad";
    }
    if (input.parentesco.length <= 0) {
        errores.parentesco = "Debe seleccionar un parentesco";
    }
    if(input.planID && input.planID.length <= 0){
        errores.planID = "Debe seleccionar un plan"
    }
    console.log(errores)
    return errores;
};

export const validateContact = (input) => {
    console.log(input)
    let errores = {};
    if(
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.mail)
    ) {
        errores.mail = "Ingrese un mail válido";
    }
    if (input.name.length < 3) {
        errores.name = "Escriba un nombre válido";
    }
    if (input.lastName.length < 2) {
        errores.lastName = "Escriba un apellido válido";
    }
    if(input.message.lenght < 10){
        errores.message = 'Escriba una consulta válida'
    }
    console.log(errores)
    return errores;
}
