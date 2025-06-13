Page({
  goBooking() {
    wx.navigateTo({
      url: '/pages/goods/index?mode=booking'
    })
  },
  goExpress() {
    wx.navigateTo({
      url: '/pages/goods/index?mode=express'
    })
  }
})
