<template>
    <van-tabs class = "apps" v-model="active">
        <van-tab title="推荐">
            <div v-for = "(item,index) in sites" :key="index">
               <p class = "newtitle">{{item.title}}</p>
               <img :src = "item.cimg1url" width="100">
               <img :src = "item.cimg2url" width="100">
               <img :src = "item.cimg3url" width="100">
            </div>  
        </van-tab>
        <van-tab title="视频">视频</van-tab>
        <van-tab title="热点">热点</van-tab>
        <van-tab title="社会">社会</van-tab>
        <van-tab title="娱乐">娱乐</van-tab>
        <van-tab title="军事">军事</van-tab>
    </van-tabs>
</template>
<script>
import { Tab, Tabs } from 'vant';
import Vue from 'vue';
import "vant/lib/tab/style";
import "vant/lib/tabs/style";
Vue.use(Tab).use(Tabs);
export default {
     data(){
      return{
            sites: [
                { title: '马伊琍刚澄清完“新男友系高伟光”，文章又被曝放飞自我了？' ,
                cimg1url:"https://p3.pstatp.com/list/pgc-image/f704acd4fbab47cdaecc5c961313f17d" ,
                cimg2url:"https://p3.pstatp.com/list/pgc-image/9a2eefa086d14553b007e63a81211071",
                cimg3url:"https://p3.pstatp.com/list/pgc-image/d776c5fc1ec64901bef14b648c11f4ac",
                },
                { title: '马伊琍刚澄清完“新男友系高伟光”，文章又被曝放飞自我了？' ,
                cimg1url:"https://p3.pstatp.com/list/pgc-image/f704acd4fbab47cdaecc5c961313f17d" ,
                cimg2url:"https://p3.pstatp.com/list/pgc-image/9a2eefa086d14553b007e63a81211071",
                cimg3url:"https://p3.pstatp.com/list/pgc-image/d776c5fc1ec64901bef14b648c11f4ac",
                },
                 { title: '马伊琍刚澄清完“新男友系高伟光”，文章又被曝放飞自我了？' ,
                cimg1url:"https://p3.pstatp.com/list/pgc-image/f704acd4fbab47cdaecc5c961313f17d" ,
                cimg2url:"https://p3.pstatp.com/list/pgc-image/9a2eefa086d14553b007e63a81211071",
                cimg3url:"https://p3.pstatp.com/list/pgc-image/d776c5fc1ec64901bef14b648c11f4ac",
                },
      
            ]
      }
 
  } 
}

 
</script>
<style scoped>
    .apps img{
     margin-right: 10px;
    }
</style>

