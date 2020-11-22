import request from '../utils/request'


export function test(url, data) {
    return request({
        url: "/test",
        method: "get",
        params: {
            a: '123'
        },
        data: {
            name: "xfy"
        }
    })
}

// get携带参数放置 params 中
// post携带参数可放置 parms / data 中