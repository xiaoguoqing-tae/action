<template>
<div id="snow">
    <div class="snow" v-for="(item,index) in 200" :key="index"></div>
    <div class="snowground"></div>
    <div class="circle1"></div>
    <img class="snowman" v-if="isshow1" src="../../assets/snowman.png">
    <div class="treebox" v-if="isshow1">
      <img class="tree" src="../../assets/tree.png">
    </div>
    <img class="women" v-if="isshow1"  src="../../assets/women.png">
    <img class="man" v-if="isshow1"  src="../../assets/man.png">
    <img class="dao" v-if="isshow2" src="../../assets/dao.png"> 
    <img class="die" v-if="isshow2" src="../../assets/die.png"> 
</div>
</template>

<script>
import anime from 'animejs';
export default {
    props: {
      isshow1:{
        type:Boolean,
        default:false
      },
      isshow2:{
        type:Boolean,
        default:false
      }
    },
    components: {

    },
    data() {
        return {

        };
    },
    watch:{
      isshow1(val){
        if(val){
          this.$nextTick(()=>{
            anime({
              targets: '.tree',
              translateY: 1000,
              duration: 2000,
              easing: 'easeInOutExpo'
            })
            anime({
              targets: '.snowman',
              translateY: 1000,
              duration: 3000,
              rotate:-5,
              easing: 'easeInOutExpo'
            })
            anime({
              targets: '.man',
              translateY: 1000,
              duration: 4000,
              easing: 'easeInOutExpo'
            })
            anime({
              targets: '.women',
              translateY: 1000,
              duration: 5000,
              easing: 'easeInOutExpo'
            })
          })
        }
      },
      isshow2(val){
        if(val){
          this.$nextTick(()=>{
            anime({
              targets: '.die',
              translateY: 1010,
              rotate:-25,
              duration: 2000,
              easing: 'easeInOutExpo'
            })
            anime({
              targets: '.dao',
              translateY: 1000,
              duration: 3000,
              easing: 'easeInOutExpo'
            })
          })
        }
      }
    },
    mounted() {
        
    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>
#snow{
    height: 100vh;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
    filter: drop-shadow(0 0 10px white);
}
@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.snow {
  $total: 200;
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;

  @for $i from 1 through $total {
    $random-x: random(1000000) * 0.0001vw;
    $random-offset: random_range(-100000, 100000) * 0.0001vw;
    $random-x-end: $random-x + $random-offset;
    $random-x-end-yoyo: $random-x + ($random-offset / 2);
    $random-yoyo-time: random_range(30000, 80000) / 100000;
    $random-yoyo-y: $random-yoyo-time * 100vh;
    $random-scale: random(10000) * 0.0001;
    $fall-duration: random_range(10, 30) * 1s;
    $fall-delay: random(30) * -1s;

    &:nth-child(#{$i}) {
      opacity: random(10000) * 0.0001;
      transform: translate($random-x, -10px) scale($random-scale);
      animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
    }

    @keyframes fall-#{$i} {
      #{percentage($random-yoyo-time)} {
        transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
      }

      to {
        transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
      }
    }
  }
}
.snowground{
  background: #fff;
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
}
.circle1{
  position: absolute;
  bottom: -45px;
  background: #fff;
  height: 150px;
  width: 100%;
  border-radius: 50%;
}
.snowman{
  width: 15%;
  position: absolute;
  bottom: 1000px;
  left: 0px;
  transform: rotate(-5deg);
}
.tree{
  width: 20%;
  position: absolute;
  bottom: 1000px;
  left: 40%;
}
.die{
  width: 20%;
  position: absolute;
  bottom: 1000px;
  left: 30%;
}
.dao{
  width: 10%;
  position: absolute;
  bottom: 1000px;
  left: 35%;
}
.man{
  position: absolute;
  bottom: 1000px;
  left: 35%;
}
.women{
  position: absolute;
  bottom: 1000px;
  left: 25%;
}
</style>
