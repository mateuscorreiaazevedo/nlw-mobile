import * as R from 'react-native'

import React from 'react'

type Props = {
  isPublic: boolean
  toggle: (name: string, value: any) => void
}

export const SwitchIsPublic = ({ isPublic, toggle }: Props) => {
  return (
    <R.View className="flex-row items-center gap-2">
      <R.Switch
        value={isPublic}
        onValueChange={(value) => toggle('isPublic', value)}
        thumbColor={isPublic ? '#9b79ea' : '#9e9ea0'}
        trackColor={{ false: '#28282d', true: '#372560' }}
      />
      <R.Text className="font-body text-sm text-gray-200">
        Tornar memória pública
      </R.Text>
    </R.View>
  )
}
