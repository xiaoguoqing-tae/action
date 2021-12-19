<template>
    <div class="left-nav">
        <div class="left-nav-img">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>

<style scoped lang="less">
.left-nav{
    width: 200px;
    height: 100%;
    background: rgb(221, 229, 209);
    display: flex;
    justify-content: center;
    border-radius: 3%;
    &-img{
        width: 80px;
        height: 80px;
        background: url("../../../assets/myphoto.jpg");
        background-size:100% 100%;
        border-radius: 50%;
        margin-top: 10px;
    }
}
</style>
