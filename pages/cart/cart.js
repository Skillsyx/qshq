

Page({
  data: {
    cart: []
  },

  onShow() {
    const cart = wx.getStorageSync('cart') || [];
    this.setData({ cart });


  },

  onRemoveItem(e) {
    const id = e.currentTarget.dataset.id;
    let cart = this.data.cart;
  
    // 查找该商品在购物车中的索引
    const index = cart.findIndex(item => item.id == id);
    if (index !== -1) {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1; // 数量减 1
      } else {
        cart.splice(index, 1); // 数量为 1，删除整个商品
      }
    }
  
    // 更新缓存和页面数据
    wx.setStorageSync('cart', cart);
    this.setData({ cart });
  }
  
});
