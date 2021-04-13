// pages/request/request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    currentTab: 0
  },
  switchNav: function (e) {
    console.log(e)
    var index = e.target.id
    if (this.data.currentTab == index)
      return;
    else {
      this.setData({
        currentTab: index
      })
    }
  },

  loadMovies: function(){
    var that = this
    wx.cloud.callFunction({
      name: 'reqfun',
      success: function (res) {
        console.log(res.result.movie)
        var movieres = res.result.movie
        that.setData({
          movies: movieres
        })
      }
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
    this.loadMovies()
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