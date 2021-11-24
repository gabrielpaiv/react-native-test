import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`

export const Logo = styled.Image`
  height: ${RFValue(80)}px;
  width: ${RFValue(80)}px;
`

export const Info = styled.View`
  height: 100%;
  width: 65%;
  justify-content: center;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.shape_dark};
`

export const SchoolTitle = styled.Text`
  font-size: ${RFValue(18)}px;
`

export const SchoolUrl = styled.Text`
  font-size: ${RFValue(14)}px;
`
