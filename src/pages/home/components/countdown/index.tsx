import React, { useContext, useEffect } from 'react'
import { CycleContext } from '../../../../context/CycleContext'
import { CountdownContainer } from './styles'
import { differenceInSeconds } from 'date-fns'

const Countdown = () => {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CycleContext)

  const totalSeconds = activeCycle ? activeCycle?.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - Timer Pomodoro`
    }
  }, [activeCycle, minutes, seconds])

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.startDate))

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          document.title = 'Timer Pomodoro'
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished, setSecondsPassed])

  return (
    <CountdownContainer>
      <Minutes>Countdown</Minutes>
      <Minutes></Minutes>
      <Separator>:</Separator>
      <Seconds></Seconds>
      <Seconds></Seconds>
    </CountdownContainer>
  )
}

export default Countdown
