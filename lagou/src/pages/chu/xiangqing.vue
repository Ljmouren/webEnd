<template>
  <div class="xiangqing">
  	     <publictop></publictop>
  	<div id="boxFixed" :class="{'is_fixed' : isFixed}" v-show="isFixed">  
		    <div class="ding">
		     	<p class="ding-job">硬件工程师 / <span> 15k-25k</span></p>
		     	<div class="tou-2">
							<div class="tou-2-1">
								<p><i class="fa fa-star-o fa-lg"></i> <span>收藏</span></p>
								
							</div>
							<div class="tou-2-2">
								<p>投个简历</p>
							<!--	<p><i class="fa fa-paperclip fa-lg  fa-rotate-270"></i>上传附件简历</p>-->
								
							</div>
						</div>
		    </div>
		</div>
   <xiangTop></xiangTop>
   <xiangMiddle></xiangMiddle>
   
   
   <div class="huojiankuang" v-show="isshow" @click="change" :class="{up:ischange}"></div>
   
   
  <!-- <xiangBottom></xiangBottom>-->
  	<publicfooter></publicfooter>
  </div>
</template>

<script>
import xiangTop from '../../components/xiangTop'
import xiangMiddle from '../../components/xiangMiddle'
import xiangBottom from '../../components/xiangBottom'
import publictop from '../../components/publictop'
import publicfooter from '../../components/publicfooter'
export default {
  name: 'HelloWorld',
  data () {
    return {
    isFixed:"",
    isshow:false,
    ischange:false
   
    }
  },
  components:{
  	xiangTop,xiangMiddle,xiangBottom,publictop,publicfooter,
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll);// 监听滚动事件，然后用handleScroll这个方法进行相应的处理
    window.addEventListener('scroll',this.hujianScroll)
  },
  methods:{
  	handleScroll(){
  	let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
    let offsetTop = document.querySelector('.toubu').offsetHeight;  // 要滚动到顶部吸附的元素的偏移量
    this.isFixed = scrollTop > offsetTop ? true : false;  // 如果滚动到顶部了，this.isFixed就为true
    
  	},
  	
  	change(){
  		this.ischange=true;
  		  const that = this;
  		  let timer=setInterval(function(){
		        let ispeed = Math.floor(-that.scrollTop / 4);
		        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop +ispeed;
		        if (that.scrollTop=== 0) {
		          clearInterval(timer)
        }
  		},10);
  		
  		if(scrollTop===0){
  			this.isshow=false;
  		}
  	},
  	hujianScroll(){
       
  	    	
  		    const that = this;
			    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			    that.scrollTop = scrollTop
			    if (that.scrollTop > 60) {
			      that.isshow = true;
			     
			    } else {
			      that.isshow = false
			    
			    }
			    
			    if(that.scrollTop==0){
			    		this.ischange=false;
			    }
  		},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#boxFixed{
	width: 100%;
}

.is_fixed{
	position: fixed;
	top: 0;
	z-index: 999;
}
.ding{
	display:flex ;
	background: #f2f5f4;
	
	align-items: center;
	
	
}
.ding-job{
	box-sizing: border-box;
	padding-left: 250px;
	font-weight: bold;
	font-size: 20px;
	width: 62.4%;
	color: black;

	
}

.ding-job span{
	color:#fd5f39 ;
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
/*.tou-2-1 p:nth-of-type(2){
	font-size: 14px;
}*/


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
/*.tou-2-2 p:nth-of-type(2){
	font-size: 14px;
	margin-bottom: 10px;
}*/


/*.tou-2-2 p:nth-of-type(3){
	text-align: center;
}*/
.huojiankuang{
	
	
	width: 30px;
	height: 48px;
  position: fixed;
	bottom: 150px;
	right: 250px;
	background: url(../../assets/img/company/backtop-new_0e4bcbc.png) no-repeat;
	/*background-position-x: -37px;*/
}
.up{
	 background-position-x: -37px;
}

</style>
