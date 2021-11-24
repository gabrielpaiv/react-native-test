import React, { useState } from 'react'
import { Loading } from '../../components/Loading'
import { useRoute } from '@react-navigation/native'
import { Container } from './styles'

interface Params {
  school: School
}

export function News() {
  const [isLoading, setIsLoading] = useState(true)

  const route = useRoute()
  const { school } = route.params as Params

  if (isLoading) {
    return <Loading imageUrl={school.urlLogoContexto} />
  }
  return <Container></Container>
}
