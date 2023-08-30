// pages/search/search.js
const db = wx.cloud.database()
const app = getApp()
var Id 



Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
    historyList:[],
    dataList: [],




  },
  hanleFocus(){
    wx.getStorage({
      key: 'searchHistory',
      success:(res)=>{
        this.setData({
          historyList : res.data
        });
      }
    })
  },


  handleConfirm(ev){
    //console.log(ev.detail.value)
    //储存输入的数据
    let value = ev.detail.value;
    let cloneHistoryList = [...this.data.historyList];
    cloneHistoryList.unshift(value);
    wx.setStorage({
      data: [...new Set(cloneHistoryList)],
      key: 'searchHistory',
    })
    this.changeSearchList(value);


    //将输入的数据赋值给inputValue
    this.setData({
      inputValue: ev.detail.value
    })
    //console.log('handleConfirm：'+this.data.inputValue)

    // // 回车/搜索后跳转
    // let data;
    // let localStorageValue = [];
    // if(this.data.inputValue != ''){
    //   //调用API从本地缓存中获取数据
    //   var searchData = wx.getStorageSync('searchData') || []
    //   searchData.push(this.data.inputValue)
    //   wx.setStorageSync('searchData', searchData)
     
    // }
    // else{
    //   console.log('输入为空')
    // }
  },

  //清空缓存的数据
  clearHistory(){
    wx.removeStorage({
      key: 'searchHistory',
      success:(res)=>{
        
        this.setData({
          historyList : []
        })
      }
    })
  },
  //当用户输入字符后点击恢复默认状态
  resetSearch: function (e) {
    this.setData({
      inputValue : '',
    });
  },

  //搜索
  changeSearchList(value){

    db.collection('discussion').where({
      
      code : db.RegExp({
        regexp: value,
        options: 'i'
      })
    }).get().then((res)=>{
      this.setData({   
        dataList : res.data.reverse()
      });
      Id = this.data.dataList[0]._openid
      console.log(Id)
    });
    // console.log(this.data.searchList[0]._openid)
    // this.data.id.join(db.collection('discussion_openid')),
    //console.log("wwww: "+db.collection('discussion').field({_openid:true}))
    // console.log(Id)
  },
  bu:function(){
    
  },

  hanleHistoryItem(ev){
    let value = ev.target.dataset.text;
    //console.log( value )
    this.changeSearchList(value);
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