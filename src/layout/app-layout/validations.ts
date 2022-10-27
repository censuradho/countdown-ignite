import * as yup from 'yup'

export const todoSchemaValidation = yup.object({
  label: yup.string().required('Campo obrigatório')
})