import { NlwLogo, bgBlur, StyledStripes } from '@/assets/images'
import { useAuth, useFont } from '@/modules/core'
import * as SecureStore from 'expo-secure-store'
import { authService } from '@/modules/user'
import { StatusBar } from 'expo-status-bar'
import * as RN from 'react-native'
import { useEffect } from 'react'
import { useRouter } from 'expo-router'

export default function App() {
  const { response, signInWithGithub } = useAuth()
  const { hasLoadedFonts } = useFont()
  const router = useRouter()

  async function handleRequestCodeWithGithub(code: string) {
    try {
      const token = await authService.register(code)
      await SecureStore.setItemAsync('auth.token', token!)
      router.push('/memories')
    } catch (error) {
      console.error((error as any).message)
    }
  }

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params

      handleRequestCodeWithGithub(code)
    }
  }, [response])

  if (!hasLoadedFonts) return null

  return (
    <RN.ImageBackground
      source={bgBlur}
      className="relative flex-1 items-center justify-center bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />
      <RN.View className="flex-1 items-center justify-center gap-6">
        <NlwLogo />
        <RN.View className="space-y-2">
          <RN.Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </RN.Text>
          <RN.Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </RN.Text>
        </RN.View>
        <RN.TouchableOpacity
          className="rounded-full bg-green-500 px-5 py-2"
          activeOpacity={0.7}
          onPress={() => signInWithGithub()}
        >
          <RN.Text className="font-alt text-sm uppercase text-black">
            Cadastrar Lembranças
          </RN.Text>
        </RN.TouchableOpacity>
      </RN.View>

      <RN.Text className="text-center font-body text-sm text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </RN.Text>

      <StatusBar style="inverted" translucent />
    </RN.ImageBackground>
  )
}
