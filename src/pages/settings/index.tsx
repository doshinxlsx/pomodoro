import React, { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CycleContext } from '../../context/CycleContext'
import {
  BreaksContainer,
  LongBreakTitle,
  MinutesAmountInput,
  SettingsContainer,
  SettingsTitle,
  ShortBreakTitle,
} from './styles'

const Settings = () => {
  const { activeCycle } = useContext(CycleContext)
  const { register } = useFormContext()

  return (
    <SettingsContainer>
      <SettingsTitle>Settings</SettingsTitle>

      <BreaksContainer>
        <ShortBreakTitle>
          Short break duration:{' '}
          <MinutesAmountInput
            id='shortBreakAmount'
            type='number'
            placeholder='00'
            step={1}
            min={5}
            max={15}
            disabled={!!activeCycle}
            {...register('shortBreakAmount', { valueAsNumber: true })}
          />
        </ShortBreakTitle>

        <LongBreakTitle>
          Long break duration:{' '}
          <MinutesAmountInput
            id='longBreakAmount'
            type='number'
            placeholder='00'
            step={1}
            min={30}
            max={60}
            disabled={!!activeCycle}
            {...register('longBreakAmount', { valueAsNumber: true })}
          />
        </LongBreakTitle>
      </BreaksContainer>
    </SettingsContainer>
  )
}

export default Settings
