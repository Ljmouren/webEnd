<template>
  <div class="jobList">
  	   
	          <div class="middle-3-1">
								<div class="left">
									<slot name="details"></slot>
									<!--<p><router-link to="/xiangqing">硬件工程师[ 广州 ]</router-link><span>00:19发布</span></p>-->
									<p><span>13k-25k</span><span>经验1-3年/本科</span></p>
									<slot name="tag"></slot>
								</div>
								<div class="right">
									<p>字节跳动 <i class="fa fa-get-pocket fa-lg"></i></p>
									<p>文娱 | 内容 / C轮 / 2000人以上</p>
									<p>“六险一金，免费三餐，租房补贴，休闲下午茶”</p>
								</div>
								
			      </div>
		        <div class="middle-3-2"><img src="img/2345_image_file_copy_1.jpg"></div>
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
.jobList{
	display: flex;
}
.middle-3{
	margin-top: 20px;
	font-size: 14px;
}

.middle-3 li{
	display: flex;
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
