import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex: 1;
  color: ${(props) => props.theme['brand-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

export const ShortBreakTitle = styled.h3``
export const LongBreakTitle = styled.h3``

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['brand-500']};
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['brand-100']};

  &::placeholder {
    color: ${(props) => props.theme['brand-500']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['primary-500']};
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.theme['brand-100']};
  transition: background 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartShortbreakButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['yellow-500']};

  &:hover:not(:disabled) {
    background: ${(props) => props.theme['yellow-700']};
  }
`

export const StartLongbreakButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['purple-500']};

  &:hover:not(:disabled) {
    background: ${(props) => props.theme['purple-700']};
  }
`
