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
import { FlatList } from 'react-native'
import { School } from '../../components/School'
import { useNavigation } from '@react-navigation/native'

export function Dashboard() {
  const theme = useTheme()
  const { data, signOut } = useAuth()
  const { navigate } = useNavigation()
  function logout() {
    signOut()
  }
  function handleSchoolPress(school: School) {
    navigate('News', { school })
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
      <FlatList
        data={data.conteudo}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <School
            logoUrl={item.urlLogoContexto}
            title={item.nomeAplicacao}
            schoolUrl={item.contexto}
            onPress={() => handleSchoolPress(item)}
          />
        )}
      />
    </Container>
  )
}
