import * as yup from 'yup'

const getAmountMessage = (value: number, state: 'min' | 'max') => {
  const _state = state === 'min' ? 'mínimo' : 'máximo'

  return `O intervalo precisa ser de no ${_state} ${value}`
}

export const formValidationSchema = yup.object({
  task: yup.string().min(1, 'Informe a tarefa'),
  minutesAmount: yup
    .number()
    .min(1, getAmountMessage(1, 'min'))
    .max(60, getAmountMessage(60, 'max'))
})
