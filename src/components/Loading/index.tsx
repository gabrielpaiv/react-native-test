import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'
import { Container, Logo } from './styles'

interface LoadingProps {
  imageUrl?: string
}

export function Loading({ imageUrl }: LoadingProps) {
  const theme = useTheme()
  return (
    <Container>
      <Logo source={{ uri: imageUrl }} />
      <ActivityIndicator size="large" color={theme.colors.text} />
    </Container>
  )
}
