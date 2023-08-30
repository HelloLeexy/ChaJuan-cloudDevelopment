// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db=cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  var num=event.num;
  var page=event.page;
  var id=event.id;
 return await db.collection("common").where({
 id:id
}).skip(page).limit(num).get() 
}