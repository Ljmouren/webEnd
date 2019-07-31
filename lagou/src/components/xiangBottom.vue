<template>
  <div class="xiangBottom">
    <div class="dibu">
         <div><img src="../assets/ren.png"/></div>	
         <div>在拉钩，发现新的职业机会</div>	
         <div><span>729377公司</span><span>6065987职位</span></div>	
         <div> 
          	<el-button type="primary">登录</el-button>
            <el-button type="primary">注册</el-button>
         </div>	
           
			</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.dibu{
	position: fixed;
	bottom: 10px;
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: space-around;
	background:#09c084 ;
	
}
.dibu div:nth-of-type(1) img{
	margin-top: -25px;
	margin-left: 100px;
	width: 110px;
	
}
.dibu div:nth-of-type(2){
	font-size: 19px;
	color: white;
	height: 70px;
	line-height: 70px;
}
.dibu div:nth-of-type(3){
	font-size: 19px;
	color: white;
	height: 70px;
	line-height: 70px;
}
.dibu div:nth-of-type(3) span{
	font-size: 19px;
	color: white;
	
	padding-left: 20px;
	padding-right: 20px;
	
}
.dibu div:nth-of-type(3) span:nth-of-type(1){
	border-right: 1px solid white;
}
.dibu div:nth-of-type(4){
	font-size: 19px;
	display: flex;
	align-items: center;
	
}
button{
	background: white;
	color: #09c084;
	padding: 10px 30px;
	border: none;
	margin-left: 10px;
	border-radius: 5px;
	
	height: 50px;
}

</style>
