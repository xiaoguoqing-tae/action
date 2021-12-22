<template>
    <div class="head-nav">
        <ul>
            <li v-for="(item,index) in menulist" @mouseover="mouseover" @mouseout="mouseout" :key="index" :class="index==0&&num==1?'li-active':''">
                <a :href="'#'+item.English">
                    <span>{{item.English}}</span>
                    <span>{{item.Chinese}}</span>     
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {

    },
    components: {

    },
    data() {
        return {
            menulist:[{
                'English':'Home',
                'Chinese':'主页'
            },{
                'English':'Person',
                'Chinese':'简介'
            },
            {
                'English':'Christmas',
                'Chinese':'圣诞节专题'
            },{
                'English':'Photo',
                'Chinese':'照片集'
            },{
                'English':'Storeroom',
                'Chinese':'储物间'
            },{
                'English':'More',
                'Chinese':'更多'
            }],
            num:1
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        toPage(url){
            this.$router.push({name:url})
        },
        mouseover(){
            this.num = -1
        },
        mouseout(){
            this.num = 1
        }
    },
};
</script>

<style scoped lang="scss">
    .head-nav{
    width: 100%;
    height: 60px;
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    ul{
        display: flex;
        height: 60px;
        list-style: none;
        justify-content: center;
        align-items: center;
            li{
                width: 15%;
                height: 60px;
                cursor: pointer;
                color: #fff;
                transition: 0.5s ease-in-out;
                &:hover{
                    background-color: rgba(255, 255, 255, 0.8);
                    color: darkblue;
                    border-top: 3px solid #426696;
                }
                a{
                    display: flex;
                    flex-direction: column;
                    span{
                        line-height: 28px;
                        font-size: 16px;
                        font-family: "幼圆";
                        font-weight: 400;
                    }
                }
            }
            .li-active{
                    background-color: rgba(255, 255, 255, 0.8);
                    color: darkblue;
                    border-top: 3px solid #426696;
            }
    }
} 
</style>
