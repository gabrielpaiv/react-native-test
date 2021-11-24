import React from 'react'
import { Feather } from '@expo/vector-icons'
import { TextInputProps } from 'react-native'

import { Container, InputText, IconContainer } from './styles'

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
  value?: string
  color?: string
}

export function Input({ iconName, value, color, ...rest }: InputProps) {
  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={color} />
      </IconContainer>
      <InputText {...rest} color={color} />
    </Container>
  )
}
