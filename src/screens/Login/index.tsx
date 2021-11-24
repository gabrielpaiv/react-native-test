import React, { useState } from 'react'
import { Alert } from 'react-native'
import { useAuth } from '../../hooks/auth'

import { Container, LoginWrapper, User, Password, EnterButton } from './styles'

export function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()

  async function login() {
    signIn({ login: user, senha: password })
  }
  return (
    <Container>
      <LoginWrapper>
        <User onChangeText={setUser} value={user} placeholder="Usuário" />
        <Password
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
