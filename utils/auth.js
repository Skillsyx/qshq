// utils/auth.js

const TOKEN_KEY = 'token'
const USER_INFO_KEY = 'user_info'

export function setToken(token) {
  wx.setStorageSync(TOKEN_KEY, token)
}

export function getToken() {
  return wx.getStorageSync(TOKEN_KEY)
}

export function removeToken() {
  wx.removeStorageSync(TOKEN_KEY)
}

export function setUserInfo(user) {
  wx.setStorageSync(USER_INFO_KEY, user)
}

export function getUserInfo() {
  return wx.getStorageSync(USER_INFO_KEY)
}

export function removeUserInfo() {
  wx.removeStorageSync(USER_INFO_KEY)
}

export function logout() {
  removeToken()
  removeUserInfo()
}

export function isLoggedIn() {
  return !!getToken()
}
