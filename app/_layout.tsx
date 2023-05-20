import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StyledStripes, bgBlur } from '@/assets/images'
import { SplashScreen, Stack } from 'expo-router'
import * as SecureStore from 'expo-secure-store'
import { StatusBar } from 'expo-status-bar'
import { useFont } from '@/modules/core'
import ptBr from 'dayjs/locale/pt-br'
import * as R from 'react-native'
import dayjs from 'dayjs'
import React from 'react'

dayjs.locale(ptBr)

export default function Layout() {
  const { bottom, top } = useSafeAreaInsets()
  const [isAuth, setIsAuth] = React.useState<null | boolean>(null)
  const { hasLoadedFonts } = useFont()

  React.useEffect(() => {
    SecureStore.getItemAsync('auth.token').then((token) => {
      setIsAuth(!!token)
    })
  }, [])

  if (!hasLoadedFonts) return <SplashScreen />

  return (
    <R.ImageBackground
      source={bgBlur}
      style={{ paddingBottom: bottom, paddingTop: top }}
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
        <Stack.Screen name="index" redirect={isAuth!} />
        <Stack.Screen name="memories" />
        <Stack.Screen name="new" />
      </Stack>
    </R.ImageBackground>
  )
}
