import { BorderlessButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  width: 100%;
`

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cyan};
  flex-direction: row;
  height: ${RFValue(100)}px;
  justify-content: space-between;
  align-items: flex-end;
  padding: 30px;
`

export const LogoutButton = styled(BorderlessButton)``

export const Information = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`

export const SearchWrapper = styled.View`
  width: 100%;
  border-width: 15px;
  border-color: ${({ theme }) => theme.colors.shape_dark};
`
