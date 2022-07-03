import { AxiosResponse } from 'axios'
import Request from './axios'
import type { RequestConfig } from './axios/types'

interface FWLResponse<T> {
  statusCode: number
  desc: string
  result: T
}

interface FWLRequestConfig<T, R> extends RequestConfig<FWLResponse<R>> {
  data?: T
}

const request = new Request({
  baseURL: 'http://jsonplaceholder.typicode.com',
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 实例请求拦截器
    requestInterceptors: (config) => {
      console.log('实例请求拦截器', 2)
      console.log(config, 222)
      return config
    },
    // 实例响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      console.log('实例响应拦截器', 4)
      console.log(result, 444)
      return result
    },
  },
})

/**
 * @description: 函数描述：发起请求前对 Http 请求进行处理，然后进入接口请求拦截器
 * @interface D 请求参数的 interface
 * @interface T 响应结构的 intercept
 * @param {FWLRequestConfig} config 无论 GET 还是 POST 请求都使用 data
 * @returns {Promise}
 */
const fwlRequest = <D = any, T = any>(config: FWLRequestConfig<D, T>) => {
  console.log(config, 89884884888588)
  const { method = 'GET' } = config
  if (method.toLowerCase() === 'get' || method.toLowerCase() === 'delete') {
    config.params = config.data
  }
  // return 1
  return request.request<FWLResponse<T>>(config)
}

// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url)
}
// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest()
}

export default fwlRequest
