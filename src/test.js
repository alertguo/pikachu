import string from './css.js'

const player = {
  id : undefined,
  time : 50,
  ui : {
    demo : document.querySelector('#demo'),
    demo2 : document.querySelector('#demo2')
  },
  n : 1,
  events:{
    '#btnPause':'pause', // 取消定时器
    '#btnPlay':'play', // 重新设置定时器
    '#btnSlow':'slow', //先取消定时器，再设置
    '#btnNormal':'normal',
    '#btnFast':'fast'
  },
  init : () => {
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.bindEvents()
    player.play() // 相当于let id = setInterval(run, time)
  }, // 初始化代码
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)){
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  }, // 绑定事件
  run : () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id) // 取消定时器的id
      return
    }
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight // 自己滚动
  },
  play : () => {
    player.id = setInterval(player.run, player.time)
  },
  pause : () => {
    window.clearInterval(player.id)
  },
  slow : () => {
    player.pause()
    player.time = 200
    player.play()
  },
  normal : () => {
    player.pause()
    player.time = 50
    player.play()
  },
  fast : () => {
    player.pause()
    player.time = 0
    player.play()
  }
}
player.init()


