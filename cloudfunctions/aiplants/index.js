// 云函数入口文件
const cloud = require('wx-server-sdk')
var AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;

// 设置APPID/AK/SK
var APP_ID = "24064641";
var API_KEY = "TzHTmhSrIWVsz83UN9Wibdwo";
var SECRET_KEY = "F1YAGrGH7rLFRxpvRaRn90GZCkEUbYP9";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);

var options = {};
options["baike_num"] = "5";

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let plant = await aiplant()
  return {
    plant
  }

  function aiplant(){
    return new Promise((resolve,reject)=>{
      client.plantDetect(event.imagebase64, options)
      .then(res=>{
        resolve(res)
      }).catch(error=>{
        console.log(error)
      })
    })
  }
}