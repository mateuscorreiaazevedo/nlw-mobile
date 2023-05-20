import { Service, tokenUtil } from '@/modules/core'
import { MemoryInfo } from '../types/memories'

type FormMemoryProps = {
  content: string
  coverUrl: string
  isPublic: string | null | boolean
}

class MemoryService extends Service {
  async uploadFile(fileForUpload: FormData) {
    const response = await this.request<{ fileUrl: string }>({
      url: '/upload',
      method: 'post',
      body: fileForUpload,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    switch (response.code) {
      case 200:
        return response.body?.fileUrl
      case 400:
        throw new Error('Falha na requisição.')
      default:
        throw new Error('Falha no servidor, tente novamente mais tarde.')
    }
  }

  async createMemory({ content, coverUrl, isPublic }: FormMemoryProps) {
    const token = await tokenUtil.getToken()
    const response = await this.request({
      url: '/memories',
      method: 'post',
      body: {
        content,
        coverUrl,
        isPublic,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    switch (response.code) {
      case 200:
        return response.body?.fileUrl
      default:
        throw new Error('Falha no servidor, tente novamente mais tarde.')
    }
  }

  async getAll() {
    const token = await tokenUtil.getToken()
    const response = await this.request<{ data: MemoryInfo[] }>({
      url: '/memories',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    switch (response.code) {
      case 200:
        return response.body.data
      default:
        throw new Error('Falha no servidor, tente novamente mais tarde.')
    }
  }
}

export const memoryService = new MemoryService()
