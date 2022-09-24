import { differenceInSeconds } from 'date-fns'
import { createContext, ReactNode, useEffect, useReducer, useState } from 'react'

import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'

import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'

interface CreateCycleData {
  task: string
  minutesAmount?: number
  shortBreakAmount?: number
  longBreakAmount?: number
}

interface CycleContextProviderProps {
  children: ReactNode
}

interface CycleContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  createNewShortBreakCycle: (data: CreateCycleData) => void
  createNewLongBreakCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

export const CycleContext = createContext({} as CycleContextType)

export const CyclesContextProvider = ({ children }: CycleContextProviderProps) => {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem('timer:cycles-state')

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return {
        cycles: [],
        activeCycleId: null,
      }
    },
  )

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('timer:cycles-state', stateJSON)
  }, [cyclesState])

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds)
  }

  const markCurrentCycleAsFinished = () => {
    dispatch(markCurrentCycleAsFinishedAction())
    document.title = 'Timer Pomodoro'
  }

  const createNewCycle = (data: CreateCycleData) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  const createNewShortBreakCycle = (data: CreateCycleData) => {
    const id = String(new Date().getTime())

    const newShortBreakCycle: Cycle = {
      id,
      task: 'Short break',
      minutesAmount: data.shortBreakAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newShortBreakCycle))
    setAmountSecondsPassed(0)
  }

  const createNewLongBreakCycle = (data: CreateCycleData) => {
    const id = String(new Date().getTime())

    const newLongBreakCycle: Cycle = {
      id,
      task: 'Long break',
      minutesAmount: data.longBreakAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newLongBreakCycle))
    setAmountSecondsPassed(0)
  }

  const interruptCurrentCycle = () => {
    dispatch(interruptCurrentCycleAction())

    document.title = 'Timer Pomodoro'
  }

  return (
    <CycleContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        createNewShortBreakCycle,
        createNewLongBreakCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}
