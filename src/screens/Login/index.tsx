import React, { useState } from 'react'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import { useTheme } from 'styled-components'

import { Container, LoginWrapper, User, Password, EnterButton } from './styles'

export function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()

  const theme = useTheme()

  function login() {
    signIn({ login: user, senha: password })
  }
  return (
    <Container>
      <LoginWrapper>
        <Input
          color={theme.colors.shape.toString()}
          iconName="user"
          onChangeText={setUser}
          value={user}
          placeholder="Usuário"
        />
        <Input
          color={theme.colors.shape.toString()}
          iconName="key"
          onChangeText={setPassword}
          value={password}
          placeholder="Senha"
          keyboardType="visible-password"
          secureTextEntry={true}
        />
        <EnterButton title="Entrar" onPress={login} />
      </LoginWrapper>
    </Container>
  )
}
