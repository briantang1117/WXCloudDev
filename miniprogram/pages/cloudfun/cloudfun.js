// pages/cloudfun/cloudfun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addres: '',
    minres: '',
    multires:'',
    devresd:''
  },

  formSubmit(e) {
    var that = this
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var a = Number(e.detail.value.a)
    var b = Number(e.detail.value.b)
    wx.cloud.callFunction({
      // 云函数名称
      name: 'add',
      // 传给云函数的参数
      data: {
        a: a,
        b: b,
      },
      success: function (res) {
        console.log(res.result.sum)
        that.setData({
          addres: res.result.sum
        })
      },
      fail: console.error
    })
    wx.cloud.callFunction({
      name: 'minus',
      data: {
        a: a,
        b: b,
      },
      success: function (res) {
        that.setData({
          minres: res.result.sum
        })
      },
      fail: console.error
    })
    wx.cloud.callFunction({
      name: 'multi',
      data: {
        a: a,
        b: b,
      },
      success: function (res) {
        console.log(res.result.sum)
        that.setData({
          multires: res.result.sum
        })
      },
      fail: console.error
    })
    wx.cloud.callFunction({
      name: 'devide',
      data: {
        a: a,
        b: b,
      },
      success: function (res) {
        console.log(res.result.sum)
        that.setData({
          devres: res.result.sum
        })
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