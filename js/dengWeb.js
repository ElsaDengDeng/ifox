var oBox = document.getElementById('row');
var oList = document.getElementsByTagName('a');
oList.addEventListener("mousenter",move,false);
oList.addEventListener("mousleave",move,false);
 function move(e){
  var target = e.target;
  console.log(target);
 }

// oBox.addEventListener("mouseenter", move, true);
//       oBox.addEventListener("mouseleave", move, true);//false在事件冒泡阶段执行

//       function move(e){
//         var target = e.target;
//         console.log(target);
//         if (target.className.toLowerCase() === 'icon-threebox') {
//          var top = target.offsetTop;
//          var bottom = top+target.clientHeight;
//          // var left = target.offsetLeft;
//          // var right = left+target.clientWidth;
//          var x = e.clientX;
//          var y = e.clientY;
//          // var sT = Math.abs(y-top);
//          // var sB = Math.abs(y-bottom);
//          // var sL = Math.abs(x-left);
//          // var sR = Math.abs(x-right);
//          var direction = Math.min(top,bottom);
//          switch (direction) {
//           case sT:
//           if (e.type.toLowerCase() === "mouseenter") {
//             target.children[2].className = "from-top";
//           }else{
//             target.children[2].className = "to-top";
//           }
//           break;
//           case sB:
//           if (e.type.toLowerCase() === "mouseenter") {
//             target.children[1].className = "from-bottom";
//           }else{
//             target.children[1].className = "to-bottom";
//           }
//           break;
//           // case sL:
//           // if (e.type.toLowerCase() === "mouseenter") {
//           //   target.children[1].className = "from-left";
//           // }else{
//           //   target.children[1].className = "to-left";
//           // }
//           // break;
//           // case sR:
//           // if (e.type.toLowerCase() === "mouseenter") {
//           //   target.children[1].className = "from-right";
//           // }else{
//           //   target.children[1].className = "to-right";
//           // }
//           // break;
//         }

//       }
//     }