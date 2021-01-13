const moment = require('moment')

/* 单位秒 */
const thirtySeconds = 30
const oneMinute = 60
const oneHour = 60*60
const oneDay = 60*60*24
const twoDay = 60*60*24*2
const threeDay = 60*60*24*3

const relativeTime = function (date){
    let current = new Date()
    let different = moment(current).diff(moment(date), 'seconds')
    if (different < thirtySeconds){
        return `刚刚`
    }else if(different < oneMinute){
        return `${different}秒前`
    }else if(different < oneHour){
        return `${moment(current).diff(moment(date), 'minutes')}分钟前`
    }else if (different < oneDay){
        return `${moment(current).diff(moment(date), 'hours')}小时前`
    }else if(different < twoDay){
        return `昨天 ${moment(date).format('HH:mm')}`
    }else if(different < threeDay){
        return `${moment(current).diff(moment(date), 'days')}天前`
    }else if(moment(current).isSame(date, 'year')){
        return moment(date).format('MM-DD')
    }else if(moment(current).diff(moment(date), 'years') < 5){
        return moment(date).format('YY-MM-DD')
    }else{
        return moment(date).format('YYYY-MM-DD')
    }
}

const formatDetailTime = function (date){
    let current = new Date()
    if(moment(current).isSame(date, 'year')){
        return moment(date).format('MM-DD HH:mm')
    }else if(moment(current).diff(moment(date), 'years') < 5){
        return moment(date).format('YY-MM-DD HH:mm')
    }else{
        return moment(date).format('YYYY-MM-DD HH:mm')
    }
}

export default {
    relativeTime,
    formatDetailTime
}
