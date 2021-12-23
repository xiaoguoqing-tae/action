<template>
  <div>
      <play></play>
      <full-page :options="options" id="fullpage">
          <div class="section">
              <Home></Home>
          </div>
          <div class="section">
              <Person></Person>
          </div>
          <div class="section">
              <Christmas></Christmas>
          </div>
          <div class="section">
              <Vedio></Vedio>
          </div>
      </full-page>
  </div>
</template>

<script>
import Home from './pages/Home'
import Person from './pages/Person'
import Christmas from './pages/Christmas'
import Vedio from './pages/Vedio'
import play from './components/common/play.vue'
export default {
    name: 'app',
    components:{
        Home,
        Person,
        Christmas,
        Vedio,
        play
    },
    data() {
        return {
            options: {
              sectionsColor: ["transparent","skyblue", "purple", "#233b3e"],
              anchors:['Home', 'Person','Christmas','Vedio','Storeroom','More'],
              navigation: true,
              loopBottom: true,
              easingcss3: "cubic-bezier(0.175 , 0.3 , 0.320 , 1.5)",
              controlArrowColor: "rgba(0, 0, 0, 0.1)",
              continuousVertical: true,
          }
      }
    },
    methods: {

    }
}
</script>

<style lang="scss">
    @import "./styles/base.css";
    .section {
      text-align:center;
      font-size: 3em;
    }
</style>
