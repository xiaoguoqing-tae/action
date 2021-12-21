<template>
    <div class="box">
        <div class="control">
            <img src="../../assets/pre.png">
        </div>
        <div class="control" @click="play">
            <img src="../../assets/start.png">
        </div>
        <div class="control">
            <img src="../../assets/next.png">
        </div>
        <div class="process">
            <div class="process1"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    mounted() {

    },
    methods: {
        play(){

        }
    },
};
</script>

<style scoped lang="less">
    .box{
        width: 350px;
        height: 40px;
        background:#252525;
        border-radius: 5px;
        display: flex;
        .control{
            width: 50px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width:50%;
                height:50%
            }
        }
        .process{
            flex: 1;
            display: flex;
            align-items: center;
            .process1{
                height: 10px;
                width: 95%;
                background-color: #1b1b1b;
                border-radius:10px;
                box-shadow: 0px 0px 6px 0px rgba(49, 47, 47, 0.1);
                --percent:20;
            }
            .process1::before {
                counter-reset: progress var(20, 0);
                content: counter(progress) '%\2002';
                display: block;
                height: 10px;
                width: calc(300px * 20 / 100);
                background-color: #fff;
                text-align: right;
                white-space: nowrap;
                overflow: hidden;
                border-radius:10px;
            }
        }
    }
</style>
