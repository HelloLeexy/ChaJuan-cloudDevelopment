const app =getApp()
const db = wx.cloud.database();
Page({
  onShareAppMessage() {
    return {
      title: 'input',
      path: 'pages/personinfo/personinfo'
    }
  },

  data: {
    Info:[],
    openid:"",
    focus: false,
    inputValue: '',
    inputValue1: '',
    array: ['选择年级','Year1', 'Year2', 'Year3', 'Year4'],
    grade: 0,
    array1: ['选择专业','传媒英语', '城乡规划', '传播学', '电子科学与技术','电气工程及其自动化','国际事务与国际关系','广播电视学','供应链管理','国际商务英语','工业设计','国际商务','工商管理','汉语国际教育','环境科学','机械电子工程','精算学','机器人工程','建筑学','经济学','金融数学','金融英语','经济与金融','计算机科学与技术','建筑工程','会计学','人力资源管理','数字媒体艺术','数据科学与大数据技术','数字媒体技术','市场营销','生物科学','生物信息学','土木工程','通信工程','物联网工程','信息管理与信息系统','信息与计算机科学','应用统计学','影视摄影与制作','艺术与科技','应用化学','应用英语','应用数学','智能制造工程'],
    major:0,
  },




  bindPickerChange(e) {
    let value = e.detail.value;
    this.setData({
      grade : value

    })

  },

  bindPickerChange1(e) {
    let value = e.detail.value;
    this.setData({
      major : value

    })

  },

  bindPickerChange1: function (e) {
    console.log('picker1发送选择改变，携带值为', e.detail.value)
    this.setData({
      major: e.detail.value
      
    })

  },

  onReady:function(){
  //   this.setData({
  //     grade: this.data.grade,
  //     major: this.data.major
  //   })
  },
  
  pulish(){
   this.upDatagrade();
  },

  
  upDatagrade(){
    wx.showLoading({
      title: '修改中',
    })
    db.collection('personInfo').add({
      data:{
        grade :this.data.grade,
        major :this.data.major
      }
    }).then(()=>{
      wx.hideLoading();
      wx.showToast({
        title: '修改成功',
      })

    });
  },


  onLoad(){
    this.getOpenid();
    var openid = this.data.openid;
    db.collection('personInfo').where({
      _openid : openid
    }).get().then((res)=>{
      //console.log(res)
     
      this.setData({
        major : res.data.reverse()[0].major,
        grade : res.data[0].grade,
        

      })

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
        
      }

    })
    

  },



})
