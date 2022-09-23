import styled from 'styled-components'

export const SettingsContainer = styled.div`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['brand-100']};
  }
`

export const SettingsTitle = styled.h1``

export const BreaksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 15px;
`

export const ShortBreakTitle = styled.h3``
export const LongBreakTitle = styled.h3``

export const MinutesAmountInput = styled.input``
