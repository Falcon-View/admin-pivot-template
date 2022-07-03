import request from '@/utils/request'
import { Req, Res } from './types'

const $test = {
  get15DaysWeatherByArea: (data: void | Req) => {
    return request<void | Req, Res>({
      url: '/posts',
      method: 'Get',
      data,
      interceptors: {
        requestInterceptors(req) {
          console.log('接口请求拦截', 1)
          console.log(req, 111)
          return req
        },
        responseInterceptors(res) {
          console.log('接口响应拦截', 6)
          console.log(res, 666)
          return res
        },
      },
    })
  },
}
export default $test
