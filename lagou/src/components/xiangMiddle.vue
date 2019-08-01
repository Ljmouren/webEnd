<template>
  <div class="xiangMiddle">
    			<div class="zhong">
						<div class="zhong-left">
						   <div class="zhong-1">
						   	<ul>
						   		<li><h3>职位诱惑：</h3></li>
						   		<li>车载电子、海思平台</li>
						   		<li><h3>职位描述：</h3></li>
						   		<li>岗位职责：</li>
						   		<li>1、负责迭代产品全程跟进工作，从需求评审到项目文档、设计、样机、试产、生产的跟进，处理期间所负责产品的硬件问题；</li>
						   		<li>2、产品硬件资料的整理、输出、归档，包括电路原理图、PCB板资料、BOM资料；</li>
						   		<li>3、电子物料的确认；</li>
						   		<li>4、项目完结时，负责项目的硬件知识总结；</li>
						   		<li>5、协助部门其他硬件工作，协助解决市场客户反馈问题。</li>
						   		<li>任职要求：</li>
						   		<li>1、本科及以上学历；通信，电子，自动化相关专业，3年及以上工作经验；</li>
						   		<li>2、能看懂英文文档，能够完成产品的硬件资料整理及归档工作；</li>
						   		<li>3、能独立完成部分硬件的跟进，如：制样，贴片，实验跟进等；</li>
						   		<li>4、能在上级工程师的指导下进行产品的电路设计，并进行电路调试工作；</li>
						   		<li>5、能够使用公司要求的画板软件进行PCB板绘制，能独立绘制线路板，能在上级或高级工程师指导下绘制多层线路板；</li>
						   		<li>6、能够独立完成迭代产品的硬件设计，有海思芯片硬件设计量产经验；</li>
						   		<li>7、有汽车电子行业经验优先。</li>
						   		<li><h3>工作地址</h3></li>
						   		<li class="dizhi"><span>深圳</span><span>-</span><span>南山区</span><span>-</span><span>前海</span><span>-</span><span>南海大道创意大厦</span><a @click="chakanMap">查看地图</a></li>
						   		<li class="ditu">
						   			 <baidu-map class="map" v-show="xian" :center="center" :zoom="zoom" @ready="handler"></baidu-map>
						   		</li>
						   		<li> <h3>职位发布者:</h3></li>
						   		<li class="fabu">
						   			
						   			<img class="touxiang" src="//www.lgstatic.com/thumbnail_120x120/i/image2/M00/4A/3D/CgotOVrrEmOAQOM3AAAVDoHzUvE735.jpg"/> 
						   				
						   			<div>
						   		    	<p>活跃时段  <i class="fa fa-question-circle-o"></i></p>
						    		    <p>全天</p>
						    		    <p>早10点最活跃</p>
						   		    </div>
						   		     <div>
						   		    	<p>简历处理  <i class="fa fa-question-circle-o"></i></p>
						    		    <p>超快</p>
						    		    <p>处理率100%   用时<span>2</span>天</p>
						   		    </div>
						   		    <div>
						   		    	<p>聊天意愿  <i class="fa fa-question-circle-o "></i></p>
						    		    <p>很弱</p>
						    		    <p>回复率--  用时<span>12</span>分钟</p>
						   		    </div>
						   		   
						   		    
						   		</li>
						   		
						   	</ul>
							
						   
						    <div class="pin">
						    	 <p class="tong1">面试评价</p>
						    	 <p class="pinjia"><img src="../assets/lian.png" /><span>该职位尚未收到面试评价</span><p>
						    	 <p class="tong2">看了此职位的人还会看</p>
						    	 <p class="tong3">查看更多</p>
						    </div>
						    
						    <div class="zhong-3">
						    <div class="haikan" v-for="item in jobArr3">
						    	<img :src="item.cover_url" />
						    	<p>{{item.type}}</p>
						    	<p>{{item.wage}}</p>
						    	<P>{{item.jobName}}</P>
						    </div>
						    
						  
						    </div>
						    
						    <div class="zhong-4">
						    	<a href="#">推荐公司：</a>
						    	<a href="#">美柚</a>
						    	<a href="#">喜马拉雅fm</a>
						    	<a href="#">微盟</a>
						    	<a href="#">淘粉吧</a>
						    	<a href="#">熊猫TV</a>
						    	<a href="#">易到用车</a>
						    	<a href="#">小红唇</a>
						    	<a href="#">展开<span> <i class="fa fa-angle-down fa-lg"></i></span></a>
						    	
						    </div>
						</div>
					    </div>
					<!--zuo-->
					<div class="zhong-right">
						<div class="zhong-2">
							<div class="zhong-2-1">
								<p class="p1"><img class="tu-1" src="//www.lgstatic.com/thumbnail_160x160/i/image/M00/9A/8F/CgqKkVihZ_OARyluAAASog9Z9z8701.png"/><a class="kai">开易科技</a>
									<span class="tu-2">	<i class="fa fa-get-pocket fa-lg"></i></span>
								
							</p>
							    <p><i class="fa fa-qrcode fa-lg"></i> 数据服务,其他</p>
							    <p><i class="fa fa-line-chart fa-lg"></i> A轮</p>
							    <p><i class="fa fa-user-o fa-lg"></i>  50-150人</p>
							    <p><i class="fa fa-home fa-lg"></i>http://www.lagou.com/gong...</p>
							</div>
							<div class="zhong-2-2">
								<h1>相似职位</h1>
								
								
								<div class="xiaokuang" v-for="item in jobArr2">
									<img :src="item.cover_url"  />
									<div class="xiaokuang-1">
										<p>{{item.title}}</p>
										<p>{{item.wage}}</p>
										<p>[{{item.address}}]</p>
									</div>
								</div>
								
								
								
						
							    <p class="more"><a href="#">查看更多相似职位</a><i class="fa fa-angle-right fa-lg"></i></p>
							</div>
							
						</div>
					</div>
					<!--you-->
					</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     jobArr1:[],
     center: {lng: 0, lat: 0},
      zoom: 3,
      xian:false,
     
    }
  },
  mounted(){
  	this.getJobDate();
  },
computed:{
	jobArr2(){
		var count=Math.floor(Math.random()*20);
		console.log(count);
		return this.jobArr1.slice(count,count+7);
	},
	jobArr3(){
		var count=Math.floor(Math.random()*23);
		return this.jobArr1.slice(count,count+4);
	},
},
  methods:{
  	getJobDate(){
  		this.$axios.get("https://www.easy-mock.com/mock/5d40e4603ef5b46c529f3f54/temp/shuju").then(res=>{
  			console.log(res.data.data.recommend_one);
			  this.jobArr1=res.data.data.recommend_one;
  		})
  	},
  	 handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    },
    chakanMap(){
    	this.xian=!this.xian
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.map {
  width: 100%;
  height: 400px;
}
h3{
	font-weight: bold;
	
}
.touxiang{
	border-radius: 50%;
}
.zhong{
	background: #f2f5f4;
	display: flex;
	justify-content: space-between;
}
.zhong-left{
	width: 63%;
	background: white;
	
}
.zhong-1{
	width: 75%;
	margin-left: 23%;
	margin-top: 30px;
	padding-top: 20px;
}
.zhong-1 li h3{
	color: black;
	font-size: 17px;
}
.zhong-1 ul li{
	list-style-type: none;
	margin: 15px;
}
.zhong-right{
	width: 36.5%;
	background: white;
}
.dizhi{
	overflow: hidden;
}
.dizhi span{
	float: left;
	color: #09c084;
}
.dizhi span:nth-of-type(2){
	color: black;
}
.dizhi span:nth-of-type(4){
	color: black;
}
.dizhi span:nth-of-type(6){
	color: black;
}
.dizhi span:nth-of-type(7){
	color: black;
}

.dizhi a{
	float: right;
	color: #09c084;
}
.fabu{
	overflow: hidden;
	box-sizing: border-box;
}
.fabu div{
	float: right;
	text-align: center;
	border-right: 1px solid #f3f3f3;
	padding:5px 15px;
	box-sizing: border-box;
}
.fabu img{
	width: 60px;
	width: 60px;
	float: left;
}
.fabu div:nth-of-type(1){
	padding-right: 0;
	border-right: 0;
}
.fabu div p:nth-of-type(1){
	margin-bottom: 3px;
}
.fabu div p:nth-of-type(2){
	font-size: 15px;
	margin-bottom: 3px;
}
.fabu div p:nth-of-type(3){
	font-size: 12px;
	color: #999999;
	margin-bottom: 3px;
	
}
.fabu div span{
	color: #fd644a;
}
.pin{
	position: relative;
	border-bottom: 1px solid #e8e8e8;
	border-top: 1px solid #e8e8e8;
}
.pinjia{
	position: relative;
	padding: 100px;
	text-align: center;
}
.pinjia img{
	position: absolute;
	left: 30%;
	top: 40%;
	
	
}
.tong1{
	background: white;
	position: absolute;
	left:0 ;
	top:-14px;
	font-size: 19px;
	padding-right: 5px;
	
}
.tong2{
	background: white;
	position: absolute;
	left:0 ;
	bottom:-14px;
	font-size: 19px;
	padding-right: 5px;
}
.tong3{
	background: white;
	position: absolute;
	right:-20px ;
	bottom:-12px;
	font-size: 15px;
	padding-left:8px;
	padding-right:25px;
	color: #00b38a;
}
.zhong-3{
	margin-top: 40px;
	display: flex;
	justify-content:space-around;
}
.haikan img{
	width: 70px;
	height: 70px;
	border: 1px solid #ebebeb;
}
.haikan p{
	margin-bottom: 5px;
}
.haikan p:nth-of-type(1){
	
}
.haikan p:nth-of-type(2){
	color: #fd5f39;
	
}
.haikan p:nth-of-type(3){
	color: #999999;
	font-size: 14px;
}
.zhong-4{
	display: flex;
	justify-content: space-between;
	margin-top: 50px;
	margin-bottom: 100px;
	
}
.zhong-4 a{
	color: #999999;
	text-decoration: underline;
}
.zhong-4 a:nth-of-type(1){
	text-decoration:none;
	color: #bebebe;
}
.zhong-4 a:nth-of-type(9){
	text-decoration:none;
	color: #bebebe;
}
/*-----------*/
.zhong-right{
	padding-top: 30px;
	
}
.zhong-2-1{
	margin-left: 30px;
}
.zhong-2-1 .tu-1{
	width: 100px;
	height: 100px;
}
.zhong-2-1 .p1 .tu-2{
	position: absolute;
	left: 195px;
	bottom:4px;
	width: 20px;
	height: 20px;
}
.zhong-2-1  .p1 {
	position: relative;
}
.zhong-2-1  .p1 .kai{
	left: 110px;
	font-size: 20px;
	position: absolute;
	bottom:2px;
}
.zhong-2-1  p{
	margin-bottom: 25px;
	font-size: 16px;
	color:#777777 ;
}
.zhong-2-2{
	width: 250px;
	position: relative;
	margin-left:30px ;
	margin-top:50px ;
	padding-top: 20px;
	border-top: 1px solid #e8e8e8;
}
.zhong-2-2 h1{
	font-size: 22px;
	position: absolute;
	top:-15px;
	background: white;
	padding-right: 5px;
	color: black;
	
}
.zhong-2-2  .xiaokuang{
	display: flex;
	border-bottom: 1px dashed #e8e8e8;
	padding-bottom: 20px;
	padding-top: 20px;
}
.zhong-2-2 img{
	width: 60px;
	height: 60px;
	border:2px solid #e8e8e8 ;
}
.xiaokuang-1{
	margin-left:10px;
}
.xiaokuang-1 p{
	font-size: 16px;
	margin-bottom: 4px;
}
.xiaokuang-1 p:nth-of-type(1){
	
}
.xiaokuang-1 p:nth-of-type(2){
	color: #e6775c;
	font-weight: bold;
	font-size: 18px;
}
.xiaokuang-1 p:nth-of-type(3){
	font-size: 13px;
	color: #999999;
}
.fa-angle-right{
		color: darkgray;
		margin-left: 10px;
}
/*.more img{
	width: 20px;
	height: 20px;
	position: absolute;
	top:10px;
	left: 180px;
	border: none;
}*/
.more a{
	color: darkgray;
	text-align: center;
	padding-left: 40px;
}
.more{
	position: relative;
	padding: 10px 20px;
	
	background: #fafafa;
}
.fa-exclamation-triangle{
	color: #c6ced0;
	padding-right: 5px;
	border-right: 1px solid #c6ced0 ;
}
.fa-weixin{
	color: #c6ced0;
	padding-right: 5px;
	padding-left: 5px;
	border-right: 1px solid #c6ced0 ;
}
.fa-jsfiddle{
	color: #c6ced0;
	padding-left: 5px;
}
.fa-star-o{
	color: #00b38a;
	
}
.fa-qrcode,.fa-line-chart,.fa-user-o,.fa-home{
	color: #737373;
	margin-right: 10px;
}
.fa-get-pocket{
	color: #00b38a;
}
</style>
