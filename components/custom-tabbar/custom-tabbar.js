Component({
  data: {
    active: 'home',
    cartCount: 0
  },
  methods: {
    onChange(e) {
      const value = e.detail.value
      this.setData({ active: value })
      let url = '/pages/' + value + '/' + value
      console.log(url)
      wx.reLaunch({ url }) // 或 wx.navigateTo，视页面结构决定
    },
    updateCartCount(count) {
      this.setData({ cartCount: count })
    }
  }
})
