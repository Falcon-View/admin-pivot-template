import type { AxiosRequestConfig, AxiosResponse } from 'axios'

/**
 * 实例拦截器
 */
export interface RequestInterceptors<T = AxiosResponse> {
  // 请求拦截
  // 接口请求成功
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  // 接口捕获失败
  requestInterceptorsCatch?: (err: any) => any

  // 响应拦截
  // 接口响应成功
  responseInterceptors?: (config: T) => T
  // 接口捕获失败
  responseInterceptorsCatch?: (err: any) => any
}

// 自定义传入参数
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T> // 是否传入拦截器
  showLoading?: boolean // 是否显示 loading 加载图标
}

/**
 * 取消请求接口
 */
export interface CancelRequestSource {
  [index: string]: () => void
}
