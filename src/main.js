import Vue from 'vue'
import App from './App.vue'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
Vue.use(VueFullPage);
Vue.directive('drag',{
    // 指令的定义
    bind: function (el) {
      let odiv = el;   //获取当前元素
      odiv.onmousedown = function(e) {
        console.log(e.clientX,e.clientY)
        //算出鼠标相对元素的位置
        let disX = e.clientX - odiv.offsetLeft;
        let disY = e.clientY - odiv.offsetTop;

        document.onmousemove = (e) => {
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX;
          let top = e.clientY - disY;

          //绑定元素位置到positionX和positionY上面
          this.positionX = top;
          this.positionY = left;

          //移动当前元素
          odiv.style.left = left + 'px';
          odiv.style.top = top + 'px';
        };
        document.onmouseup = () => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    }
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
