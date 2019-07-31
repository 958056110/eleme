<template>
    <div class="weui-flex">
            <div  class="weui-flex__item">
                <div class="placeholder xin">
                    <img src="../assets/logo_l.png" alt="">
                </div>
            </div>
            <div class="weui-flex__item"><div class="placeholder logopic"><img src="../assets/logo1.png" alt=""></div></div>
            <div  class="weui-flex__item">
                <div class="placeholder ">
                    <div class="search">
                         <img src="../assets/seach.png" alt="">
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return{
     
        };
    }
};
</script>
<style scoped>
 .weui-flex{
     width: 100%;
     background-color:#d43d3d;
     height: 50px;
 }
 .placeholder{
     float: left;
 }
 .weui-flex__item{
   
     background-size: 166px;
     
 }
 .logopic{
     width: auto;
     height: 30px;
     margin-top: 10px;
     margin-right:30px;
 }
 .xin{
     width: 30px;
     height: 30px;
     margin-left:20px;
     margin-top:10px;
 }
 .xin img{
     width: 30px;
     height: 30px;
 }
 .logopic img{
     width: auto;
     height: 30px;
 }
 .search{
     background-size: contain;
     height: 30px;
     width: 30px;
     text-align: center;
     margin-left: 10px;
     margin-top: 10px;
 }
 .search img{
     height: 30px;
     width: 30px;
 }
</style>


