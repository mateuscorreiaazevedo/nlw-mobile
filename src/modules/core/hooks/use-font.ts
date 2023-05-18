import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat'

export const useFont = () => {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Montserrat_700Bold,
  })

  return { hasLoadedFonts }
}
