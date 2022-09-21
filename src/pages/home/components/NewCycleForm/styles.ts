import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: lightgreen;
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid green;
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0 0.5rem;
  color: whitesmoke;

  &::placeholder {
    color: grey;
  }

  &:focus {
    box-shadow: none;
    border-color: whitesmoke;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const CycleLabel = styled.label``

export const CycleDataList = styled.datalist``

export const Option = styled.option``

export const Span = styled.span``
