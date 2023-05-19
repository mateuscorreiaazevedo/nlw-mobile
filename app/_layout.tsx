import { StyledStripes, bgBlur } from '@/assets/images'
import { SplashScreen, Stack } from 'expo-router'
import * as SecureStore from 'expo-secure-store'
import { StatusBar } from 'expo-status-bar'
import { useFont } from '@/modules/core'
import * as R from 'react-native'
import React from 'react'

export default function Layout() {
  const [isAuthenticated, setIsAuthenticated] = React.useState<null | boolean>(
    null,
  )
  const { hasLoadedFonts } = useFont()

  React.useEffect(() => {
    SecureStore.getItemAsync('auth.token').then((token) => {
      setIsAuthenticated(!!token)
    })
  }, [])

  if (!hasLoadedFonts) return <SplashScreen />

  return (
    <R.ImageBackground
      source={bgBlur}
      className="relative flex-1 bg-gray-900"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />
      <StatusBar style="inverted" translucent />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Stack.Screen name="index" redirect={isAuthenticated!} />
        <Stack.Screen name="new" />
        <Stack.Screen name="memories" />
      </Stack>
    </R.ImageBackground>
  )
}
