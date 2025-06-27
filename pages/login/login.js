// pages/login/login.js
import { wxLogin } from '../../api/auth'
import { setToken, setUserInfo } from '../../utils/auth'

Page({
  data: {
    loading: false
  },

  handleLogin() {
    const that = this
    that.setData({ loading: true })

    wx.login({
      success(res) {
        const code = res.code
        console.log(res.code)
        console.log(res)
        if (!code) {
          wx.showToast({ title: '登录失败', icon: 'none' })
          that.setData({ loading: false })
          return
        }

        wxLogin(code)
          .then(user => {
            setToken(user.openid) // 简化：用 openid 作为 token
            setUserInfo(user)
            console.log(user)

            wx.showToast({ title: '登录成功', icon: 'success' })
            wx.reLaunch({
              url: '/pages/home/home' // 登录后跳转首页
            })
          })
          .catch(err => {
            wx.showToast({ title: err.toString(), icon: 'none' })
            console.log(err)
          })
          .finally(() => {
            that.setData({ loading: false })
          })
      },

      fail() {
        wx.showToast({ title: 'wx.login失败', icon: 'none' })
        that.setData({ loading: false })
      }
    })
  }
})
