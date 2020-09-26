import string from './css.js' // 导入内容

const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')
let n = 1
let time = 50
let id

const player = {
  init : () => {
    demo.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    player.bindEvents()
    player.play() // 相当于let id = setInterval(run, time)
  }, // 初始化代码
  events:{
    '#btnPause':'pause', // 取消定时器
    '#btnPlay':'play', // 重新设置定时器
    '#btnSlow':'slow', //先取消定时器，再设置
    '#btnNormal':'normal',
    '#btnFast':'fast'
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)){
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  }, // 绑定事件
  run : () => {
    n += 1
    if (n > string.length) {
      window.clearInterval(id) // 取消定时器的id
      return
    }
    demo.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    demo.scrollTop = demo.scrollHeight
  },
  play : () => {
    id = setInterval(player.run, time)
  },
  pause : () => {
    window.clearInterval(id)
  },
  slow : () => {
    player.pause()
    time = 200
    player.play()
  },
  normal : () => {
    player.pause()
    time = 50
    player.play()
  },
  fast : () => {
    player.pause()
    time = 0
    player.play()
  }
}
player.init()


