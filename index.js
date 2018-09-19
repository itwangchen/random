//定义9种颜色,放入数组
var colors = [
  "#408d07",
  "#781139",
  "#00a5dc",
  "#bc3845",
  "#2cdcbe",
  "#35b8fc",
  "#0ccfdf",
  "#0204f4",
  "#f40403"
];
var lis = document.querySelectorAll(".colorbox>li");
//随机选出三个li,随机三种颜色
//书写随机函数
function getColor() {
  //定义函数调用初始化颜色
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.background = "#ffa600";
  }
  //定义初始次数
  var tmp = 0;
  //定义li/颜色,索引
  var index = 0;
  var colorIndex = 0;
  //定义数组存储li/颜色位置
  var arr = [];
  var arrColor = [];
  //定义循环进行li/颜色,随机
  while (tmp < 3) {
    //li位置
    index = parseInt(Math.random() * lis.length);
    //颜色位置
    colorIndex = parseInt(Math.random() * lis.length);
    //选择li/颜色,不重复
    if (arr.indexOf(index) == -1 && arrColor.indexOf(colorIndex) == -1) {
      lis[index].style.background = `${colors[colorIndex]}`;
    } else {
      //li/颜色重复时,进行下次循环
      continue;
    }
    //li/颜色,位置添加进数组,进行保存
    arrColor[tmp] = colorIndex;
    arr[tmp] = index;
    //tmp计数
    tmp++;
  }
}
//定义定时器标示符
var mak;
//开始闪按钮点击事件
document.querySelector(".st").onclick = function() {
  //默认清理定时器,防止队列问题
  clearInterval(mak);
  //启动定时器,每隔1s调用li/颜色随机函数
  mak = setInterval(function() {
    getColor();
  }, 1000);
};
//结束闪按钮点击事件
document.querySelector(".end").onclick = function() {
  //点击停止随机色的变化,清理定时器
  clearInterval(mak);
  //恢复默认背景色
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.background = "#ffa600";
  }
};
