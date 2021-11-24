import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const Logo = styled.Image`
  width: ${RFValue(250)}px;
  height: ${RFValue(250)}px;
  margin: 60px;
`
