import React from 'react'
import { useAuth } from '../hooks/auth'
import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { data } = useAuth()
  return (
    <NavigationContainer>
      {data.sucesso ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
