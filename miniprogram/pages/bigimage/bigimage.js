// pages/bigimage/bigimage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image:''
  },

  dlimage:function() {
    var that = this
    wx.cloud.downloadFile({
      fileID: this.data.image.url,
      success: res => {
        // get temp file path
        console.log(res.tempFilePath)
        var path=res.tempFilePath
        wx.saveImageToPhotosAlbum({
          filePath: path,
          success(res) { 
            wx.showToast({
              title: '已保存到相册',
              icon: 'success',
              duration: 2000
            })
          }
        })
      },
      fail: err => {
        // handle error
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var that = this
    console.log(e)
    var id = e.id
    const db = wx.cloud.database()
    db.collection('image').where({
      _id: id
    }).get({
      success: res => {
        console.log(res.data)
        that.setData({
          image: res.data[0]
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