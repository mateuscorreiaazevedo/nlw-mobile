import * as ImagePicker from 'expo-image-picker'
import Icon from '@expo/vector-icons/Feather'
import * as R from 'react-native'
import React from 'react'

type Props = {
  preview: string | null
  setPreview: React.Dispatch<React.SetStateAction<string | null>>
}

export const MediaPicker = ({ preview, setPreview }: Props) => {
  async function openImagePicker() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
      })

      if (result.assets![0]) {
        setPreview(result.assets![0].uri)
      }
    } catch (e) {
      console.error((e as any).message)
    }
  }

  return (
    <R.TouchableOpacity
      activeOpacity={0.7}
      onPress={openImagePicker}
      className="h-32 items-center justify-center rounded-lg border border-dashed border-gray-500 bg-black/20"
    >
      {preview ? (
        <R.Image
          source={{ uri: preview }}
          className="h-full w-full rounded-lg object-cover"
        />
      ) : (
        <R.View className="flex-row items-center  gap-2">
          <Icon name="image" color={'#fff'} />
          <R.Text className="font-body text-sm text-gray-200">
            Adicionar foto ou vídeo de capa
          </R.Text>
        </R.View>
      )}
    </R.TouchableOpacity>
  )
}
