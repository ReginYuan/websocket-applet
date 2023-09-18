// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    ctx: '你好'
  },
  ipt(e) {
    this.setData({
      ctx: e.detail.value
    })
  },
  // 发送信息
  sendMessage() {
    var obj = JSON.stringify({
      ctx: this.data.ctx
    })
    wx.sendSocketMessage({
      data: obj,
    })
  },
  onLoad() {
    // 建立链接
    wx.connectSocket({
      url: 'ws://127.0.0.1:8282',
      success: res => {
        console.log('res', res)
      }
    })
    // 监听信息发送
    wx.onSocketMessage((res) => {
      console.log('收到的信息', res)
    })
  }
})