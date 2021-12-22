<template>
    <div>
        <snow :isshow1="isshow1" :isshow2="isshow2"></snow>
        <div class="wrapper">
            <div class="header-wrap">
            <h1>{{title}}</h1>
        </div>
        <div class="wrapper" @click="test2">
            <button class="loader-button" style="top:50px;left:-200px;marginTop:20px">
                <span class="content">一个人过</span>
                <span class="progress"></span>
            </button>
        </div>
        <div class="wrapper" @click="test1">
            <button class="loader-button" style="top:50px;left:100px;marginTop:20px">
                <span class="content">两个人过</span>
                <span class="progress"></span>
            </button>
        </div>
</div>
    </div>
</template>

<script>
import snow from '../../components/common/snow.vue'
export default {
    props: {

    },
    components: {
        snow
    },
    data() {
        return {
            title:'Merry Christmas',
            isshow1:false,
            isshow2:false
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        test1(){
            if(this.isshow2){
                this.title = '你已经死了，跟鬼过去吧'
            }else{
                this.isshow1 = true
            }
        },
        test2(){
            if(this.isshow1){
                this.title = '分的好，死去吧'
                this.isshow1 = false
                this.isshow2 = true
            }else{
                this.isshow2 = true
                setTimeout(()=>{
                    this.title = '一个人过个锤子圣诞'
                },4000)
            }
        }
    },
};
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: inline-block;
  margin: 35px auto;
}

.header-wrap {
  display: block;
  width: auto;
  height: auto;
  padding: 0;
  text-align: center;
  font-size: 25px;
  font-family: 'Press Start 2P', cursive;
  transform: perspective(200px) rotateX(10deg);
  letter-spacing: .1em;
  user-select: none;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #004d40, 0 2px 0 #00483B, 0 3px 0 #004639, 0 4px 0 #004336, 0 5px 0 #004134, 0 6px 0 #003F32, 0 7px 0 #003D30, 0 8px 0 #003A2D, 0 9px 0 #00382B, 0 10px 0 #003528, 0 11px 0 #003225, 0 12px 0 #002F22, 0 13px 0 #002B1E, 0 14px 0 #00281C, 0 15px 0 #001F13, 0 22px 30px rgba(0, 0, 0, 0.9), 0 22px 30px rgba(0, 0, 0, 0.9), 0 22px 15px rgba(0, 0, 0, 0.9), 0 11px 15px rgba(0, 0, 0, 0.9), 0 15px 20px rgba(0, 0, 0, 0.9), 0 15px 11px rgba(0, 0, 0, 0.9), 0 16px 11px rgba(0, 0, 0, 0.9);
  transition: text-shadow .3s ease .3s,  transform .3s ease .3s, letter-spacing .3s ease .3s;
}
.header-wrap:hover {
  transition: text-shadow .33s ease,  transform .3s ease, letter-spacing .3s ease;
  text-shadow: 0 0 0 #004134, 0 1px 0 #00483B, 0 2px 0 #003528, 0 3px 3px rgba(0, 0, 0, 0.9);
  transform: translate(0px, 15px) perspective(200px) rotateX(10deg);
  letter-spacing: .125em;
}

.loader-button {
  position: relative;
  display: inline-block;
  padding: 0 60px;
  outline: none;
  border: none;
  background: #1d9650;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  font-family: 'Press Start 2P', cursive;
  transform: perspective(400px) rotateX(6deg);
  line-height: 4;
  padding: 0;
  overflow: visible;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);
  transition: color .1s ease-in .1s, transform .185s ease-in, box-shadow .15s ease-in;
}
.loader-button:active{
  color: #148544;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);
}
.loader-button .content {
  position: relative;
  display: block;
  z-index: 10;
  padding: 0 60px;
  background: #1d9650;
  transform: translateY(-6px);
  -webkit-transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  border-radius: 4px;
}
.loader-button .content:before, .loader-button .content:after {
  position: absolute;
  right: 20px;
  color: #fff;
  opacity: 0;
  -webkit-transition: opacity 0.3s 0.3s;
  transition: opacity 0.3s 0.3s;
}
.loader-button .progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0B562B;
  border-radius: 4px;
}
</style>
