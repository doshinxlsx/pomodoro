import React, { useContext } from 'react'
import { HomeContainer, CycleForm, StartCountdownButton, StopCountdownButton } from './styles'
import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'

import NewCycleForm from './components/NewCycleForm'
import Countdown from './components/countdown'
import { CycleContext } from '../../context/CycleContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Enter the task'),
  minutesAmount: zod
    .number()
    .min(1, 'The cycle needs to be at least 5 minutes')
    .max(60, 'The cycle must be at least 60 minutes'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

const Home = () => {
  const { activeCycleId, createNewCycle, interruptCurrentCycle } = useContext(CycleContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <CycleForm onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycleId ? (
          <StopCountdownButton type='button' onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Interrupt
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type='submit' disabled={isSubmitDisabled}>
            <Play size={24} />
            Start
          </StartCountdownButton>
        )}
      </CycleForm>
    </HomeContainer>
  )
}

export default Home
