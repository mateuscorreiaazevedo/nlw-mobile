import { Service } from '@/modules/core'

class AuthService extends Service {
  async register(code: string) {
    const response = await this.request<{ token?: string; message?: string }>({
      url: '/register',
      body: { code },
      method: 'post',
    })

    switch (response.code) {
      case 200:
        return response.body.token
      case 400:
        throw new Error(response.body?.message)
      case 401:
        throw new Error(response.body?.message)
      default:
        throw new Error('Error na requisição')
    }
  }
}

export const authService = new AuthService()
