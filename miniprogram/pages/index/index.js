// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputvalue: "",
    bookshelf: []
  },

  deletebook: function (e) {
    var bid = e.currentTarget.id
    console.log(bid)
    const db = wx.cloud.database()
    db.collection('bookshelf').where({
      _id: bid
    }).remove()
    this.onLoad()
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var that = this
    const db = wx.cloud.database()
    db.collection('bookshelf').add({
      data: {
        name: e.detail.value.nameinput,
        author: e.detail.value.authinput,
        price: e.detail.value.priceinput
      },
      success: function (res) {
        console.log(res)
        that.onLoad()
        that.setData({
          inputvalue: ""
        })
      },
      fail: console.error,
      complete: console.log
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const books = wx.cloud.database().collection('bookshelf')
    books.get({
      success: res => {
        console.log(res.data)
        this.setData({
          bookshelf: res.data
        })
      },
      fail: console.error
    })
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