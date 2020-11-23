import axios from 'axios'

const service = axios.create({
    baseURL: "https://apis.imooc.com",
    timeout: 5000
})
// 响应拦截器
service.interceptors.response.use(
    // 成功
    response => {

    },
    //失败
    // error => {
    //     return Promise.reject(error)
    // }
)

export default service