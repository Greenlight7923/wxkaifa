// pages/profile/profile.js
Page({
  data:{
    items: [
      {
        icon: 'dizhi.png',
        title: '地址管理',
        count: '0',
        has: '个地址',
        mark: '收货地址\n家庭地址'
      },
      {
        icon: 'pingjia.png',
        title: '意见反馈',
        count: '0',
        has: '评论反馈',
        mark: '售后评价\n厨师评价'
      },
      {
        icon: 'dingdan.png',
        title: '我的订单',
        count: '0',
        has: '个订单',
        mark: '待接单\n待付款\n历史订单'
      },
      {
        icon: 'fenlei.png',
        title: '我的收藏',
        count: '0',
        has: '个收藏',
        mark: '收藏厨师\n收藏菜品'
      }
    ],
    info:{
      address:'四川成都'
    },
    begin:function(evt){
      const idx = evt.currentTarget.dataset.index;
      if (idx == 0) {
        console.log('地址管理');
      }else if (idx == 1) {
        console.log('意见反馈');
      }else if (idx == 2) {
        console.log('我的订单');
      }
    }
  },
  login: function () {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  }
})