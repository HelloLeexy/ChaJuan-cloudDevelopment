// miniprogram/pages/MyLike/MyLike.js
var util = require('../../utils/util')
const db = wx.cloud.database()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCollected: false,
    isDianzan: false,
    id: '',
    nickName: "",
    text: '',
    dataList: [],
    openid: "",
    publish: [],
    zan: {
      value: 1,
    },
    history: [],
    fabuzheOpen:""
  },

  onChange(event) {
    this.setData({
      active: event.detail
    });
  },
  getData1(num = 100, page = 0, id = this.data.id) {
    wx.cloud.callFunction({
      openid: '',
      name: "pinglun",
      data: {
        num: num,
        page: page,
        id: id
      }
    }).then(res => {
      var oldData = this.data.dataList
      var newData = oldData.concat(res.result.data);
      //console.log(res.result.data)
      this.setData({
        dataList: newData
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (id = this.data.id) {
    var page = this.data.dataList.length
    this.getData1(3, page, id)
  },

  onLoad: function (options) {
    this.getData1()
    if(options.index==undefined){
      console.log(options.index1,"like 63")
      const index = options.index1;
      console.log("11111:", index)
  
      const pages = getCurrentPages()
  
      const indexPage = pages[pages.length - 2];
      console.log("test")
      console.log(indexPage)
  
      const weibos = indexPage.data.dataList1;
      console.log(weibos,"7474....")
      console.log("dainf")
      console.log(weibos)
  
  
      const weibo = weibos[index];
  
      console.log(weibo)
      this.setData({
        weibo: weibo,
        id: weibos[index]._id,
        fabuzheOpen:weibos[index]._openid
        // nickName:weibos[index].nickName
        // console.log("onload中测试："+openid)
      })
      db.collection('discussion').where({
        _id: weibo._id
      }).get().then((res) => {
        //console.log("这是一次测试",res.data)
        this.setData({
          history: res.data
        })
        console.log("测试：", this.data.history)
  
        this.addHistory();
      })
    }else{
      console.log(options.index,"like 63")
      const index = options.index;
      console.log("11111:", index)
  
      const pages = getCurrentPages()
  
      const indexPage = pages[pages.length - 2];
      console.log("test")
      console.log(indexPage)
  
      const weibos = indexPage.data.dataList;
      console.log(weibos,"7474....")
      console.log("dainf")
      console.log(weibos)
  
  
      const weibo = weibos[index];
  
      console.log(weibo)
      this.setData({
        weibo: weibo,
        id: weibos[index]._id,
        fabuzheOpen:weibos[index]._openid
        // nickName:weibos[index].nickName
        // console.log("onload中测试："+openid)
      })
      db.collection('discussion').where({
        _id: weibo._id
      }).get().then((res) => {
        //console.log("这是一次测试",res.data)
        this.setData({
          history: res.data
        })
        console.log("测试：", this.data.history)
  
        this.addHistory();
      })
    }

    this.getImage()
    this.getData1()
    this.getOpenid()
    //this.checksubscribe();

  },
  checksubscribe: function () {
    db.collection('Subscrib').where({
      _openid: openid,
      id: id
    }).get('state').then((res) => {
      console.log('subscribe state:', res.data)

    })
  },
  addHistory: function () {


    db.collection('history').add({
      data: {

        viewTime: util.formatTime(new Date()),
        id: this.data.history[0]._id,
        code: this.data.history[0].code,
        image: this.data.history[0].image,
        type: this.data.history[0].type,
        year: this.data.history[0].year,
        content: this.data.history[0].content,
        openid: this.data.history[0]._openid,
        nickName: this.data.history[0].nickName,
        typeValue: this.data.history[0].typeValue,
        yearValue: this.data.history[0].yearValue,
        avatarUrl: this.data.history[0].avatarUrl,
        // 'type': this.data.history.type,
        // 'image': this.data.history.image
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
        that.test();
      }

    })


  },
  handleDianzan() {
    if (this.data.isDianzan == false) {
      this.updateToTD()
      this.setData({
        isDianzan: true
      })
    } else if (this.data.isDianzan == true) {
      this.updateToFD()
      this.setData({
        isDianzan: false
      })
    }
  },

  updateToTD() {
    db.collection('dianzan').where({
      _openid: this.data.openid,
      id: this.data.id
    }).get().then((res) => {
      console.log('TOT.........................', res.data)
      var list2 = res.data
      this.setData({
        tempt: list2[0]
      })
      if (this.data.tempt == null) {
        console.log('TOT............add')
        db.collection('dianzan').add({
          data: {
            id: this.data.id,
            state: true
          }
        })
      }
    })
    db.collection('dianzan').where({
      _openid: this.data.openid,
      id: this.data.id
    }).update({
      // data 传入需要局部更新的数据
      data: {
        // 表示将 done 字段置为 true
        state: true
      },
      success: function (res) {
        console.log('改变数据：', res.data)
      }
    })
  },

  updateToFD() {
    db.collection('dianzan').where({
      _openid: this.data.openid,
      id: this.data.id
    }).update({
      // data 传入需要局部更新的数据
      data: {
        // 表示将 done 字段置为 true
        state: false
      },
      success: function (res) {
        console.log('改变数据：', res.data)
      }
    })
  },







  updateToT() {
    db.collection('Subscrib').where({
      _openid: this.data.openid,
      id: this.data.id
    }).get().then((res) => {
      console.log('TOT.........................', res.data)
      var list2 = res.data
      this.setData({
        tempt: list2[0]
      })
      if (this.data.tempt == null) {
        console.log('TOT............add')
        db.collection('Subscrib').add({
          data: {
            id: this.data.id,
            state: true
          }
        })
      }
    })
    db.collection('Subscrib').where({
      _openid: this.data.openid,
      id: this.data.id
    }).update({
      // data 传入需要局部更新的数据
      data: {
        // 表示将 done 字段置为 true
        state: true
      },
      success: function (res) {
        console.log('改变数据：', res.data)
      }
    })
  },
  
  updateToF() {
    db.collection('Subscrib').where({
      _openid: this.data.openid,
      id: this.data.id
    }).update({
      // data 传入需要局部更新的数据
      data: {
        // 表示将 done 字段置为 true
        state: false
      },
      success: function (res) {
        console.log('改变数据：', res.data)
        wx.navigateBack({
          delta: 1,
          
        })
        wx.redirectTo({
          url: '/pages/collect/collect',
        })
      }
    })
  },
  guanzhu(){
    var stare2;
    
    console.log(this.data.fabuzheOpen,"发布者的openid")
    console.log(this.data.openid,"我的的openid")
    db.collection('guanzhu').where({
      _openid: this.data.openid,
      otherid: this.data.fabuzheOpen
    }).get().then((res) => {
      stare2=res.data
      console.log(res.data.length,"303........")
      if(res.data.length==0){
        db.collection('guanzhu').add({
          data: {
            otherid:this.data.fabuzheOpen,
            state:true
          },
          success: res => {
            wx.showToast({
              title: '关注成功',
    
            })
            wx.reLaunch({
              url: '/pages/index/index',
            },setTimeout, 50000)

    
          },
          fail: e => {
            wx.showToast({
              title: '关注错误',
            })
            console.log(e)
          }
        })
      
      }else{
          if(stare2[0].state==true){
            db.collection('guanzhu').where({
              _openid: this.data.openid,
              otherid: this.data.fabuzheOpen
            }).update({
              // data 传入需要局部更新的数据
              data: {
                // 表示将 done 字段置为 true
                state: false
              },
              success: function (res) {
                console.log('改变数据：', res.data)
                wx.showToast({
                  title: '已取消关注',
                  icon: 'none'
                })
                wx.reLaunch({
                  url: '/pages/index/index',
                },setTimeout, 50000)
              }
            })


          }else if(stare2[0].state==false){
            db.collection('guanzhu').where({
              _openid: this.data.openid,
              otherid: this.data.fabuzheOpen
            }).update({
              // data 传入需要局部更新的数据
              data: {
                // 表示将 done 字段置为 true
                state: true
              },
              success: function (res) {
                console.log('改变数据：', res.data)
                wx.showToast({
                  title: '已关注',
                  icon: 'none'
                })
                wx.reLaunch({
                  url: '/pages/index/index',
                },setTimeout, 50000)
              }
            })

          }
      }
    })
    
 


  },
  handleCollection() {
    if (this.data.isCollected == false) {
      this.updateToT()
      this.setData({
        isCollected: true
      })
    } else if (this.data.isCollected == true) {
      this.updateToF()
      this.setData({
        isCollected: false
      })
    }
  },

  test() {
    var that = this
    var openID = this.data.openid;
    db.collection('Subscrib').where({
      _openid: this.data.openid,
      id: this.data.id
    }).get().then((res) => {
      var list1 = res.data
      console.log('substate0:................', list1)
      if (list1.length != 0) {
        this.setData({
          substate: list1[0].state
        })
        console.log('substate1:................', this.data.substate)
        if (this.data.substate == true) {
          this.setData({
            isCollected: true
          })
        } else {
          this.setData({
            isCollected: false
          })
        }
        console.log('substate1:................', this.data.substate)
      }
    })
    db.collection('dianzan').where({
      _openid:this.data.openid,id:this.data.id
    }).get().then((res)=>{
      var list1 = res.data
      console.log('substate0:................',list1)
      this.setData({
        substate:list1[0].state
      })
      console.log('substate1:................',this.data.substate)
      if(this.data.substate==true){
        this.setData({
          isDianzan:true
        })
      }else{
        this.setData({
          isDianzan:false
        })
      }

    })
    console.log(openID)
    db.collection('user').where({
      _openid: openID
    }).get().then((res) => {
      console.log("nickName", res.data)
      var list = res.data
      console.log("nickName111", list)
      console.log("nickName存入data已完毕...", list[0].nickName)
      this.setData({
        nickName: list[0].nickName,
      })


    })
  },
  searchBtn(e) {
    var data = {
      id: this.data.id,
      nickName: this.data.nickName,
      pinglun: this.data.text,
      validTime: db.serverDate()
    }
    console.log(data)

    if (data.pinglun) {
      db.collection('common').add({
        data: data,
        success: res => {
          wx.showToast({
            title: '发布成功',

          })
          setTimeout(() => {
            wx.switchTab({
              url: '/pages/index/index',
            })
          }, 1000)

        },
        fail: e => {
          wx.showToast({
            title: '发布错误',
          })
          console.log(e)
        }
      })
    } else {
      wx.showToast({
        title: '请填写评论后在发布哦！',
        icon: 'none'
      })
    }
  },
  getImage: function () { //相框
    const windowWidth = wx.getSystemInfoSync().windowWidth;
    const image = windowWidth;
    const threeimage = (image - 2.5) / 3;
    const twoimage = (image - 2.5) / 2
    this.setData({
      TT: threeimage,
      two: twoimage
    })
  },
  textInput: function (e) {
    this.setData({
      text: e.detail.value
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




  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getData() {

    db.collection("discussion").doc("17453ede6094fba00802b91317df4ba4").get({
      success: res => {
        console.log(res)
        this.setData({
          dataObj: res.data
        })
      }
    })

  },

  ddd: function (event) {
    that.setData({
      autoFocus: true
    })
  },

  imitImageSize: function () {
    const windowWidth = wx.getSystemInfoSync().windowHeight;
    const weibo = windowWidth - 40;
    const twoImageSize = (weibo - 2.5) / 2;
    this.setData({
      twoImageSize: twoImageSize
    })
  },
  onImageTap:function(event){
    console.log(event)
    const dataset = event.target.dataset;
    const index = dataset.index;
    const images = this.data.weibo.image
    const current = images[index];
    wx.previewImage({
      urls: images,
      current : current
    })

  },
})