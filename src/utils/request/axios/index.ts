import axios, { AxiosResponse } from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type {
  CancelRequestSource,
  RequestConfig,
  RequestInterceptors,
} from './types'
// 引入pinia epic-spinners Loading 加载动画效果
import { useLoadingStoreWithOut } from '@/store/modules/loading'
const loadingStore = useLoadingStoreWithOut()

// loading 默认值
const DEFAULT_LOADING = true

class Request {
  // axios 实例
  protected instance: AxiosInstance
  // 拦截器对象
  interceptorsObj?: RequestInterceptors<AxiosResponse>
  /**
   * 存放取消方法的集合
   * 在创建请求后，将取消请求方法 push 到该集合中
   * 封装一个方法，可以取消请求，传入 url: string|string[]
   * 在请求之前判断同一 URL 是否存在，如果存在就取消请求
   */
  cancelRequestSourceList?: CancelRequestSource[]
  /**
   * 存放所有请求 URL 的集合
   * 请求之前需要将 url push 到该集合中
   * 请求完毕后将 url 从集合中删除
   * 添加在发送请求之前完成，删除在响应之后删除
   */
  requestUrlList?: string[]
  // 是否展示 loading 效果
  showLoading?: boolean

  // 使用自定义 axios 中的 config 配置
  constructor(config: RequestConfig) {
    // 数据初始化
    this.requestUrlList = []
    this.cancelRequestSourceList = []
    // 初始化默认值，若 config 有即用，若没有使用默认值
    this.showLoading = config.showLoading || DEFAULT_LOADING

    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors

    /**
     * 拦截器执行顺序
     * 接口请求 -> 实例请求 -> 全局类请求 -> 实例响应 -> 全局类响应 -> 接口响应
     */
    // 全局 - 类拦截器 - 请求拦截器
    this.instance.interceptors.request.use(
      (req: AxiosRequestConfig) => {
        // loading 图标加载
        if (this.showLoading) {
          loadingStore.open()
          // 当为 true 时，显示 loading 图标
        }
        // console.log('全局请求拦截器', 3)
        // console.log(req, 333)
        return req
      },
      (err: any) => err
    )

    // 实例拦截器 - 请求拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    )

    // 实例拦截器 - 响应拦截器
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    )

    // 全局 - 类拦截器 - 响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        // 响应成功，关闭 Loading
        setTimeout(() => {
          loadingStore.close()
        }, 500)
        // loadingStore.close()
        // console.log('全局响应拦截器', 5)
        // console.log(res, 555)
        return res.data
      },
      (err: any) => {
        // 响应失败，关闭 Loading
        loadingStore.close()
        return err
      }
    )
  }

  /**
   * @description: 获取指定 url 在 cancelRequestSourceList 中的索引
   * @param {string} url
   * @returns {number} 索引位置
   */
  private getSourceIndex(url: string): number {
    return this.cancelRequestSourceList?.findIndex(
      (item: CancelRequestSource) => {
        return Object.keys(item)[0] === url
      }
    ) as number
  }

  /**
   * @description: 删除 requestUrlList 和 cancelRequestSourceList
   * @param {string} url
   * @returns {*}
   */
  private delUrl(url: string) {
    const urlIndex = this.requestUrlList?.findIndex((u) => u === url)
    const sourceIndex = this.getSourceIndex(url)
    // 删除 url 和 cancel 方法
    urlIndex !== -1 && this.requestUrlList?.splice(urlIndex as number, 1)
    sourceIndex !== -1 &&
      this.cancelRequestSourceList?.splice(sourceIndex as number, 1)
  }

  // 接口拦截器
  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 接口请求拦截器
      // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      // 单独处理接口配置传递 showLoading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      const url = config.url
      // url 存在保存取消请求方法和当前请求 url
      if (url) {
        this.requestUrlList?.push(url)
        // 在axios0.22起，对CancelToken已经弃用，需要改成  AbortController 文档：https://axios-http.com/docs/cancellation
        config.cancelToken = new axios.CancelToken((c) => {
          this.cancelRequestSourceList?.push({
            [url]: c,
          })
        })
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 接口响应拦截器
          // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          // 将结果 resolve 返回出去
          resolve(res)
        })
        .catch((err: any) => {
          reject(err)
        })
        .finally(() => {
          this.showLoading = DEFAULT_LOADING
          url && this.delUrl(url)
        })
    })
  }

  // 取消请求
  cancelRequest(url: string | string[]) {
    if (typeof url === 'string') {
      // 取消单个请求
      const sourceIndex = this.getSourceIndex(url)
      sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][url]()
    } else {
      // 存在多个需要取消请求的地址
      url.forEach((u) => {
        const sourceIndex = this.getSourceIndex(u)
        sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][u]()
      })
    }
  }

  // 取消全部请求
  cancelAllRequest() {
    this.cancelRequestSourceList?.forEach((source) => {
      const key = Object.keys(source)[0]
      source[key]()
    })
  }
}

export default Request
