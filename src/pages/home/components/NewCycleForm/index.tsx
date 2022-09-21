import {
  CycleDataList,
  CycleLabel,
  FormContainer,
  MinutesAmountInput,
  Option,
  Span,
  TaskInput,
} from './styles'
import { useContext } from 'react'

import { useFormContext } from 'react-hook-form'
import { CycleContext } from '../../../../context/CycleContext'

const NewCycleForm = () => {
  const { activeCycle } = useContext(CycleContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <CycleLabel htmlFor='task'>I`ll work on</CycleLabel>
      <TaskInput
        id='task'
        list='task-suggestion'
        placeholder='enter project name here'
        disabled={!!activeCycle}
        {...register('task')}
      />

      <CycleDataList id='task-suggestion'>
        <Option value='Project 1'></Option>
        <Option value='Project 2'></Option>
        <Option value='Project 3'></Option>
        <Option value='Project 4'></Option>
      </CycleDataList>

      <CycleLabel htmlFor='minutesAmount'>for</CycleLabel>
      <MinutesAmountInput
        id='minutesAmount'
        type='number'
        placeholder='00'
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <Span>minutes.</Span>
    </FormContainer>
  )
}

export default NewCycleForm
