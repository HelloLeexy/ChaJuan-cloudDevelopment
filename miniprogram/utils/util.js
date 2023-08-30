const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  // return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
  return [year,month,day].map(formatNumber).join('/')+' '+[hour,minute,second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0'+n
}

module.exports = {
  formatTime: formatTime
}

wx.cloud.init()

/**
 * @method login
 * @return {} promise对象，包含openid,appid
 * @desc 用户登陆
 */
const login = async () => {
  return await wx.cloud.callFunction({
    name: 'login'
  })
}