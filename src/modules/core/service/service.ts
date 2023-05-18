import axios, { AxiosInstance, AxiosResponse } from 'axios'

type HttpRequest = {
  url: string
  body?: any
  headers?: any
  params?: any
  method?: 'get' | 'post' | 'puit' | 'delete'
}

type HttpResponse<T = any> = {
  code: number
  body: T
}

export class Service {
  private api: AxiosInstance

  constructor(private baseURL = 'http://172.24.112.1:3333') {
    this.api = axios.create({
      baseURL: this.baseURL,
    })
  }

  async request<T = any>(props: HttpRequest): Promise<HttpResponse<T>> {
    const { url, body, headers, method = 'get', params } = props
    let response: AxiosResponse

    try {
      response = await this.api.request<T>({
        url,
        data: body,
        headers,
        method,
        params,
      })
    } catch (error) {
      response = (error as any).response
    }

    return {
      body: response.data,
      code: response.status,
    }
  }
}
