import {
  ContentArea,
  FormMemoryInterface,
  MediaPicker,
  SwitchIsPublic,
  memoryService,
} from '@/modules/memories'
import * as R from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Header } from '@/modules/core'

export default function NewMemory() {
  const [preview, setPreview] = React.useState<string | null>(null)
  const { push } = useRouter()
  const [newMemory, setNewMemory] = React.useState<FormMemoryInterface>({
    content: '',
    isPublic: false,
  })

  const setValue = (name: string, value: any) => {
    setNewMemory({ ...newMemory, [name]: value })
  }

  async function handleCreateMemory() {
    let coverUrl = ''
    try {
      if (preview) {
        const uploadFormData = new FormData()
        const objectFile = {
          name: 'image.png',
          type: 'image/png',
          uri: preview,
        }

        uploadFormData.append('file', objectFile as any)
        coverUrl = (await memoryService.uploadFile(uploadFormData)) as string
        setValue('coverUrl', coverUrl)
      }

      await memoryService.createMemory({ ...newMemory, coverUrl })
      push('/memories')
    } catch (error) {
      console.error((error as any).message)
    }
  }

  return (
    <R.ScrollView className="my-2 flex-1 px-8">
      <Header toScreen="/memories" />
      <R.View className="mt-6 space-y-6">
        <SwitchIsPublic isPublic={newMemory.isPublic} toggle={setValue} />
        <MediaPicker preview={preview} setPreview={setPreview} />
        <ContentArea content={newMemory.content} setContent={setValue} />
        <R.TouchableOpacity
          className="items-center justify-center self-end rounded-full bg-green-500 px-5 py-2"
          onPress={handleCreateMemory}
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
