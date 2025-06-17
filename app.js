// app.js
import { isLoggedIn } from './utils/auth'

App({
  onLaunch() {
    // 本地日志记录（保留这部分没问题）
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录校验：如果没有 token，跳转登录页
    console.log('isLoggedIn', isLoggedIn())
    if (!isLoggedIn()) {
      wx.reLaunch({
        url: '/pages/login/login'
      })
    }
  },

  globalData: {
    userInfo: null
  }
})
