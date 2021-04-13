// 云函数入口文件
const cloud = require('wx-server-sdk')
var rp = require('request-promise')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {

  let url = 'http://www.thexxdd.cn/banner/'

  let movie = await rp(url)
    .then(function (res) {
      res = JSON.parse(res)
      return res
    })
    .catch(function (err) {
      return 'fail'
  });

  return {
    movie
  }
}