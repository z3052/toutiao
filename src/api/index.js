import axios from 'axios'
import store from '@/store'
import router from '@/router'
// 默认配置  基准地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

axios.interceptors.request.use((config) => {
  // 拦截成功
  // 加token
  config.headers.Authorization = 'Bearer ' + store.getUser().token
  return config
}, (err) => {
  // 拦截失败 (成功的业务中出现报错)
  return Promise.reject(err)
})

// 配置一个响应拦截器（在每次响应失败的时候判断token是否失效）
axios.interceptors.response.use(res => res, err => {
  // err 获取 状态码
  if (err.response.status === 401) {
    // token失效  清除存储token  重新登录
    store.delUser()
    router.push('/login')
  }
  return Promise.reject(err)
})

export default axios
