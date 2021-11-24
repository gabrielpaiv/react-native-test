import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

interface InputProps {
  color?: string
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 9px;
`

export const IconContainer = styled.View`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
`
export const InputText = styled.TextInput<InputProps>`
  flex: 1;
  color: ${({ theme, color }) => (color ? color : theme.colors.text)};
  font-size: ${RFValue(15)}px;
  padding: 0 23px;
`
