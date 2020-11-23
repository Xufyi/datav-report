import request from '../utils/request'
import wordCloud_data from '@/mock/wordCloud.json'
import screen_data from '@/mock/screenData.json'
import mapScatter_data from '@/mock/mapScatter.json'

// 没有接口，拿前端mocK数据代替
export function wordCloud() {
    return Promise.resolve(wordCloud_data)
}
export function screenData() {
    return Promise.resolve(screen_data)
}
export function mapScatter() {
    return Promise.resolve(mapScatter_data)
}

// get携带参数放置 params 中
// post携带参数可放置 parms / data 中