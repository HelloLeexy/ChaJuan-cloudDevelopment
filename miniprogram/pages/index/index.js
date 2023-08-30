// index.js
// 获取应用实例
const app = getApp()
const db = wx.cloud.database()

Page({
  data: {
    active: 0,
    dataList: [],
    dataList1: [],
    openid:"",
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    zan: {
      value: 1,
    },

    banners: [{
        picUrl: 'cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/homePage/image-2.jpg',
      },
      {
        picUrl: 'cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/homePage/image-1.jpg',
      },
      {
        picUrl: 'cloud://cloud1-6g47vna66fd678fb.636c-cloud1-6g47vna66fd678fb-1305250544/homePage/image-3.jpg',
      }
    ],
  },
  // mylike:function(event){
  //   wx.navigateTo({
  //     url: '/pages/MyLike/MyLike',
  //   })
  // },
  handleQuestionTap: function () {
    wx.navigateTo({
      url: "../question/question"
    });
  },
  handleAnswerTap: function () {
    wx.navigateTo({
      url: "../answer/answer"
    })
  },
  onChange(event) {
    this.setData({
      value: event.detail,
    });
  },
  onChange(event) {
    this.setData({
      active: event.detail
    });
  },
  handleCollection() {
    let isCollected = !this.data.isCollected

    this.setData({
      isCollected
    })
    wx.showToast({
      title: isCollected ? '收藏成功' : '取消收藏',
      icon: 'success'
    })

    let {
      index
    } = this.data;
    wx.getStorage({
      key: 'isCollected',
      success: (data) => {
        let obj = data.data;
        obj[index] = isCollected;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success: () => {

          }
        });
      }
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
          openid: openid
        })
        console.log("openid存入data已完毕...", that.data.openid)
      }

    })


  },
  onLoad() {
    
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
 
  },

  //  getData(num=5,page=0){
  //   wx.cloud.callFunction({
  //     name:"demoGetList",
  //     data:{
  //       num:num,
  //       page:page
  //     }
  //   }).then(res=>{
  //     var oldData=this.data.dataList
  //     var newData=oldData.concat(res.result.data);
  //     //console.log(res.result.data)
  //     this.setData({
  //       dataList:newData
  //     })
  //   })
  //  },
  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (event) {
    this.message()
  },
  onLoad: function (options) {
    // this.message()
    this.getImage()
    this.getOpenid()
    this.guanzhuxinxi()
  },

  guanzhuxinxi:function(){

    db.collection('guanzhu').where({
      _openid: this.data.openid,
      state: true
    }).get().then((res) => {
      var list1 = res.data
      var list = [list1.length]
      for (var i = 0; i < list1.length; i++) {
        list[i] = list1[i].otherid
      }
      console.log('substate0:................', list)
      // this.message1(list, 0)
      this.suibian(list,0)
    })
  },
  suibian:function(list,start){
    var a = 0;
    for (a = 0; a < list.length; a++) {
      this.laqu(list[a], a)
    }
  },
  laqu: function (info, num) {
    var size = this.data.dataList1.length
    if (size != 0) {
      this.data.dataList1.skip(size)
    }
    db.collection('discussion').where({
      _openid: info
    }).get().then((res) => {
      var old_data = this.data.dataList1
      var new__data = res.data.concat(old_data);

      this.setData({
        dataList1: new__data
      })
      console.log(this.data.dataList1, '7878787...........................')
    });
  },
  message: function (start = 0) {
    let promist = db.collection("discussion");
    if (start > 0) {
      promist = promist.skip(start);
    }
    promist.limit(5).orderBy("validTime", "desc").get().then(res => {
      const Message_data = res.data;
      let New_message = []
      if (start > 0) {
        New_message = this.data.dataList.concat(Message_data);
      } else {
        New_message = Message_data
      }
      this.setData({
        dataList: New_message
      })
    })

  },
  onReachBottom: function (event) {
    this.message(this.data.dataList.length);
  },
  onPullDownRefresh: function () {
    this.message(0);
  },



  /**
   * 页面上拉触底事件的处理函数
   */
  // onReachBottom: function () {
  //   var page = this.data.dataList.length
  //   this.getData(3, page)
  // },



  getImage: function () { //相框

    const windowWidth = wx.getSystemInfoSync().windowWidth;
    const image = windowWidth - 70;
    const threeimage = (image - 2.5) / 3;
    const twoimage = (image - 2.5) / 2
    this.setData({
      TT: threeimage,
      two: twoimage
    })
  },





  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },



  block: function () {
    wx.navigateTo({
      url: '/pages/MyLike/MyLike',
    })
  },
  next: function () {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },


  // getPullDownData(num = 5, page = 0) {
  //   wx.cloud.callFunction({
  //     name: "demoGetList",
  //     data: {
  //       num: num,
  //       page: page
  //     }
  //   }).then(res => {
  //     var old_data = this.data.dataList
  //     var new__data = res.result.data.concat(old_data);
  //     this.setData({
  //       dataList: new__data
  //     })
  //   })
  // },






  // getData(num = 5, page = 0) {
  //   wx.cloud.callFunction({
  //     name: "demoGetList",
  //     data: {
  //       num: num,
  //       page: page
  //     }
  //   }).then(res => {
  //     var oldData = this.data.dataList
  //     var newData = oldData.concat(res.result.data);
  //     // console.log(newData)
  //     this.setData({
  //       dataList: newData

  //     })
  //   })
  // },



})