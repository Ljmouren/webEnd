<template>
  <div class="jobHome">
      <div class="header1">
			<div class="header1-1">
				<p><span class="zhiwei">职位 (500+)</span><span class="gongsi">公司 (0)</span></p>
				<input type="text" placeholder="搜索职位  公司或地点" /><button>搜索</button>
			</div>
		</div>
		<!------------------------------------------->
		<div class="middle">
			
			<div class="kuang">
					<div class="buxian" v-show="xian1">
						<p><span>工作地点:</span><span>全国</span></p>
						<p><span>工作经验:</span><span>不限</span></p>
						<p><span>学历要求:</span><span>不限</span></p>
						<p><span>融资阶段:</span><span>不限</span></p>
						<p><span>公司规模:</span><span>不限</span></p>
						<p><span>行业领域:</span><span>不限</span></p>
					</div>
			
			
					<div class="middle-1" v-show="yin1">
							<ul>
								<li :class="{write:isActive}">
									<p>工作地点 :</p>
									<a :class="{col:isActive1}" href="#">全国</a>
									<a href="#">北京</a>
									<a href="#">上海</a>
									<a href="#">广州</a>
									<a href="#">杭州</a>
									<a href="#">成都</a>
									<a href="#">南京</a>
									<a href="#">武汉</a>
									<a href="#">西安</a>
									<a href="#">厦门</a>
									<a href="#">长沙</a>
									<a href="#">苏州</a>
									<a href="#">天津</a>
									<a href="#">长沙</a>
									
									
									 
									<a class="more" @mouseover="gengduo" @mouseout="xiaoshi" href="#">
										更多<i v-show="xian" class="fa fa-sort-desc fa-lg"></i><i v-show="yin" class="fa fa-sort-up fa-lg"></i>
									
									</a>
									<div class="city" v-show="yin" @mouseover="gengduo" @mouseout="xiaoshi">
										  <span>重庆</span>
										  <span>郑州</span>
										  <span>青岛</span>
										  <span>合肥</span>
										  <span>福州</span>
										  <span>济南</span>
										  <span>大连</span>
										  <span>珠海</span>
										  <span>无锡</span>
										  <span>佛山</span>
										  <span>东莞</span>
										  <span>宁波</span>
										  <span>常州</span>
										  <span>沈阳</span>
										  <span>石家庄</span>
										  <span>昆明</span>
										  <span>南宁</span>
										  <span>哈尔滨</span>
										  <span>海口</span>
										  <span>中山</span>
										  <span>惠州</span>
										  <span>贵阳</span>
										  <span>长春</span>
										  <span>太原</span>
										  <span>嘉兴</span>
										  <span>泰安</span>
										  <span>昆山</span>
										  <span>烟台</span>
										  <span>全部城市 ></span>
										
									</div>
<!------------------------------------------------------------------->			
        
<!---------------------------------------------------------------------------->
									
								</li>
								<li>
									<p>工作经验 :</p>
									<a href="#">不限</a>
									<a href="#">应届毕业生</a>
									<a href="#">3年及以下</a>
									<a href="#">3-5年</a>
									<a href="#">5-10年</a>
									<a href="#">10年以上</a>
									<a href="#">不要求</a>
								</li>
								<li>
									<p>学历要求:</p>
									<a href="#">不限</a>
									<a href="#">大专</a>
									<a href="#">本科</a>
									<a href="#">硕士</a>
									<a href="#">博士</a>
									<a href="#">不要求</a>
									
								</li>
								<li>
									<p>公司规模 :</p>
									<a href="#">不限</a>
									<a href="#">不少于15人</a>
									<a href="#">15-50人</a>
									<a href="#">50-150人</a>
									<a href="#">150-500人</a>
									<a href="#">500-2000人</a>
									<a href="#">2000人及以上</a>
									
								</li>
								<li :class="{write:isActive}">
									<p>行业领域 :</p>
									<a href="#">不限</a>
									<a href="#">移动互联网</a>
									<a href="#">电商</a>
									<a href="#">金融</a>
									<a href="#">企业服务</a>
									<a href="#">教育</a>
									<a href="#">文娱|内容</a>
									<a href="#">游戏</a>
									<a href="#">消费生活</a>
									<a href="#">硬件</a>
									<a class="more" @mouseover="gengduo2" @mouseout="xiaoshi2" href="#">更多<i class="fa fa-sort-desc fa-lg"></i>
										
									</a>
										<div class="job" v-show="jobyin" >
										
										  <span>社交</span>
										  <span>旅游</span>
										  <span>体育</span>
										  <span>工具</span>
										  <span>汽车丨出行</span>
										  <span>物流丨运输</span>
										  <span>医疗丨健康</span>
										  <span>广告营销</span>
										  <span>数据服务</span>
										  <span>信息安全</span>
										  <span>人工智能</span>
										  <span>区块链</span>
										  <span>物联网</span>
										  <span>VR丨AR</span>
										  <span>软件开发</span>
										  <span>通讯电子</span>
										  <span>房产家居</span>
										  <span>其他</span>
										  
										
									</div>
										
									
								</li>
								
							</ul>
							 
			   </div><!--middle-1-->
			    <div class="shousuo" @click="show">
				    	<i v-show="yinbiao" class="fa fa-angle-up fa-lg"></i>
				    	<i v-show="xianbiao" class="fa fa-angle-down fa-lg"></i>
			    </div>  
			</div>
			
			
			<!------------------------------------------------->
			<div class="middle-2">
				<ul>
					<li>
						<span>排序方式 ：</span><span>默认</span><span>最新</span>
					</li>
					<li>
						<span>月薪 ：</span><select><option selected="selected">不限</option></select>
					</li>
					<li>
						<span>工作性质 ：</span><select><option selected="selected">不限</option></select>
					</li>
				</ul>
				<div class="right">
					<a class="tu1" href="#"><i class="fa fa-angle-left fa-lg"></i></a><span>1/30</span><a class="tu2"  href="#"><i class="fa fa-angle-right fa-lg"></i></a>
						
				</div>
			</div>
			<!----------------------------------------------------->
			<div class="middle-3">
			
				
						<jobList v-for="item in nowjobArr" :imgSrc="item.cover_url" :key="index">
							<!--<p slot="details"><router-link to="/xiangqing">{{item.title}}</router-link><span>{{item.date}}发布</span></p>
							<p slot="tag"><span>电商</span><span>电ma</span></p>-->
							
							  <div class="left" slot="left">
									<p><router-link to="/xiangqing">{{item.title}} [{{item.address}}]</router-link><span>{{item.date}}发布</span></p>
									<p><span>{{item.wage}}</span><span>{{item.workdate}}</span></p>
									<p><span>{{item.tag}}</span></p>
								
									
								</div>
								<div class="right" slot="right">
									<p>{{item.jobName}} <i class="fa fa-get-pocket fa-lg"></i></p>
									<p>{{item.desc}}</p>
									<p>{{item.fuli}}</p>
								</div>
						
						</jobList>
				
				
			
			</div>
			<!------------------------------------------------------>
			<div class="middle-4">
				<p>推荐公司:</p>
				<div class="middle-4-1">
					<a href="#">美柚</a>
					<a href="#">喜马拉雅fm</a>
					<a href="#">微盟</a>
					<a href="#">淘粉吧</a>
					<a href="#">熊猫TV</a>
					<a href="#">易到用车</a>
					<a href="#">小红唇</a>
					<a href="#">汽车超人</a>
					<a href="#">马蜂窝</a>
					<a href="#">三好网</a>
					<span><span class="last">唯品会</span><span>展开 </span><i class="fa fa-angle-down fa-lg"></i></span>
					
				</div>
			</div>
			<!------------------------------------>
			<div class="middle-5">
				<div class="middle-5-1">
				
					
     <el-pagination
			  background
			  :current-page.sync="currentPage"
			  :page-size="pageSize"
			  layout="prev, pager, next"
			  :total="jobArr.length">
     </el-pagination>
				</div>
			</div>
			
			
			<!--------------------->
			<zuijin></zuijin>
			
		</div><!--middle-->
		<!---->
  </div><!--jobHome-->
</template>

<script>
import jobList from '../../components/jobList'
import zuijin from '../../components/zuijin'
export default {
  name: 'HelloWorld',
  data () {
    return {
     jobArr:[],
     currentPage:1,
     pageSize:7,
     yin:false,
     jobyin:false,
     xian:true,
     isActive:false,
     isActive1:false,
     xian1:true,
     yin1:false,
     xianbiao:true,
     yinbiao:false,
    }
  },
  components:{
  	jobList,zuijin
  },
  mounted(){
  	this.getJobDate();
  },
  computed:{
  	nowjobArr(){
  		return this.jobArr.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)||[];
  	}
  },
  methods:{
  	getJobDate(){
  		this.$axios.get("https://www.easy-mock.com/mock/5d40e4603ef5b46c529f3f54/temp/shuju").then(res=>{
  			console.log(res.data.data.recommend_one);
  			this.jobArr=res.data.data.recommend_one
  		})
  	},
  	gengduo(){
  		this.yin=true;
  	  this.xian=false;
  		this.isActive=true;
  		this.isActive1=true;
  	},
  	xiaoshi(){
  			this.yin=false;
  			this.xian=true;
  			this.isActive=false;
  			this.isActive1=false;
  	},
  	gengduo2(){
  		this.jobyin=true;
  	
  		this.isActive=true
  	},
  	xiaoshi2(){
  			this.jobyin=false;
  			
  			this.isActive=false
  	},
  	show(){
  		this.xian1=!this.xian1;
  		this.yin1=!this.yin1;
  		this.xianbiao=!this.xianbiao;
  		this.yinbiao=!this.yinbiao;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.el-pagination.is-background .el-pager li:not(.disabled).active{
	background-color: #00b38a;
}
	
</style>

<style scoped lang="less">
/*------------搜索------------------*/

.write{
	background: white;
	/*transform: rotate(180deg);*/
}

.fa-rotate-180{
	
}

			.header1{
				width: 100%;
				height: 130px;
				background:#f2f5f4 ;
			}
			.header1-1{
				margin-left: 150px;
				padding-top: 20px;
			}
			.header1-1 p{
				margin-bottom: 10px;
				font-size: 12px;
			}
			.header1-1 .zhiwei{
				background:#00b38a ;
				color: white;
				width: 90px;
				text-align: center;
				margin-right: 10px;
				padding: 3px 5px;
				
			}
           .header1-1 .gongsi{
           	color:#a4a4a4 ;
           }
  .header1-1 input{
  	width: 60%;
  	height: 40px;
  	text-indent: 10px;
  	border: none;
  }   
 .header1-1 button {
 	    width: 100px;
 		height: 40px;
 		border: none;
 		background: #00b38a;
 		color: white;
 }    
 
 .glyphicon-search{
 	font-size: 12px;
 }
 
 .more{
 	position: relative;
 	display: inline-block;
 	
 }
 .fa-sort-desc{
 	position: absolute;
 	top:-1px;
 	right: -15px;
 	font-size: 20px;
 	color:#00b38a ;
 }
 .fa-sort-up{
 	position: absolute;
 	top:5px;
 	right: -15px;
 	font-size: 20px;
 	color:#00b38a ;
 }
 /*----------------------------------------------*/
.middle{
 	width: 60.7%;
 	margin-left: 150px;
 	margin-top: 30px;
 }
 
 .buxian{
 	display: flex;
 	background:#fafafa ;
 /*	border: 1px solid #ededed;*/
 	height: 50px;
 	line-height: 50px;
 }
 .buxian p span:nth-of-type(1){
 	font-weight: bolder;
	font-size: 14px;
	margin: 10px;
 }
 
 .buxian p span:nth-of-type(2){
 	font-size: 13px;
 	background: #00b38a;
	color: white;
	padding: 1px 5px;
 }
 
 
 
 .middle-1 ul{
 	background: #fafafa;
 	padding: 10px;
 	font-size: 13px;
 /*	border: 1px solid #ededed;*/
 }
 
 
.middle-1 li{
	display: flex;
	
}
.middle-1 li p{
	font-weight: bolder;
	font-size: 14px;
	margin: 10px;
}
.middle-1 li a{
	text-decoration: none;
	color: black;
	margin: 10px;
}
.middle-1 ul li a:nth-of-type(1){
	background: #00b38a;
	color: white;
	padding: 1px 5px;
}

.col{
	background:#00b38a!important;
	border: none!important;
	color: white!important;
	}


.middle-1 ul li:nth-of-type(1) a:nth-of-type(1){
	border: 1px solid darkgray;
	padding: 1px 5px;
	background: white;
	color: black;
}
.middle-1 ul li:nth-of-type(1){
	position: relative;
}

.city{
	position: absolute;
	left: -8px;
	bottom:-45px;
	font-size: 13px;
	height: 40px;
  width: 100%;
	background: white;
	border-top: 1px dashed #E0E0E0;
	padding: 5px;
	color: black;
	
}
.city span{
	margin: 8px;
	line-height: 20px;
}
.middle-1 ul li:nth-of-type(1) a:nth-of-type(15){
	position: absolute;
	top:0;
	right: 0px;
}
.middle-1 ul li:nth-of-type(5){
	position: relative;
}
.job{
	
	position: absolute;
	left: -10px;
	bottom:-45px;
	font-size: 13px;
	height: 40px;
  width: 101%;
	background: white;
	border-top: 1px dashed #E0E0E0;
	padding: 5px;
	color: black;
	z-index: 3;
		
}
.job span{
	margin: 10px;
	line-height: 25px;
}
.middle-1 ul li:nth-of-type(5) a:nth-of-type(11){
	position: absolute;
	top:0;
	right: 0px;
}
.middle-1{
	position: relative;
}

.fa-angle-up{
	position:absolute ;
	bottom: 3px;
	left: 50%;
	transform: translate(-50%);
	color: #e4e4e4;
	
	
}

.fa-angle-down{
	position:absolute ;
	bottom: 3px;
	left: 50%;
	transform: translate(-50%);
	color: #e4e4e4;
}

.kuang{
	position: relative;
	border: 1px solid #ededed;
}
.shousuo{
	position: absolute;
	bottom: -21px;
	left: 50%;
	transform: translate(-50%);

	text-align: center;
	width: 50px;
	height: 22px;
	background: #fafafa;
	line-height: 20px;
	border:1px solid #ededed;
	border-top: none;
	z-index: 1;
}

/*-------------------------------------*/
.middle-2 {
	background: #fafafa;
	margin-top: 30px;
	border: 1px solid #ededed;
	display: flex;
	font-size: 13px;
	
	
}
.middle-2 ul{
	display: flex;
	width: 85%;
	padding: 10px;
	
	border-right: 1px solid #ededed ;
}
.middle-2 ul li{
	list-style-type: none;
	margin-right: 50px;
	
}
.middle-2 .right{
	width: 15%;
	
	position: relative;
}
.middle-2 .right a img{
	width: 20px;
	height: 20px;
}
.middle-2 .right .tu1{
	
	position: absolute;
	top:10px;
}
.middle-2 .right span{
	position: absolute;
	left: 50%;
	transform: translate(-50%);
	top:10px;
}
.middle-2 .right .tu2{
	position: absolute;
	top:8px;
	right: 0;
}
.middle-2 li span:nth-of-type(1){
	font-weight: bolder;
	font-size: 14px;
}
.middle-2 select{
	border: 1px solid #ededed;
}
.middle-2 li:nth-of-type(1) span:nth-of-type(3){
	background: #00b38a;
	color: white;
	
	padding: 1px 5px;
	margin-left: 5px;
}
.fa-angle-right{
	color: #dbdbdb;
}
.fa-angle-left{
	color: #dbdbdb;
}
/*3*/
.middle-3 {
	margin-top: 20px;
}
.middle-3 jobList{
	background:#fafafa;
	list-style-type: none;
	padding: 10px;
	border: 1px solid #ededed;
	
}
.middle-3 .right{
	/*border: 1px solid red;*/
	width: 350px;
}
.middle-3 .left p:nth-of-type(1) a{
	text-decoration: none;
}












/*4*/

.middle-4 p{
	font-size: 14px;
	margin-bottom: 10px;
}
.middle-4-1 {
	display: flex;
	justify-content: space-between;

}
.middle-4-1 a{
	color: #00b38a;
	text-decoration: underline;
	font-size: 14px;
}
.middle-4-1 span{
	color: #999999;
	font-size: 14px;
	margin-left: 10px;
	
}
.middle-4-1 .last{
	color:#00b38a ;				
	font-size: 14px;
	text-decoration: underline;
}
/*5*/
.middle-5{
	margin-top: 40px;
	margin-bottom: 30px;
}
.middle-5-1{
	width: 50%;
	
	margin: 0 auto;
}
.middle-5-1 span{
	border: 1px solid #ededed;
	padding: 3px 10px;
	margin: 5px;
	color:#555555 ;
}
.middle-5-1 span:nth-of-type(1){
          color:#999999;
}
.middle-5-1 span:nth-of-type(2){
          color:white;
          background:#00b38a ;
}


</style>
