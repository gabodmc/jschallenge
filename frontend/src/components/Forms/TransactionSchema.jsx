import * as Yup from "yup";

const CreateSchema = Yup.object().shape({
  concept: Yup.string()
    .min(2, "El concepto debe tener mas de dos caracteres")
    .max(20, "Demasiado largo")
    .required("Campo obligatorio"),
  amount: Yup.number()
    .typeError("El campo debe ser numérico")
    .min(1, "Debe ser mayor a $1")
    .max(9000000, "El monto máximo es $9000000")
    .required("Campo obligatorio"),
  revenue: Yup.string().required("Campo obligatorio"),
  date: Yup.date().required("Campo obligatorio"),
});

const EditSchema = Yup.object().shape({
  concept: Yup.string()
    .min(2, "El concepto debe tener mas de dos caracteres")
    .max(20, "Demasiado largo!")
    .required("Campo obligatorio"),
  amount: Yup.number()
    .max(9000000, "El monto máximo es $9000000")
    .required("Campo obligatorio"),
});

export { CreateSchema, EditSchema };
