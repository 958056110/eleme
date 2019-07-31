<template>
    <div>
        <!-- 搜索框 -->
        <van-search
            v-model="value"
            placeholder="搜索饿了么商家、商品名称"
            show-action
            background = "skyblue"
            label = "广州"
            >
            <div slot="action">搜索</div>
        </van-search>
        <!-- 宫格 -->
        <van-grid :column-num="5">
            <van-grid-item
                v-for="(item,index) in meslist"
                :key="index"
                :icon="item.url"
                :text="item.title"
            />
        </van-grid>
        <!-- 分割线 -->
          <van-divider>推荐商家</van-divider>
        <!-- 下拉菜单 -->
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
        <!-- 列表 -->
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
            <van-cell
                v-for="(item,index) in shoperlist"
                :key="index"
            >
            <div class = "container">
                <div class = "shop_l"><img :src="item.url" ></div>
                <div class = "shop_r">
                    <p>{{item.title}}</p>
                    <div class="pingfen">
                        <img src="" alt="">
                        <span>
                            {{item.sales}}
                        </span>
                    </div>
                    <div class = "start">
                        <div class = "start_l">
                           <span>￥20起送，夜间配送费￥2</span>
                        </div>
                        <div class = "start_r">1.70km 39分钟</div>
                    </div>
                    <div class = "des">
                        <span>{{item.des}}</span>
                    </div>
                    <div class = "manjian">
                        <span>{{item.manjian}}</span>
                    </div>
                    <div class = "tejia">
                        <span>{{item.zengsong}}</span>
                    </div>
                </div>
            </div>
           
         
            </van-cell>
        </van-list>
    </div>
</template>
<script>
export default {
    data(){
        return {
            value :"",
            //下拉菜单
             value1: 0,
             value2:0,
             meslist:[],
             option1:[{text:"综合排序",value:0},{text:"新款商品",value:1},{text:"活动商品",value:2},],
             option2:[{text:"距离最近",value:0},{text:"新款商品",value:1},{text:"活动商品",value:2},],
             shoperlist:[],
            loading: false,
            finished: false
        }
    },
        async created() {
            let meslist = await this.$axios("https://www.easy-mock.com/mock/5d40159b76bc4e7ad6696204/jiekou/food");
            this.meslist = meslist.data.data.foodlist;
            let shoperlist = await this.$axios("https://www.easy-mock.com/mock/5d40159b76bc4e7ad6696204/jiekou/shoperlist");
            this.shoperlist =shoperlist.data.data.shoperlist;
        },
    
 
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.shoperlist.push(this.shoperlist.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.shoperlist.length >= 10) {
          this.finished = true;
        }
      }, 500);
    }
  }
}
</script>
<style scoped>
 .van-divider{
     font-size: 18px;
 }
 .shop_l{
     float: left;
     width: 100px;
     height: 100px;
 }
  .shop_l>img{
     width: 100px;
     height: 100px;  
  }
 .shop_r{
     float: right;
     width: 200px;
     height: 200px;
 }
 .manjian>span{
      width: 120px;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
 }

</style>


