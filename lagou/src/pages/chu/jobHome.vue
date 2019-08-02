<template>
  <div class="jobHome">
  	
  	<publictop></publictop>
  	  
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
								<li :class="{write:isActive}" >
									    <div>
												   <span class="title">工作地点 :</span>
											     <a href="#" v-for="item in wpList" :key="item.name" :class="{active:active==item.name}"  @mouseover="selected(item.name)">{{item.name}}</a>
											</div>
										
										  <span class="more" @mouseover="gengduo('zhuan-up')" @mouseout="xiaoshi('zhuan-down')" href="#">
												       更多<i :class="zhuan" class="fa fa-sort-desc fa-lg"></i>
											</span>
											
											<div class="city" v-show="yin" @mouseover="gengduo('zhuan-up')" @mouseout="xiaoshi('zhuan-down')">
												   <span href="#" v-for="item in wpList6" :key="item.morecity" :class="{active:active==item.morecity}"
												 	 @mouseover="selected(item.morecity)">{{item.morecity}}</span>
											</div>
									
								</li>
								
								<li>
									   <div>
											<span class="title">工作经验  : </span>
											<a href="#" v-for="item in wpList2" :key="item.jingyan" :class="{active:active==item.jingyan}"
											@mouseover="selected(item.jingyan)">{{item.jingyan}}</a>
									  </div> 
								</li>
								<li>
									<div>
											<span class="title">学历要求 : </span>
											<a href="#" v-for="item in wpList3" :key="item.xueli" :class="{active:active==item.xueli}"
											@mouseover="selected(item.xueli)">{{item.xueli}}</a>
									 </div> 
								</li>
								<li>
									<div>
											<span class="title">公司规模  : </span>
										  <a href="#" v-for="item in wpList4" :key="item.guimo" :class="{active:active==item.guimo}"
											@mouseover="selected(item.guimo)">{{item.guimo}}</a>
									 </div> 
								</li>
								<li :class="{write:isActive}">
									<div>
											<span class="title">行业领域  : </span>
											<a href="#" v-for="item in wpList5" :key="item.lingyu" :class="{active:active==item.lingyu}"
											@mouseover="selected(item.lingyu)">{{item.lingyu}}</a>
									</div>		  
									<span class="more" @mouseover="gengduo2('zhuan-up')" @mouseout="xiaoshi2('zhuan-down')" href="#">
												更多<i :class="zhuan2" class="fa fa-sort-desc fa-lg"></i>
									</span>
									<div class="job" v-show="jobyin" @mouseover="gengduo2('zhuan-up')" @mouseout="xiaoshi2('zhuan-down')">
												
											<span href="#" v-for="item in wpList7" :key="item.morejob" :class="{active:active==item.morejob}"
											@mouseover="selected(item.morejob)">{{item.morejob}}</span>
												  
												
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
			
				
						<jobList v-for="(item,index) in nowjobArr" :imgSrc="item.cover_url" :key="index" >
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
			 
			<div class="middle-right">
								<h3>最近浏览过</h3>
								<div>
									<p>出纳</p>
									<p>4k-6k</p>
									<p>细刻科技</p>
								</div>
								<div>
									<p>模特</p>
									<p>6k-12k</p>
									<p>旅拍云约</p>
								</div>
								<img src="https://www.lgstatic.com/i/image2/M01/6B/6B/CgoB5l0-lnKAE814AAAg4aUrjLk355.PNG">
								<img src="https://www.lgstatic.com/i/image2/M01/62/3C/CgotOV0tROeANdp4AACKU68GAEc723.JPG">
								<img src="https://www.lgstatic.com/i/image2/M01/5F/E5/CgoB5l0ojBmAULrpAAA2Rjm2nqc492.JPG">
							
						</div>
  
			
		</div><!--middle-->
		<!---->
		
		<publicfooter></publicfooter>
  </div><!--jobHome-->
</template>

<script>
import jobList from '../../components/jobList'

import publictop from '../../components/publictop'
import publicfooter from '../../components/publicfooter'
export default {
  name: 'HelloWorld',
  data () {
    return {
     jobArr:[],
     wpList: [],
     wpList2: [],
     wpList3: [],
     wpList4: [],
     wpList5: [],
     wpList6: [],
     wpList7: [],
    
        
     active:'',
        
										
										

      
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
     zhuan:"",
     zhuan2:"",
    }
  },
  components:{
  	jobList,publictop,publicfooter
  },
  mounted(){
  	this.getJobDate();
  	this.getListDate();
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
  	getListDate(){
  		this.$axios.get("https://www.easy-mock.com/mock/5d40e4603ef5b46c529f3f54/temp/List").then(res=>{
//			console.log("----------------");
//			console.log(res.data.data.wpList);
//			console.log(res.data.data.wpList2);
//			console.log(res.data.data.wpList3);
//			console.log(res.data.data.wpList4);
//			console.log(res.data.data.wpList5);
//			console.log(res.data.data.wpList6);
//			console.log(res.data.data.wpList7);
  			
  			
        this.wpList=res.data.data.wpList;
        this.wpList2=res.data.data.wpList2;
        this.wpList3=res.data.data.wpList3;
        this.wpList4=res.data.data.wpList4;
        this.wpList5=res.data.data.wpList5;
        this.wpList6=res.data.data.wpList6;
        this.wpList7=res.data.data.wpList7;
       
  		})
  		
  	},
  	gengduo(value){
  		this.zhuan=value;
  		this.yin=true;
  	  this.xian=false;
  		this.isActive=true;
  		this.isActive1=true;
  		this.zhuan=value;
  		
  	},
  	xiaoshi(value){
  		  this.zhuan=value;
  			this.yin=false;
  			this.xian=true;
  			this.isActive=false;
  			this.isActive1=false;
  			
  	},
  	gengduo2(value){
  		this.zhuan2=value;
  		this.jobyin=true;
  		this.isActive=true;
  		
  		
  	},
  	xiaoshi2(value){
  			this.zhuan2=value;
  			this.jobyin=false;
  			this.iszhuan=false;
  			this.isActive=false;
  		
  	},
  	show(){
  		this.xian1=!this.xian1;
  		this.yin1=!this.yin1;
  		this.xianbiao=!this.xianbiao;
  		this.yinbiao=!this.yinbiao;
  	},
  	selected(name){
		   this.active = name;
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
.active {
   background: #00b38a!important;
   
   color: white!important;
  /* padding: 2px 5px;*/
 }
.zhuan-down{
	transform:rotate(0deg);
	transition: 0.5s;
}
.zhuan-up{
	transform:rotate(180deg);
	transition: 0.5s;
}


.write{
	background: white;
	
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
 	padding: 5px;
 	
 }
 .fa-sort-desc{
 	position: absolute;
 	top:5px;
 	right: -11px;
 	font-size: 16px;
 	color:#00b38a ;
 }
 .fa-sort-up{
 	position: absolute;
 	top:13px;
 	right: -8px;
 	font-size: 16px;
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
/*	border: 1px solid red;*/
 }
 
 
.middle-1 li{
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 40px;
/*	border: 1px solid blue;*/
	
}
.title{
	font-weight: bolder;
	font-size: 14px;
	margin-right: 5px;
}
.middle-1 li a{
	text-decoration: none;
	color: black;
	padding: 2px 5px;
	margin: 5px;

	
}
/*不限*/
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

/*全国*/
.middle-1 ul li:nth-of-type(1) a:nth-of-type(1){
	border: 1px solid darkgray;
	padding: 1px 5px;
	color: black;
	background: white;
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
	padding: 1px 3px;
	line-height: 20px;
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
	padding: 1px 3px;
	line-height: 25px;
}

.middle-1{
	position: relative;
}
/*.middle-1 a{
	display: inline-block;
	width: 100px;
}*/
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


.middle{
	position: relative;
}
.middle-right{
	padding: 5px;
	position: absolute;
	top: 0px;
	right:-280px ;
	background:#fafafa ;
	width: 230px;
	margin: 0 auto;
	box-sizing: border-box;
}
.middle-right div{
	width: 100%;
	background: white;
	padding: 5px 10px;
	box-sizing: border-box;
}
.middle-right div:nth-of-type(1){
	border-bottom: 1px dashed #ededed;
	
}
.middle-right div p{
	margin-bottom: 3px;
	
	box-sizing: border-box;
}
.middle-right div p:nth-of-type(1){
	font-size: 15px;
	
}
.middle-right div p:nth-of-type(2){
	font-size: 14px;
	color: #fd6951;
	margin-bottom: 6px;
}
.middle-right div p:nth-of-type(3){
	font-size: 13px;
	color: #999999;
}



.middle-right img{
	width: 100%;
	margin-top: 10px;
}
.middle-right h3{
	margin-bottom: 5px;
	font-weight: normal;
} 


</style>
