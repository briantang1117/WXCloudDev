// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  traceUser: true,
  env:'dpbrian-3glbdskq0e6ca511'
})

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {

  return new Promise((resolve,reject)=>{
    db.collection('movies').where({
      name: event.filmName
    }).get()
      .then((res)=>{
        resolve(res)
      })
      .catch((err)=>{
        reject(err)
      })
  })
}