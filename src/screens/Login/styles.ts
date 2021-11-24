import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cyan};
`

export const LoginWrapper = styled.View`
  width: 90%;
`
export const User = styled.TextInput`
  border-color: ${({ theme }) => theme.colors.shape};
  border-width: 1px;
  color: ${({ theme }) => theme.colors.shape};
`
export const Password = styled.TextInput`
  border-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.shape};
  border-width: 1px;
`
export const EnterButton = styled.Button`
  margin-top: 10px;
`
