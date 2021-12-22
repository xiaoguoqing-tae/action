<template>
    <div class="sec1">
        <head-nav></head-nav>
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="main">
            <left-nav></left-nav>
        </div>
    </div>
</template>

<script>
import headNav from '../Home/components/head-nav.vue'
import leftNav from '../Home/components/left-nav.vue'
export default {
    props: {

    },
    components: {
        headNav,
        leftNav
    },
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
};
</script>

<style scoped lang="scss">
    @import "../../styles/sec1.scss";
</style>
