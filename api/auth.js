// api/auth.js

const BASE_URL = 'http://47.117.37.186:8668'

export function wxLogin(code) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}/api/login`,
      method: 'POST',
      data: { code },
      header: {
        'Content-Type': 'application/json'
      },
      success(res) {
        if (res.data.code === 0) {
          resolve(res.data.user)
        } else {
          reject(res.data.msg || '登录失败')
        }
      },
      fail(err) {
        reject(err.errMsg || '请求失败')
      }
    })
  })
}
