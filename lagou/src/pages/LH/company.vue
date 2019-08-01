<template>
    <div>
        <Cbanner></Cbanner>
         <Ccontent></Ccontent>
         <Clist></Clist>
    </div>
</template>

<script>
import Cbanner from './cbanner.vue'
import Ccontent from './ccontent.vue'
import Clist from './clist.vue'
export default {
    components:{
        Cbanner,  Ccontent,Clist
    }
}
</script>

<style lang="less">
    li {
  list-style: none;
}
.c-wrap {
  width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
}
.company_banner {
  background: #00b38b;
  height: 389px;
  padding: 10px 150px;
  position: relative;
  text-align: center;
}
.company_banner h1 {
  color: white;
  text-align: center;
  padding: 20px 0 30px;
  font-size: 30px;
}
.company_banner .next {
  position: absolute;
  right: 30px;
  cursor: pointer;
  display: block;
  width: 46px;
  height: 93px;
  bottom: 173px;
  background: url('../../assets/img/company/arrow_0030b9a.png') no-repeat;
  background-position: -47px 0;
  opacity: .2;
}
.company_banner .it_content {
  display: flex;
  justify-content: space-between;
  /* width:50%; */
}
.company_banner .it_content li {
  cursor: pointer;
  width: 15%;
  height: 230px;
  text-align: center;
  background: #ccf0e8;
  padding-top: 5px;
  position: relative;
}
.company_banner .it_content li img {
  width: 90%;
}
.company_banner .it_content li p {
  margin-top: 10px;
  text-align: center;
  font-size: 15px;
}
.company_banner .it_content li .time {
  position: absolute;
  bottom: -60px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: white;
}
.company_banner .it_content li .time span {
  display: block;
  position: absolute;
  left: 126px;
  top: 6px;
  width: 120px;
  height: 11px;
  background: url('../../assets/img/company/it_bottom_v1_17d4c54.png') no-repeat;
}
.company_banner .it_content li .time .ic-before {
  width: 106px;
  left: -63px;
  background-position: -14px 0;
}





</style>