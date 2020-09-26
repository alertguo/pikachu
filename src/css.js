const string = `.skin * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.skin *::after,
.skin *::before {
  box-sizing: border-box;
}
.skin {
  background: #ffe600;
  min-height: 50vh;
  position: relative;
}
.nose {
  border: 10px solid;
  border-color: #000000 transparent transparent;
  /* 可以有四种颜色，这里只留下上面的三角，两边的变透明 */
  border-bottom: none;
  width: 0;
  height: 0;
  position: relative;
  left: 50%;
  top: 145px;
  margin-left: -10px;
  /* 居中操作，不然就是三角形的最左边处于居中位置 */
  z-index: 10;
  /* 防止被上嘴唇覆盖 */
}
@keyframes wave{
  0%{
    transform: rotate(0deg);
  }
  33%{
    transform: rotate(5deg);
  }
  66%{
    transform: rotate(-5deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
.nose:hover{
  transform-origin: center bottom;
  /* 更改元素变形的原点为最下面中间的点 */
  animation: wave 230ms linear infinite ;
}
.arc {
  position: absolute;
  /* 相对于三角形绝对定位 */
  width: 20px;
  height: 6px;
  background: #000000;
  top: -16px;
  left: -10px;
  border-radius: 10px 10px 0 0;
}
.eye {
  border: 2px solid #000000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
}
.eye::before {
  content: '';
  /* 添加content，伪元素才看得见 */
  display: block;
  border: 3px solid #000000;
  width: 30px;
  height: 30px;
  background: #ffffff;
  border-radius: 50%;
  position: relative;
  left: 6px;
  top: 2px;
}
.eye.left {
  transform: translateX(-100px);
  /* 上面已经用margin做定位了，这里就用transform来改位置 */
}
.eye.right {
  transform: translateX(100px);
}
.mouth {
  width: 160px;
  height: 200px;
  position: absolute;
  left: 50%;
  margin-left: -80px;
  top: 170px;
}
.mouth .up {
  position: relative;
  top: -20px;
  z-index: 1;
}
.mouth .up .lip {
  position: relative;
  border: 3px solid black;
  width: 80px;
  height: 25px;
  border-top-color: transparent;
  /* 去掉矩形的上面部分 */
  border-right-color: transparent;
  /* 这里并不能完全去掉矩形右边部分，下面加个伪元素覆盖掉 */
  position: absolute;
  left: 50%;
  margin-left: -40px;
  background: #ffe600;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  transform: rotate(-15deg) translateX(-42px);
}
.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  transform: rotate(15deg) translateX(42px);
}
.mouth .up .lip::before {
  content: '';
  display: block;
  background: #ffe600;
  width: 7px;
  height: 30px;
  position: absolute;
  bottom: 0;
}
.mouth .up .lip.left::before {
  right: -6px;
}
.mouth .up .lip.right::before {
  left: -6px;
}

.mouth .down {
  height: 160px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.mouth .down .yuan1 {
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: #9b000a;
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
  height: 300px;
  width: 200px;
  position: absolute;
  left: 50%;
  bottom: -175px;
  margin-left: -100px;
  border-radius: 100px;
  background: #ff485f;
}
.face {
  border: 3px solid #000000;
  width: 88px;
  height: 88px;
  position: absolute;
  left: 50%;
  top: 200px;
  margin-left: -44px;
  border-radius: 50%;
  background: #ff0000;
}
.face.left {
  transform: translateX(-160px);
}
.face.right {
  transform: translateX(160px);
}
`
export default string; // 导出内容