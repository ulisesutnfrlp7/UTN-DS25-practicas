// src/validations/contactoSchema.js

import * as yup from "yup";

export const contactoSchema = yup.object().shape({
  nombre: yup.string().required("⚠️ EL NOMBRE ES OBLIGATORIO"),
  apellido: yup.string().required("⚠️ EL APELLIDO ES OBLIGATORIO"),
  email: yup
    .string()
    .email("⚠️ EMAIL INVÁLIDO")
    .required("⚠️ EL EMAIL ES OBLIGATORIO"),
  mensaje: yup
    .string()
    .min(15, "⚠️ EL MENSAJE DEBE TENER AL MENOS 15 CARACTERES")
    .max(200, "⚠️ EL MENSAJE NO PUEDE SUPERAR LOS 200 CARACTERES")
    .required("⚠️ EL MENSAJE ES OBLIGATORIO"),
});