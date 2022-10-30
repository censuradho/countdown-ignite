import { Cycle } from '../../types'

type CycleData = Pick<Cycle, 'minutesAmount' | 'task'>
export type FormNewCycleData = CycleData
