
const BASE_URL = 'https://api.quanshenghuoqin.com'

export const getProductList = () => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + '/api/product/list',
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data.data)
        } else {
          wx.showToast({ title: '商品获取失败', icon: 'none' })
          reject(res)
        }
      },
      fail: reject
    })
  })
}
