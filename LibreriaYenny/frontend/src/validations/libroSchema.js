// src/validations/libroSchema.js

import * as yup from "yup";

export const libroSchema = yup.object().shape({
    titulo: yup.string().required(" ⚠️ TÍTULO REQUERIDO"),
    authorId: yup.string().required("⚠️ AUTOR REQUERIDO"),
    sinopsis: yup.string().required("⚠️ SINOPSIS REQUERIDA"),
    categoria: yup.string().required("⚠️ CATEGORÍA REQUERIDA")
});