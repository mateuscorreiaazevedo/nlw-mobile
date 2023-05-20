import { tokenUtil } from '../utils/token-util'
import Icon from '@expo/vector-icons/Feather'
import { Link, useRouter } from 'expo-router'
import { NlwLogo } from '@/assets/images'
import * as R from 'react-native'
import React from 'react'

type Props = {
  toScreen: string
  isList?: boolean
}

export function Header({ toScreen, isList }: Props) {
  const { push } = useRouter()

  async function signOut() {
    await tokenUtil.deleteToken()
    push('/')
  }

  return (
    <R.View className="flex-row items-center justify-between">
      <NlwLogo />

      <R.View className="flex-row gap-2">
        <R.TouchableOpacity
          onPress={signOut}
          className="h-10 w-10 items-center justify-center rounded-full bg-red-500"
        >
          <Icon name="log-out" size={18} color={isList ? '#000' : '#fff'} />
        </R.TouchableOpacity>

        <Link href={toScreen} asChild>
          <R.TouchableOpacity
            className={`h-10 w-10 items-center justify-center rounded-full ${
              isList ? 'bg-green-500' : 'bg-purple-500'
            }`}
          >
            <Icon
              name={isList ? 'plus' : 'arrow-left'}
              size={18}
              color={isList ? '#000' : '#fff'}
            />
          </R.TouchableOpacity>
        </Link>
      </R.View>
    </R.View>
  )
}
