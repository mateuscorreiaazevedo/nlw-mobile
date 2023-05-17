import { StatusBar } from 'expo-status-bar'
import * as RN from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat'

import bgBlur from './src/assets/images/bg-blur.png'
import Stripes from './src/assets/images/stripes.svg'
import NlwLogo from './src/assets/images/nlw-spacetime-logo.svg'

import { styled } from 'nativewind'

const StyledStripes = styled(Stripes)

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Montserrat_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

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
