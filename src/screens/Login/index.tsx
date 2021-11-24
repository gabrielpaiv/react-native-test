import React, { useState } from 'react'
import { Alert } from 'react-native'

import { Container, LoginWrapper, User, Password, EnterButton } from './styles'

export function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  async function login() {
    try {
      const result = await fetch(
        'https://api.tst2.escolaapp.com/api/v1/Acesso/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            login: user,
            senha: password,
            nomeApp: 'br.com.eem.teste',
            versaoApp: '10',
            versaoSO: '10',
            idDispositivo: 'teste-mobile'
          })
        }
      )
      const json: LoginResponse = await result.json()
      if (json.mensagemRetorno) {
        throw new Error(json.mensagemRetorno)
      }
      if (!json.conteudo[0]) {
        throw new Error('Verifique as credenciais')
      }
    } catch (error) {
      Alert.alert(
        'Opa',
        `Ocorreu um erro inesperado ao tentar logar: ${error.message}`
      )
    }
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
