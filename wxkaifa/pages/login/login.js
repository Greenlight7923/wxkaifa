// pages/login/login.js
Page({
  wechatLogin: function () {
    console.log('微信登录');
  },
  qitaLogin: function () {
    
  },
  openAgreement: function () {
    wx.navigateTo({
      url: '/pages/agreement/agreement',
    });
  }
})