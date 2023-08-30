Page({
  data: {
    mainActiveIndex: 0,
    mainActiveIndexs: 0,
    activeId: [],
    activeIds:[],
    items: [
      {
        // 导航名称
        text:'电子信息与计算机科学',
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
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
          
        ],
      },


      {
        // 导航名称
        text:'电气工程及其自动化',
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
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 5,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 6,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 7,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 8,
            // 禁用选项
            // disabled: true,
          },
        ],
      },


      {
        // 导航名称
        text:'城乡规划',
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
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 9,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 10,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 11,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 12,
            // 禁用选项
            // disabled: true,
          },
        ],
      },


      {
        // 导航名称
        text:'传播学',
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
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },


      {
        // 导航名称
        text:'电子科学与技术',
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
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },


      {
        // 导航名称
        text:'传媒英语',
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
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },


      {
        // 导航名称
        text:'国际事务与国际关系',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },


      {
        // 导航名称
        text:'广播电视学',
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
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },
      
      


      {
        // 导航名称
        text:'供应链管理',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'国际商务英语',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'工业设计',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'国际商务',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'工商管理',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'汉语国际教育',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'环境科学',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'机械电子工程',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'精算学',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'机器人工程',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },
      
      {
        // 导航名称
        text:'建筑学',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'经济学',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'金融数学',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'金融英语',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'经济与金融',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'计算机科学与技术',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'建筑工程',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'会计学',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'人力资源管理',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'数字媒体艺术',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'数据科学与大数据技术',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'数字媒体技术',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'市场营销',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'生物科学',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'生物信息学',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'土木工程',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'通信工程',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'物联网工程',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'信息管理与信息系统',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'信息与计算科学',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'影视摄影与制作',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'艺术与科技',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'应用化学',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'应用英语',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'应用数学',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
          },
        ],
      },

      {
        // 导航名称
        text:'智能制造工程',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: null,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '第一学年',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第二学年',
            // id，作为匹配选中状态的标识
            id: 2,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第三学年',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
            // disabled: true,
          },

          {
            // 名称
            text: '第四学年',
            // id，作为匹配选中状态的标识
            id: 4,
            // 禁用选项
            // disabled: true,
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
    if (detail.id == 1){
      wx.navigateTo({
        url: '/pages/ics1/ics1',
      })
    }
    if(detail.id == 2){
      wx.navigateTo({
        url: '/pages/ics2/ics2',
      })
    }
    if(detail.id == 3){
      wx.navigateTo({
        url: '/pages/ics3/ics3',
      })
    }
    if(detail.id == 4){
      wx.navigateTo({
        url: '/pages/ics4/ics4',
      })
    }
    if(detail.id == 5){
      wx.navigateTo({
        url: '/pages/ba1/ba1',
      })
    }

    if(detail.id == 6){
      wx.navigateTo({
        url: '/pages/ba2/ba2',
      })
    }

    if(detail.id == 7){
      wx.navigateTo({
        url: '/pages/ba3/ba3',
      })
    }

    if(detail.id == 8){
      wx.navigateTo({
        url: '/pages/ba4/ba4',
      })
    }

    if(detail.id == 9){
      wx.navigateTo({
        url: '/pages/beng1/beng1',
      })
    }

    if(detail.id == 10){
      wx.navigateTo({
        url: '/pages/beng2/beng2',
      })
    }

    if(detail.id == 11){
      wx.navigateTo({
        url: '/pages/beng3/beng3',
      })
    }

    if(detail.id == 12){
      wx.navigateTo({
        url: '/pages/beng4/beng4',
      })
    }
    
  },


  
});