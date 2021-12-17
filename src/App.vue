<template>
  <div>
      <full-page :options="options" id="fullpage">
          <div class="section">
              <h3>Section 1</h3>
          </div>
          <div class="section">
              <div class="slide">
                  <h3>Slide 2.1</h3>
              </div>
              <div class="slide">
                  <h3>Slide 2.2</h3>
              </div>
              <div class="slide">
                  <h3>Slide 2.3</h3>
              </div>
          </div>
          <div class="section">
              <h3>Section 3</h3>
          </div>
      </full-page>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            options: {
              sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
          }
      }
    },
    methods: {

    }
}
</script>

<style>
    .section {
      text-align:center;
      font-size: 3em;
    }
</style>
