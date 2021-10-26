import * as Yup from 'yup';

const TransactionSchema = Yup.object().shape({
  concept: Yup.string()
    .min(2, 'El concepto debe tener mas de dos caracteres')
    .max(20, 'Demasiado largo!')
    .required('Campo obligatorio'),
  amount: Yup.number()
    .max(9000000, 'El monto máximo es $9000000!')
    .required('Campo obligatorio'),
  revenue: Yup.string()
    .required('Campo obligatorio'),
  date: Yup.date()
    .required('Campo obligatorio'),
});

export default TransactionSchema;