import {
  FormContainer,
  LongBreakTitle,
  MinutesAmountInput,
  ShortBreakTitle,
  StartLongbreakButton,
  StartShortbreakButton,
} from './styles'
import { useContext } from 'react'

import { useForm, useFormContext } from 'react-hook-form'
import { CycleContext } from '../../../../context/CycleContext'
import { Timer } from 'phosphor-react'
import { newBreakFormValidationSchema } from '../..'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { BreakForm } from '../../styles'

export type NewBreakFormData = zod.infer<typeof newBreakFormValidationSchema>

const NewBreakForm = () => {
  const { activeCycle, createNewShortBreakCycle, createNewLongBreakCycle } =
    useContext(CycleContext)
  const { register } = useFormContext()
  const navigate = useNavigate()

  const newBreakForm = useForm<NewBreakFormData>({
    resolver: zodResolver(newBreakFormValidationSchema),
    defaultValues: {
      task: ' ',
      shortBreakAmount: 5,
      longBreakAmount: 30,
    },
  })

  const { handleSubmit, reset } = newBreakForm

  const handleCreateNewShortCycle = async (data: NewBreakFormData) => {
    await createNewShortBreakCycle(data)
    reset()
    navigate('/')
  }

  const handleCreateNewLongCycle = async (data: NewBreakFormData) => {
    await createNewLongBreakCycle(data)
    reset()
    navigate('/')
  }

  return (
    <FormContainer>
      <BreakForm onSubmit={handleSubmit(handleCreateNewShortCycle)}>
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
        <StartShortbreakButton type='submit'>
          <Timer size={24} />
          Start short break
        </StartShortbreakButton>
      </BreakForm>

      <BreakForm onSubmit={handleSubmit(handleCreateNewLongCycle)}>
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
        <StartLongbreakButton type='submit'>
          <Timer size={24} />
          Start long break
        </StartLongbreakButton>
      </BreakForm>
    </FormContainer>
  )
}

export default NewBreakForm
