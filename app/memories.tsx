import Icon from '@expo/vector-icons/Feather'
import { MemoryInfo, memoryService } from '@/modules/memories'
import { Header, coreConstants as c } from '@/modules/core'
import { Link } from 'expo-router'
import * as R from 'react-native'
import React from 'react'
import dayjs from 'dayjs'

export default function Memories() {
  const [memories, setMemories] = React.useState<MemoryInfo[]>([])

  const loadMemories = async () => {
    try {
      const response = await memoryService.getAll()
      setMemories(response)
    } catch (error) {
      console.error((error as any).message)
    }
  }

  React.useEffect(() => {
    loadMemories()
  }, [])

  return (
    <R.ScrollView className="my-2 flex-1">
      <R.View className="px-8">
        <Header toScreen="/new" isList />
      </R.View>
      <R.View className="mt-6 space-y-10">
        {memories.map((memory) => (
          <R.View key={memory.id} className="space-y-4">
            <R.View className="flex-row items-center gap-2">
              <R.View className="-ml-8 h-px w-5 bg-gray-50" />
              <R.Text className="font-alt text-xs text-gray-100">
                {dayjs(memory.createdAt).format('D[ de ]MMMM[, ] YYYY')}
              </R.Text>
            </R.View>
            <R.View className="space-y-4 px-8">
              <R.View className="aspect-video w-full rounded-lg bg-gray-400">
                <R.Image
                  source={{
                    uri: memory.coverUrl || c.placeholderImage,
                  }}
                  className="aspect-video w-full rounded-lg"
                  alt=""
                />
              </R.View>
              <R.Text className="font-body text-base leading-relaxed text-gray-100">
                {memory.excerpt}
              </R.Text>
              <Link href={'/memories/id'} asChild>
                <R.TouchableOpacity className="flex-row items-center gap-2">
                  <R.Text className="font-body text-sm text-gray-200">
                    Ler mais
                  </R.Text>
                  <Icon name="arrow-right" size={16} color="#9e9ea0" />
                </R.TouchableOpacity>
              </Link>
            </R.View>
          </R.View>
        ))}
      </R.View>
    </R.ScrollView>
  )
}
