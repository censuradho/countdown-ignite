export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  createdAt: Date;
  interruptAt?: Date
  finishedAt?: Date
}
