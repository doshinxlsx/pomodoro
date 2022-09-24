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

export const BreakForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
