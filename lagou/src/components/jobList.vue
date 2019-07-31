<template>
  <div class="jobList">
  	   <ul>
  	   	<li>
  	   		<div class="middle-3-1">
								
								<slot name="left"></slot>
								<slot name="right"></slot>
								
			      </div>
		        <div class="middle-3-2"><img :src="imgSrc"></div>
  	   	</li>
  	   </ul>
	          
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:["imgSrc"],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.jobList{
	display: flex;
}
.middle-3{
	margin-top: 20px;
	font-size: 14px;
}

.middle-3 li{
	display: flex;
	width: 900px;
	background: #fafafa;
	border: 1px solid #ededed;
	padding: 10px;
	list-style-type: none;
	margin-bottom: 20px;
}
.middle-3-1 .left p:nth-of-type(1){
	color: #00b38a;
	
}
.middle-3-1 .left p:nth-of-type(1) span{
	color: #999999;
	margin-left: 5px;
}
.middle-3-1 .left p a{
	color: #00b38a;
}

.middle-3-1 .left p{
	margin-bottom: 7px;
}
.middle-3-1 .left p:nth-of-type(2) span:nth-of-type(1){
	color: #fd5f39;
	margin-right: 15px;
}
.middle-3-1 .left p:nth-of-type(3) span{
	width: 70px;
	text-align: center;
	border: 1px solid #ededed;
	font-size: 13px;
	padding: 2px 4px;
	border-radius: 2px;
	margin-top: 20px;
	margin-right: 5px;
}
.middle-3-1 .right p{
	margin-bottom: 7px;
}
.middle-3-1 .right p:nth-of-type(1){
	color: #00b38a;
	position: relative;
}
.middle-3-1 .right p:nth-of-type(3){
	margin-top: 20px;
}
.middle-3-1 .right img{
	position: absolute;
	top:0;
	left: 60px;
	width: 23px;
	height: 22px;
}

 .middle-3-1{
/* 	border: 1px solid red;*/
	width: 90%;
	display: flex;
	justify-content:space-between;
	
}
 .middle-3-2{
	width: 10%;
		/*	border: 1px solid blue;*/
	text-align: right;
}
 .middle-3-2 img{
	width: 55px;
	height: 55px;
	border: 1px solid #ededed;
	
}
</style>
