
const app = getApp()
const db = wx.cloud.database({})
Page({
  
  // getUserProfile(){
  //   wx.getUserProfile({
  //     desc: "获取你的昵称，头像，地区和性别", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //     success: (res) => {
  //       console.log(123)
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     },
  //     fail: (res) => {
  //       //拒绝授权
  //       console.log("用户拒绝了授权");
  //      return;
  //    }
  //   })
  // },
  // getOpenID: async function() {
  //   // if (this.openid) {
  //   //   return this.openid
  //   // }

  //   const { result } = await wx.cloud.callFunction({
  //     name: 'login',
  //   })
  //   console.log(123)
  //   return result.openid
  // },

  onLoad: function(e){
    this.getOpenid();
    var openid = this.data.openid
    console.log("onload中测试："+openid);



  
  },

  onChange(event) {
    this.setData({ active: event.detail });
  },

  
  data: {
    // userpublish: [name[0],time[0]],
    // name:["dldkhy","chp1666","sb166666"],
    // time:["13:50","12:40","01:30"],
    // pictureNum:[2,1,1],
    // picture:[],
    openid:"",
    publish: [],
    zan:{
      value: 1,
    },
    handleQuestionTap:function(){
      wx.navigateTo({
          url:"../question/question"
      });
    },
    handleAnswerTap:function(){
      wx.navigateTo({
          url:"../answer/answer"
      })
    },

  
    onChange(event) {
      this.setData({
        value: event.detail,
      });
    },
    banners:[
      {
        picUrl:'cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/homePage/image-2.jpg',
      },
      {
        picUrl:'cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/homePage/image-1.jpg',
      },
      {
        picUrl:'cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/homePage/image-3.jpg',
      }
    ],
    
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },

  // onLoad() {
  //   if (wx.getUserProfile) {
  //     this.setData({
  //       canIUseGetUserProfile: true
  //     })
  //   }
  // },

  
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  block:function(){
    wx.navigateTo({
      url: '/pages/MyLike/MyLike',
    })
  },
  next:function(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  getOpenid: function () {

    var that = this;
    wx.cloud.callFunction({

      name: 'getOpenId',

      complete: res => {

        console.log('openid--', res.result);
        // var oldId = that.data.openId;
        // var newId = oldId.res.result.openid);
        var openid = res.result.openid;
        that.setData({
          openid : openid
        })
        console.log("openid存入data已完毕..." , that.data.openid)
        that.test();
      }

    })
    

  },
  test(){
    var openID = this.data.openid;
    console.log(openID)
    db.collection('discussion').where({
      _openid: openID
    }).get().then((res)=>{
      console.log("测试结果为：",res.data)
      const publish = res.data;
      this.setData({publish : publish})
      // console.log("publish为：");
      // console.log(this.data.publish);
      
    })
  },

})