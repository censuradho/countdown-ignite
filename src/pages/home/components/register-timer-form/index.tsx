import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import type{ FormNewCycleData } from './types'
import * as Styles from './styles'
import { Box, Button } from '@/src/components'
import { formValidationSchema } from './validations'
import { useTimerContext } from '@/src/context/timer'
import { CountDown } from '../countdown'

export function RegisterTimerForm () {
  const context = useTimerContext()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: {
      errors
    }
  } = useForm<FormNewCycleData>({
    resolver: yupResolver(formValidationSchema),
    defaultValues: {
      minutesAmount: 0,
      task: ''
    }
  })

  const onSubmit = (data: FormNewCycleData) => {
    context.registerCycle?.(data)
    reset()
  }

  const hasTask = !!watch('task')

  function renderSubmitButton () {
    if (context.activeCycleId) {
      return (
      <Button
        icon={{ name: 'pause' }}
        variant="secondary"
        onClick={context.stopCycle}
      >Interromper</Button>
      )
    }

    return (
      <Button
        disabled={!hasTask}
        type="submit"
        icon={{
          name: 'play'
        }}
      >Começar</Button>
    )
  }

  const renderSuggestLabel = context.cycles.map(cycle => (
    <option key={cycle.id} value={cycle.task} />
  ))

  return (
    <Styles.Form onSubmit={handleSubmit(onSubmit)}>
      <Box
        wrap
        alignItems="center"
        gap={0.5}
      >
        <Styles.Label htmlFor="task">Vou trabalhar em</Styles.Label>
        <Styles.Input
          placeholder="Dê um nome para o seu projeto"
          id="task"
          list="task-suggestion"
          fullWidth
          {...register('task')}
          hasError={!!errors?.task?.message}
          disabled={!!context?.activeCycleId}
        />
        <Styles.DataList id="task-suggestion">
          {renderSuggestLabel}
        </Styles.DataList>
        <Styles.Label htmlFor="minutesAmount">durante</Styles.Label>
        <Styles.MinutesAmountInput
          type="number"
          id="minutesAmount"
          {...register('minutesAmount', { valueAsNumber: true })}
          placeholder="00"
          step={1}
          max={60}
          disabled={!!context?.activeCycleId}
          min={0}
          hasError={!!errors?.minutesAmount?.message}
        />
        <span>minutos.</span>
      </Box>
      <CountDown />
      {renderSubmitButton()}
    </Styles.Form>
  )
}
