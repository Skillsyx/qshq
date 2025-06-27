// pages/goods/goods.js
import { getProductList } from "../../utils/productApi";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList: [],
    cartCount:0
  },
 

  getCartCount() {
    const cart = wx.getStorageSync('cart') || [];
    this.setData({
      cartCount: cart.length
    });
    console.log(this.cartCount)
  },
  goToCart(){
    wx.switchTab({
      url: '/pages/cart',
    })
  },

  onAddToCart(e) {
    const productId = e.currentTarget.dataset.id; // ✅ 拼写修正
  
    const product = this.data.productList.find(p => p.id == productId);
    if (!product) return;
  
    let cart = wx.getStorageSync('cart') || [];
  
    // ✅ 判断是否已存在该商品
    const index = cart.findIndex(item => item.id == productId);
    if (index !== -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    // ✅ 存入缓存
    wx.setStorageSync('cart', cart);
    console.log(wx.getStorageSync('cart'))

  
    // ✅ 提示
    wx.showToast({
      title: '已加入购物车',
      icon: "success",
      duration: 1000
    });
  },
  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    // 获取商品列表
      getProductList()
      .then(data => this.setData({ productList: data }))
      .then(() => console.log('商品加载成功:', this.data.productList))
      
      .catch(err => console.error('商品加载失败:', err))

      console.log(this.data.productList)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

    this.getCartCount()

    if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
      this.getTabBar().setData({
        active: 'goods'
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})