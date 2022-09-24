import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import NewBreakForm from './components/NewBreakForm'
import { SettingsContainer, SettingsTitle } from './styles'

import * as zod from 'zod'

export const newBreakFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Enter the task'),
  shortBreakAmount: zod
    .number()
    .min(1, 'The cycle needs to be at least 5 minutes')
    .max(60, 'The cycle must be at least 60 minutes'),
  longBreakAmount: zod
    .number()
    .min(30, 'The cycle needs to be at least 30 minutes')
    .max(60, 'The cycle needs to be at least 60 minutes'),
})

export type NewBreakFormData = zod.infer<typeof newBreakFormValidationSchema>

const Settings = () => {
  const newBreakForm = useForm<NewBreakFormData>({
    resolver: zodResolver(newBreakFormValidationSchema),
    defaultValues: {
      task: ' ',
      shortBreakAmount: 5,
      longBreakAmount: 30,
    },
  })

  return (
    <SettingsContainer>
      <SettingsTitle>Settings</SettingsTitle>
      <FormProvider {...newBreakForm}>
        <NewBreakForm />
      </FormProvider>
    </SettingsContainer>
  )
}

export default Settings
