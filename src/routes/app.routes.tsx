import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Dashboard } from '../screens/Dashboard'
import { News } from '../screens/News'

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="News" component={News} />
    </Navigator>
  )
}
