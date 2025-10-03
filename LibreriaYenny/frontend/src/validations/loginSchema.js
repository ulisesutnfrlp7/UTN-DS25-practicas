// src/validations/loginSchema.js

import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('⚠️ EL EMAIL ES REQUERIDO')
    .email('⚠️ DEBE SER UN EMAIL VÁLIDO'),
  password: yup
    .string()
    .required('⚠️ LA CONTRASEÑA ES REQUERIDA'),
});