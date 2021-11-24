import React from 'react'
import { Feather } from '@expo/vector-icons'

import {
  Container,
  Header,
  LogoutButton,
  Information,
  SearchWrapper
} from './styles'
import { useTheme } from 'styled-components'
import { useAuth } from '../../hooks/auth'
import { Input } from '../../components/Input'

export function Dashboard() {
  const theme = useTheme()
  const { signOut } = useAuth()
  function logout() {
    signOut()
  }
  return (
    <Container>
      <Header>
        <LogoutButton onPress={logout}>
          <Feather name="power" size={24} color={theme.colors.shape} />
        </LogoutButton>
        <Information>Selecione a sessão principal</Information>
      </Header>
      <SearchWrapper>
        <Input
          iconName="search"
          color={theme.colors.text}
          placeholder="Busca"
        />
      </SearchWrapper>
    </Container>
  )
}
