<template>
<div class="video">
    <div class="vediolist">
        <h5>电影列表</h5>
    </div>
    <div class="screenbox">
        <div class="gan"></div>
        <div class="screen">
            <video v-if="videoshow" controls width="100%">
                <source src="../../assets/xi.mp4">
            </video>
        </div>
        <button class="button-3d-2" v-if="isshow" @click="start">开始播映</button>
    </div>
</div>
</template>

<script>
import anime from 'animejs';
export default {
    props: {

    },
    components: {

    },
    data() {
        return {
            isshow:true,
            videoshow:false
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        start(){
            this.isshow = false
            anime({
              targets: '.screen',
              height: '100%',
              duration: 7000,
              easing: 'linear'
            })
            setTimeout(()=>{
                this.videoshow = true
            },8000)
        }
    },
};
</script>

<style lang="scss" scoped>
.video {
    width: 100%;
    height: 100vh;
    .vediolist{
        margin-top: 5%;
        margin-left: 2%;
        width: 25%;
        height: 88%;
        background: chocolate;
        float: left;
        position: relative;
         /* 把超出div的部分隐藏起来 */
        overflow: hidden;
    }
    .vediolist:before, .vediolist:after {
        content: " ";
        width: 100%;
        height: 0px;
        position: absolute;
    }
    .vediolist:before {
        /* 圆点型的border ，颜色要和父视图的背景颜色一致*/
        border-top: 10px dotted #233b3e;
        /* 偏移一个半径，让圆点的一半覆盖div */
        left: 10px;
        top: -4px;
    }

    .vediolist:after {
        /* 圆点型的border */
        border-bottom: 10px dotted #233b3e;
        /* 偏移一个半径，让圆点的一半覆盖div */
        right: -10px;
        bottom: -4px;
    }
    .screenbox {
        float: right;
        width: 70%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;

        .gan {
            width: 100%;
            height: 10px;
            background: saddlebrown;
            border-radius: 10px;
        }

        .screen {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 90%;
            height: 0%;
            border-radius: 5px;
            background: rgb(240, 240, 240);
            border-right: 2px solid #000;
            border-left: 2px solid #000;
            border-bottom: 2px solid #000;
        }

        button {
            display: block;
            margin: 100px auto;
        }

        button:hover {
            cursor: pointer;
        }

        .button-3d-2 {
            position: relative;
            background: #ec0000;
            background: radial-gradient(hsl(357, 100%, 50%), hsl(0, 100%, 40%));
            font-size: 14px;
            text-shadow: 0 -1px 0 #c30707;
            color: white;
            border: 1px solid hsl(0, 100%, 20%);
            border-radius: 100%;
            height: 70px;
            width: 70px;
            z-index: 4;
            outline: none;

            box-shadow: inset 0 1px 0 hsl(0, 100%, 50%),
                0 2px 0 hsl(0, 100%, 20%),
                0 3px 0 hsl(357, 100%, 18%),
                0 4px 0 hsl(0, 100%, 16%),
                0 5px 0 hsl(357, 100%, 14%),
                0 6px 0 hsl(0, 100%, 12%),
                0 7px 0 hsl(356, 100%, 10%),
                0 8px 0 hsl(0, 100%, 8%),
                0 9px 0 hsl(0, 100%, 6%);
        }

        .button-3d-2:hover {
            background: radial-gradient(hsl(0, 100%, 45%), hrgb(179, 0, 9));
        }

        .button-3d-2:active {
            background: radial-gradient(hsl(0, 100%, 43%), hsl(0, 100%, 33%));
            top: 2px;
            box-shadow: inset 0 1px 0 hsl(0, 100%, 50%),
                0 2px 0 hsl(0, 100%, 16%),
                0 3px 0 hsl(0, 100%, 14%),
                0 4px 0 hsl(0, 100%, 12%),
                0 5px 0 hsl(0, 100%, 10%),
                0 6px 0 hsl(357, 100%, 8%),
                0 7px 0 hsl(0, 100%, 6%);
        }
    }
}
</style>
