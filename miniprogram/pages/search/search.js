// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: []
  },
  formSubmit(e) {
    this.setData({
      books: []
    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var that = this
    const db = wx.cloud.database()
    db.collection('bookshelf').where({
      name: e.detail.value.searchinput
    }).get({
      success: res => {
        console.log(res.data)
        that.setData({
          books: res.data
        })
        that.onLoad()
      },
      fail: console.error
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})