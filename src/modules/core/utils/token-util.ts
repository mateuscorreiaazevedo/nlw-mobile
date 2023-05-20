import * as Store from 'expo-secure-store'

export const tokenUtil = {
  getToken: async () => {
    return await Store.getItemAsync('auth.token')
  },
  setToken: async (value: string) => {
    return await Store.setItemAsync('auth.token', value)
  },
  deleteToken: async () => {
    return await Store.deleteItemAsync('auth.token')
  },
}
