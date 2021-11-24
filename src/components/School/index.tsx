import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import { Container, Logo, SchoolTitle, SchoolUrl, Info } from './styles'

interface SchoolProps extends RectButtonProps {
  title: string
  logoUrl: string
  schoolUrl: string
}

export function School({ title, logoUrl, schoolUrl, ...rest }: SchoolProps) {
  return (
    <Container {...rest}>
      <Logo source={{ uri: logoUrl }} />
      <Info>
        <SchoolTitle>{title}</SchoolTitle>
        <SchoolUrl>{schoolUrl}</SchoolUrl>
      </Info>
      <Feather name="chevron-right" size={32} />
    </Container>
  )
}
