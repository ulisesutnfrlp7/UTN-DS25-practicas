import * as yup from "yup";

export const registroSchema = yup.object().shape({
  nombre: yup.string().required("⚠️ EL NOMBRE ES OBLIGATORIO."),
  apellido: yup.string().required("⚠️ EL APELLIDO ES OBLIGATORIO."),
  email: yup
    .string()
    .email("⚠️ EMAIL INVÁLIDO.")
    .required("⚠️ EL EMAIL ES OBLIGATORIO."),
  contraseña: yup
    .string()
    .min(8, "⚠️ LA CONTRASEÑA DEBE TENER AL MENOS 8 CARACTERES.")
    .matches(/[A-Z]/, "⚠️ DEBE CONTENER AL MENOS UNA LETRA MAYÚSCULA.")
    .matches(/[0-9]/, "⚠️ DEBE CONTENER AL MENOS UN NÚMERO.")
    .required("⚠️ LA CONTRASEÑA ES OBLIGATORIA."),
  sexo: yup.string().required("⚠️ DEBES SELECCIONAR UN SEXO."),
  temaFavorito: yup.string().required("⚠️ DEBES SELECCIONAR UN TEMA FAVORITO."),
});