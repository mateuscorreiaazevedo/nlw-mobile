import * as R from 'react-native'
import React from 'react'
import { NlwLogo } from '@/assets/images'
import { Link } from 'expo-router'

import Icon from '@expo/vector-icons/Feather'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets()
  const [isPublic, setIsPublic] = React.useState(false)

  return (
    <R.ScrollView
      className="my-2 flex-1 px-8"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <R.View className="flex-row items-center justify-between">
        <NlwLogo />

        <Link href="/memories" asChild>
          <R.TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
            <Icon name="arrow-left" size={18} color="#fff" />
          </R.TouchableOpacity>
        </Link>
      </R.View>
      <R.View className="mt-6 space-y-6">
        <R.View className="flex-row items-center gap-2">
          <R.Switch
            value={isPublic}
            onValueChange={setIsPublic}
            thumbColor={isPublic ? '#9b79ea' : '#9e9ea0'}
            trackColor={{ false: '#28282d', true: '#372560' }}
          />
          <R.Text className="font-body text-sm text-gray-200">
            Tornar memória pública
          </R.Text>
        </R.View>
        <R.TouchableOpacity
          activeOpacity={0.7}
          className="h-32 items-center justify-center rounded-lg border border-dashed border-gray-500 bg-black/20"
        >
          <R.View className="flex-row items-center  gap-2">
            <Icon name="image" color={'#fff'} />
            <R.Text className="font-body text-sm text-gray-200">
              Adicionar foto ou vídeo de capa
            </R.Text>
          </R.View>
        </R.TouchableOpacity>
        <R.TextInput
          multiline
          className="flex-1 p-0 font-body text-lg text-gray-50"
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
          placeholderTextColor="#56565a"
        />
        <R.TouchableOpacity
          className="items-center justify-center self-end rounded-full bg-green-500 px-5 py-2"
          activeOpacity={0.7}
        >
          <R.Text className="font-alt text-sm uppercase text-black">
            Salvar
          </R.Text>
        </R.TouchableOpacity>
      </R.View>
    </R.ScrollView>
  )
}
