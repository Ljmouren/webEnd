<template>
  <div class="xiangTop">
    <div class="toubu">
					<div class="tou">
						<div class="tou-1">
							<p>广州天行者网络技术服务有限公司研发中心招聘</p>
							<p>硬件工程师</p>
							<p><span class="price">10k-15k</span> / 广州 / 经验3-5年 / 学历不限 / 全职</p>
							<p class="zhi"><span>CAD</span><span>智能硬件</span><span>硬件开发</span><span>电路设计</span></p>
							<p>21:39 发布与拉勾网</p>
						</div>
						<div class="tou-2">
							<div class="tou-2-1">
								<p><i class="fa fa-star-o fa-lg"></i> <span>收藏</span></p>
								<p><i class="fa fa-address-card-o fa-lg"></i> 完善在线简历</p>
							</div>
							<div class="tou-2-2">
								<p>投个简历</p>
								<p><i class="fa fa-paperclip fa-lg  fa-rotate-270"></i>上传附件简历</p>
								<p><i class="fa fa-exclamation-triangle fa-lg"></i><i class="fa fa-weixin fa-lg"></i><i class="fa fa-jsfiddle fa-lg"></i></p>
							</div>
						</div>
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
.toubu{
	background: #f2f5f4;
}
.tou{
	display: flex;
	width: 70%;
	margin: 0 auto;
	padding-top: 30px;
}
.tou-1{
	width: 70%;
	padding: 15px;
	box-sizing: border-box;
}
.tou-1 p{
	margin-bottom: 10px;
}
.tou-1 p:nth-of-type(1){
	font-size: 14px;
}
.tou-1 p:nth-of-type(2){
	font-size: 35px;
	color: black;
}
.tou-1 p:nth-of-type(3){
	font-size: 19px;
}
.price{
	color: #fd5f39;
	font-size:19px ;
}
.tou-1 p:nth-of-type(5){
	font-size: 13px;
	color: #a499a4;
}
.zhi span{
	
	background: white;
	font-size: 12px;
	padding: 1px 3px;
	border-radius: 10px;
	margin-right: 5px;
}
.tou-2{
	width: 30%;
	display: flex;
	padding: 15px;
	
}
.tou-2-1{
	margin-right: 15px;
	text-align: center;
}
.tou-2-2{
	
	text-align: center;
}
.tou-2-1 p:nth-of-type(1){
	border: 1px solid #00b38a;
	color: #00b38a;
	text-align: center;
	padding: 15px 30px;
	border-radius: 5px;
	margin-bottom: 10px;
}
.tou-2-1 p:nth-of-type(2){
	font-size: 14px;
}


.tou-2-2 p:nth-of-type(1){
	border: 1px solid #00b38a;
	color: white;
	background:#00b38a ;
	text-align: center;
	padding: 11px 21px;
	border-radius: 5px;
	margin-bottom: 10px;
	font-size: 20px;
}
.tou-2-2 p:nth-of-type(2){
	font-size: 14px;
	margin-bottom: 10px;
}


.tou-2-2 p:nth-of-type(3){
	text-align: center;
}
</style>
