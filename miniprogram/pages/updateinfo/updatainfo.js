// pages/updateinfo/updatainfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filepath:''
  },

  chooseimage: function () {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log(res)
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        var timestamp = new Date().getTime()
        wx.cloud.uploadFile({
          cloudPath: 'image/' + timestamp + '.jpg',
          filePath: tempFilePaths[0], // 文件路径
          success: res => {
            // get resource ID
            console.log(res.fileID)
            that.setData({
              filepath: res.fileID
            })
            wx.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 2000
            })
          },
          fail: err => {
            // handle error
          }
        })
      }
    })
  },


  bindsubmitForm: function (e) {
    console.log(e)
    let that = this
    var file = e.detail.value
    var id = e.detail.target.id
    if (id == 1) {
      wx.cloud.callFunction({
        name: 'addfilm',
        data: {
          casts: file.casts,
          countries: file.countries,
          directors: file.directors,
          id: file.index,
          image: that.data.filepath,
          name: file.filename,
          summary: file.summary,
          type: file.type,
          year: file.year
        },
        success:res=>{
          console.log(res)
          wx.showToast({
            title: '添加成功',
          })
        },
        fail:err=>{
          console.log(err)
        }
      })

    } else if (id == 2) {

    } else if (id == 3) {

    }
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