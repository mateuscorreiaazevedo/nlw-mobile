import * as R from 'react-native'
import React from 'react'

type Props = {
  content: string
  setContent: (name: string, value: any) => void
}

export const ContentArea = ({ content, setContent }: Props) => {
  return (
    <R.TextInput
      multiline
      value={content}
      textAlignVertical="top"
      onChangeText={(value) => setContent('content', value)}
      className="flex-1 p-0 font-body text-lg text-gray-50"
      placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
      placeholderTextColor="#56565a"
    />
  )
}
