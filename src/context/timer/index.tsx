import { useInterval } from '@/src/hooks/useInterval'
import { uuid } from '@/src/lib/uuid'
import { FormNewCycleData } from '@/src/pages/home/components/register-timer-form/types'
import { Cycle } from '@/src/pages/home/types'
import { differenceInSeconds } from 'date-fns'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface TimerProviderProps {
  children: ReactNode
}

interface TimerContextProps {
  registerCycle: (data: FormNewCycleData) => void
  stopCycle: () => void
  finishedCycle: () => void
  minutes: string;
  seconds: string;
  cycles: Cycle[];
  activeCycleId?: string | null
  amountSecondsPassed: number
}

const TimerContext = createContext({} as TimerContextProps)

export function TimerProvider ({ children }: TimerProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  const totalSeconds = activeCycle
    ? activeCycle.minutesAmount * 60
    : 0

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  const handleRegisterCycle = (data: FormNewCycleData) => {
    const id = uuid()
    setCycles(prevState => ([
      ...prevState,
      {
        id,
        createdAt: new Date(),
        ...data
      }
    ]))

    setActiveCycleId(id)
    setAmountSecondsPassed(0)
  }

  const handleInterruptCycle = () => {
    setCycles(prevState => prevState.map(cycle => {
      if (cycle.id === activeCycleId) {
        return {
          ...cycle,
          interruptAt: new Date()
        }
      }
      return cycle
    }))
    setActiveCycleId(null)
    setAmountSecondsPassed(0)
  }

  const handleFinishedTimer = () => {
    setCycles(prevState => prevState.map(cycle => {
      if (cycle.id === activeCycleId) {
        return {
          ...cycle,
          finishedAt: new Date()
        }
      }
      return cycle
    }))
    setActiveCycleId(null)
    setAmountSecondsPassed(0)
  }

  useInterval(() => {
    if (!activeCycle) return
    const diffSeconds = differenceInSeconds(new Date(), activeCycle?.createdAt)

    if (diffSeconds >= totalSeconds) {
      handleFinishedTimer()
      return
    }

    setAmountSecondsPassed(diffSeconds)
  }, activeCycle ? 1000 : null)

  useEffect(() => {
    if (!activeCycle) {
      document.title = ''
      return
    }

    document.title = `${minutes}:${seconds}`
  }, [minutes, seconds, activeCycle])

  return (
    <TimerContext.Provider value={{
      registerCycle: handleRegisterCycle,
      stopCycle: handleInterruptCycle,
      finishedCycle: handleFinishedTimer,
      minutes,
      seconds,
      activeCycleId,
      amountSecondsPassed,
      cycles
    }}>
      {children}
    </TimerContext.Provider>
  )
}

export const useTimerContext = () => useContext(TimerContext)
