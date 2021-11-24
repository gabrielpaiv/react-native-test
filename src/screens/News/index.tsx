import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    async function getNews() {
      const response = await fetch(
        `https://${school.contexto}/api/mensagem/ultimas-noticias/v3`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Authorization': school.token
          }
        }
      )
      console.log(response)
      setIsLoading(false)
    }
    getNews()
  }, [])
  if (isLoading) {
    return <Loading imageUrl={school.urlLogoContexto} />
  }

  return <Container></Container>
}
