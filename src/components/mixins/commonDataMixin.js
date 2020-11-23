

// 处理千分符号
function format(n) {
    //1、toLocaleString 只能格式化数字
    // return n.toLocaleString()
    //2、正则，replace,$&表示匹配到的值
    // const w = '1234567890'
    const reg = /\d{1,3}(?=(\d{3})+$)/g
    return `${n}`.replace(reg, '$&,')
}
function formatPercent(n) {
    return `${n}%`
}

function wrapperNmuber(o, k) {
    return o && o[k] ? `￥ ${format(o[k])}` : '￥ 0'
}

function wrapperPercent(o, k) {
    return o && o[k] ? formatPercent(o[k]) : '0%'
}

function wrapperArray(o, k) {
    return o && o[k] ? o[k] : []
}

function wrapperObjet(o, k) {
    if (o && k.indexOf('.')) {
        const keys = k.split('.')
        keys.forEach(key => {
            o = o[key]
        })
        return o
    }
    return o && o[k] ? o[k] : {}
}

export default {
    computed: {
        calScreenData() {
            return this.getScreenData();
        },
        salesToday() {
            return wrapperNmuber(this.calScreenData, 'salesToday')
        },
        salesGrowthLastDay() {
            return wrapperPercent(this.calScreenData, 'salesGrowthLastDay')
        },
        salesGrowthLastMonth() {
            return wrapperPercent(this.calScreenData, 'salesGrowthLastMonth')
        },
        orderFullYear() {
            return wrapperArray(this.calScreenData, 'orderFullYear')
        },
        orderFullYearAxis() {
            return wrapperArray(this.calScreenData, 'orderFullYearAxis')
        },
        userFullYear() {
            return wrapperArray(this.calScreenData, 'userFullYear')
        },
        userFullYearAxis() {
            return wrapperArray(this.calScreenData, 'userFullYearAxis')
        },
        orderRank() {
            return wrapperArray(this.calScreenData, 'orderRank')
        },
        userRank() {
            return wrapperArray(this.calScreenData, 'userRank')
        },
        categorData1() {
            return wrapperObjet(this.calScreenData, 'category.data1')
        },
        categorData2() {
            return wrapperObjet(this.calScreenData, 'category.data2')
        },

        calReportData() {
            return this.getReportData();
        },
        calMapScatter() {
            return this.getMapScatter();
        }
    },
    // vue3已经不能使用过滤器
    filters: {
        format(v) {
            return format(v)
        }
    },
    inject: ["getReportData", "getScreenData", "getMapScatter"],
}