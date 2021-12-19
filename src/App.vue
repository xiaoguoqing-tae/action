<template>
  <div>
      <full-page :options="options" id="fullpage">
          <div class="section">
              <Home></Home>
          </div>
          <div class="section">
              <Person></Person>
          </div>
          <div class="section">
              <Photo></Photo>
          </div>
      </full-page>
  </div>
</template>

<script>
import Home from './pages/Home'
import Person from './pages/Person'
import Photo from './pages/Photo'
export default {
    name: 'app',
    components:{
        Home,
        Person,
        Photo
    },
    data() {
        return {
            options: {
              sectionsColor: ["transparent","skyblue", "purple", "yellow"],
              anchors:['Home', 'Person','Photo','Storeroom','More'],
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

<style lang="less">
    @import "./styles/base.css";
    .section {
      text-align:center;
      font-size: 3em;
    }
</style>
