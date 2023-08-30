Page({
  data: {
    mainActiveIndex: 0,
    mainActiveIndexs: 0,
    activeId: [],
    activeIds:[],
    items: [
      {
        // 导航名称
        text:'2017-2018',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        // dot: true,
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '期中试卷',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },
          {
            text: '期末试卷',
            id: 2,
          },
          {
            text: '期末补考试卷',
            id: 3,
          },
        ],
      },
      {
        // 导航名称
        text:'2018-2019',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '期中试卷',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
          {
            text: '期末试卷',
            id: 5,
          },
          {
            text: '期末补考试卷',
            id: 6,
          },
        ],
      },

      {
        // 导航名称
        text:'2019-2020',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '期中试卷',
            // id，作为匹配选中状态的标识
            id: 7,
            // 禁用选项
            // disabled: true,
          },
          {
            text: '期末试卷',
            id: 8,
          },
          {
            text: '期末补考试卷',
            id: 9,
          },
        ],
      },

    ]
 
  },



  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
    });
  },

  onClickItem({ detail = {} }) {
    const activeIds = this.data.activeIds === detail.id ? null : detail.id;

    this.setData({ activeIds });
    if (detail.id == 3){
      wx.navigateTo({
        url: '/pages/RE1/RE1',
      })
    }
    if(detail.id == 2){
      wx.navigateTo({
        url: '/pages/FIN1/FIN1',
      })
    }
    if(detail.id == 1){
      wx.navigateTo({
        url: '/pages/Mid17/Mid17',
      })
    }
    if(detail.id == 4){
      wx.navigateTo({
        url: '/pages/Mid18/Mid18',
      })
    }
    if(detail.id == 5){
      wx.navigateTo({
        url: '/pages/FIN2/FIN2',
      })
    }

    if(detail.id == 6){
      wx.navigateTo({
        url: '/pages/RE2/RE2',
      })
    }

    if(detail.id == 7){
      wx.navigateTo({
        url: '/pages/Mid19/Mid19',
      })
    }

    if(detail.id == 8){
      wx.navigateTo({
        url: '/pages/FIN3/FIN3',
      })
    }

    if(detail.id == 9){
      wx.navigateTo({
        url: '/pages/RE3/RE3',
      })
    }
    
  },


  
});