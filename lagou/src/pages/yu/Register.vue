<template>
	<div class="registerwrap">
		<div class="header">
			<div class="lefthead">
				<img src="../../assets/logo-slogan_443548c6.png" class="headerlogo" @click="goshouye">
			</div>
			<div class="righthead">
				<a href="#" class="show" @mouseover='showw'>
					<i class="fa fa-mobile fa-lg"></i> 拉勾APP
					<span class="shuxian">|</span>
					<img class="qrcode_app" src="//www.lgstatic.com/lg-landingpage-fed/pc/images/qrcode-new_69efb8b8.png" v-show="isShow" >
				</a>
				<a @click="goto">
					去登录 >
				</a>
			</div>
		</div>
		<div class="middle">
			<div class="middle-slogo">
				<img class="middle-slgon" src="//www.lgstatic.com/lg-landingpage-fed/pc/images/slgon_47bdda44.png">
			</div>
			<div class="juzhong">
				<div class="leftmiddle">
					<div class="search">
						<span class="glass"></span><button>搜索职位</button>
						<input type="text" placeholder="搜索“职位”填写一份简历，涨薪59%" v-model="content" />
						<!--<div>
							<ul v-for="(item,index) in items">
								<li>{{item.name | low()}}</li>
							</ul>
						</div>-->
					</div>
					<div class="fenlei">
						<div class="leftfenlei">
							<ul v-for="(item,index) in stylelist" @click="fn(index)">
								<li :class="{active:active==item.title}" @click="selected(item.title)">{{item.title}}</li>
							</ul>
						</div>
						<div class="rightfenlei">
							<div v-for="(item,index) in imgUrl" >
								<img :src="item.url">
							</div>
						</div>
					</div>
				</div>
				<div class="rightmiddle">
					<p class="mid-title"><span class="green">8秒</span>注册 轻松获高薪</p>
					<form class="form-right">
						<p>
							<Form>
								<span slot="phonenum" class="updowm">0086</span>
						         <input type="text" placeholder="请输入常用手机号" slot="ainput" class="input1-1" v-model="phone" @blur="sendcode" @focus="checkw">
						          <p class="tishi" slot="tishik1" :class="{xian:tiShi!=''}">{{tiShi}}</p>
								<input type="password" placeholder="请设置登录密码" slot="binput" class="dierge" v-model="pwd"  @blur="chpw" @focus="checkp">
								<p class="tishi" slot="tishik2" :class="{xian:tiShi2}">{{tiShi2}}</p>
							</Form>
						</p>
						  <el-button type="text" @click="isD" class="zhuce">立即注册</el-button>
						<p class="xieyi">注册代表你已同意
							<a href="#">「拉勾用户协议」</a>
						</p>
					</form>
					<div class="yiyouzhanhao">
						<a @click="goto">
							已有账号，直接登录
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="footer">
			<ul class="footerlist">
				<li>
					<img src="//www.lgstatic.com/lg-landingpage-fed/pc/images/icon1_37bdd49e.png">
					<div>
						<p class="foottitle">极速入职</p>
						<p class="footcontent">最快24小时拿到企业offer</p>
					</div>
				</li>
				<li>
					<img src="//www.lgstatic.com/lg-landingpage-fed/pc/images/icon2_e42a2c4a.png">
					<div>
						<p class="foottitle">隐私保护</p>
						<p class="footcontent">安全私密快速投简历</p>
					</div>
				</li>
				<li>
					<img src="//www.lgstatic.com/lg-landingpage-fed/pc/images/icon3_c6a75262.png">
					<div>
						<p class="foottitle">薪资透明</p>
						<p class="footcontent">薪资透明真实谢绝面议</p>
					</div>
				</li>
				<li>
					<img src="//www.lgstatic.com/lg-landingpage-fed/pc/images/icon4_85c5b151.png">
					<div>
						<p class="foottitle">海量信息</p>
						<p class="footcontent">海量互联网职位实时更新</p>
					</div>
				</li>
			</ul>
			<div class="footbottom">
				<div class="footimg">
					<img src="//www.lgstatic.com/lg-landingpage-fed/pc/images/logo-footer_521e1f40.png">
				</div>
				<p class="footbottom-info">
					<span>&copy;拉勾网 京ICP备14023790号-2</span><span class="footerline"></span>
					<span>京公网安备 11010802024043号</span><span class="footerline"></span>
					<span>违法和不良信息举报电话：4006 2828 35 (9:00 -18:00)</span><span class="footerline"></span>
					<span>举报邮箱：cc@lagou.com</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Form from '../../components/Form'
	export default {
		name: 'HelloWorld',
		data() {
			return {
//				arr: [
//				    {name: 'rick'},
//					{name: 'demen'},
//					{name: 'jack'},
//					{name: 'john'},
//					{name: 'Lucy'},
//				],
				stylelist:[
				{title:'技术'},
				{title:'产品'},
				{title:'设计'},
				{title:'市场'},
				{title:'运营'},
				{title:'销售'},
				],
				content: '',
                active:0,        // 左侧li点击那个那个高亮
                isShow:false,    //右上角二维码
                disabled:false,  // 获取验证码部分
                time:0,           // 获取验证码部分
                tiShi:'',         // 获取验证码部分
                tiShi2:'',
                phone:'',       // 获取验证码部分
                imgUrl:[],     //左侧图片渲染
                indes:0,      //左侧图片渲染
                pwd:'',     //验证密码部分
                isGo:false,   //点击注册按钮
                sendt:false,
                sendm:false,
			}
		},
		components: {
			Form
		},
		methods: {
			// 左侧图片渲染
			imgload(){
				this.$axios.get('https://www.easy-mock.com/mock/5d424169882199777987772e/getdata')
				.then(res=>{
				    if(this.indes==0){
				    	this.imgUrl=res.data.data0;
				    }else if(this.indes==1){
				    	this.imgUrl=res.data.data1;
				    }else if(this.indes==2){
				    	this.imgUrl=res.data.data2;
				    }else if(this.indes==3){
				    	this.imgUrl=res.data.data3;
				    }else if(this.indes==4){
				    	this.imgUrl=res.data.data4;
				    }else if(this.indes==5){
				    	this.imgUrl=res.data.data5;
				    }
				})
			}	,
			fn(index){
				this.indes=index;
				this.imgload();
			},
			// 验证手机号码部分
			//..........
			sendcode(){
				var reg=11&& /^[1][3,4,5,6,7,8][0-9]{9}$/;
				if(this.phone==''){
					this.tiShi="请输入手机号码"
				}else if(!reg.test(this.phone)){
					this.tiShi="手机格式不正确"
				}
				else{
					this.tiShi='';
					this.sendt=true;
				}
			},
			checkp(){
				  if(this.phone==''){
				  	this.tiShi="请输入手机号码"
				  }
			},
			checkw(){
				this.tiShi2='';
			},
			// 验证密码部分
			chpw(){
				var patrn=/^(\w){6,20}$/;
				if(this.pwd==''){
					this.tiShi2="密码不能为空！"
				}
				else if(!patrn.test(this.pwd)){
						this.tiShi2="密码必须由6-16个英文字母和数字的字符串组成！"		
			}else{
				this.tiShi2='';
				this.sendm=true;
			}
         },
         isD(){
         	if(this.sendt&&this.sendm){
         		this.open();
         	}
         },
         // 点击注册后弹出提示框
      open() {
      	
        this.$confirm('您已成功注册拉勾网，点击确定跳转到登录页面', '确认信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确定',
          cancelButtonText: '放弃'
        })
          .then(() => {
          	this.$router.push('/Login')
          
          })
          .catch(action => {
            this.$router.push('/Register')
          });
      },
			goto() {
				this.$router.push('/Login')
			},
			showw(){
					this.isShow = !this.isShow;
					},
					//点击高亮显示
			selected(title){
                      this.active = title;
                     },
          goshouye(){ 
          	  this.$router.push('/index')
          },
          
		},
//		computed: {
//			items: function() {
//				var that = this;
//				return this.arr.filter(function(item) {
//					var arrs = item.name.toLowerCase().indexOf(that.content) > -1;
//					return arrs;
//				})
//			}
//		},
//		filters: {
//			low: function(val) {
//				return val.charAt(0).toUpperCase() + val.slice(1);
//			},
//		}
	}
</script>

<style scoped lang="less">
.xian{
	border-top:1px #fd5f39 solid;
	width: 100%;
	height: 23px;
	font-size: 13px;
	color:#fd5f39;
	padding:8px 0px 0px 0px;
	display: inline-block;
}
.tishi{
	width: 100%;
	height: 23px;
	font-size: 13px;
	color:red;
	padding:8px 0px 0px 0px;
	display: inline-block;
	}
	* {
		padding: 0;
		margin: 0;
	}
	
	.headerlogo {
		width: 220px;
		height: 35px;
	}
	
	.header {
		line-height: 60px;
		width: 1014px;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
	}
	
	.lefthead {
		width: 222px;
		height: 35px;
	}
	
	.lefthead img {
		margin: 15px 0;
	}
	
	.righthead {
		display: flex;
	}
	
	.shuxian {
		display: inline-block;
		padding: 0px 15px 0px 8px;
		color: gainsboro;
	}
	
	.fa{
		padding: 0 5px;
	}
	
	.show {
		position: relative;
	}
	
	.qrcode_app {
		position: absolute;
		right: 20px;
		top: 45px;
		width: 128px;
		height: 128px;
		padding: 11px;
		z-index: 6;
		box-shadow: 0 0 5px hsla(0, 0%, 80%, .6);
		background-color: #fff;
	}
	
	.righthead>a {
		text-decoration: none;
		font-size: 14px;
		color: #999999;
	}
	
	.middle {
		position: relative;
		height: 695px;
		width: 100%;
		background: #00b38a url(//www.lgstatic.com/lg-landingpage-fed/pc/images/bg_49338802.png) bottom no-repeat;
		background-size: auto 110px;
	}
	
	.juzhong {
		box-sizing: border-box;
		position: absolute;
		display: flex;
		left: 50%;
		transform: translate(-50%);
	}
	
	.middle-slogo {
		text-align: left;
		margin: 0 auto;
		background-color: #00b38a;
		padding: 28px 0 8px;
		height: 34px;
		width: 1010px;
	}
	
	.middle-slogo img {
		width: 234px;
		height: 34px;
	}
	
	.leftmiddle {
		width: 610px;
		height: 480px;
		box-sizing: border-box;
		margin-right: 20px;
	}
	
	.search input {
		box-sizing: border-box;
		font-size: 14px;
		color: #666;
		width: 608px;
		padding-left: 49px;
		flex: 1;
		line-height: 46px;
		border: none;
		outline: none;
		padding-right: 10px;
	}
	
	.search {
		border-radius: 2px;
		height: 46px;
		background: white;
		position: relative;
	}
	
	.glass {
		display: inline-block;
		position: absolute;
		margin: 15px 11px 5px 22px;
		background: url(../../assets/sprites.png) no-repeat;
		background-position: -82px 0px;
		background-size: 200px 200px;
		width: 18px;
		height: 16px;
	}
	
	.search button {
		position: absolute;
		top: 5px;
		right: 5px;
		font-size: 16px;
		color: #fff;
		background: #00b38a;
		border-radius: 2px;
		border: none;
		padding: 7px 25px;
		outline: none;
	}
	
	.middle .fenlei {
		height: 415px;
		width: 110px;
	}
	
	.middle .fenlei ul {
		padding: 7px 7px 0px 7px;
	}
	
	.middle .fenlei li {
		list-style: none;
		width: 100px;
		height: 59px;
		line-height:59px;
		text-align: center;
		color: white;
		font-size: 16px;
	}
	.leftfenlei{
		margin-top: 10px;
		background: #00906f;
		border-radius:4px;
		box-sizing: border-box;
	}
	.active {
		border-radius: 4px;
		color: #007d61;
		background-color: #7fc8b7;
	}
	
	.fenlei {
		width: 610px !important;
		display: flex;
	}
	
	.rightfenlei {
		margin-top:7px;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-end;
		padding: 3px 0px 0px 10px;
	}
	
	.rightfenlei img {
		border-radius: 4px;
	}
	
	.rightmiddle {
		margin-left: 20px;
		width: 360px;
		height: 460px;
		padding: 57px 50px 35px;
		float: right;
		background: #fff;
		border-radius: 4px;
		box-sizing: border-box;
		animation: name1 0.5s 0s ease alternate;
	}
	
	@keyframes name1 {
		15% {
			transform: rotate(-3deg);
		}
		30% {
			transform: rotate(3deg);
		}
		45% {
			transform: rotate(-3deg);
		}
		60% {
			transform: rotate(3deg);
		}
		75% {
			transform: rotate(-3deg);
		}
		90% {
			transform: rotate(3deg);
		}
	}
	
	.mid-title {
		font-size: 24px;
		text-align: center;
		font-weight: 600;
		line-height: 26px;
		margin-bottom: 47px;
	}
	
	.green {
		color: #00b38a;
	}
	
		.rightmiddle .input1-1 {
		text-indent:4.5rem;
		font-weight: lighter;
		width: 100%;
		height: 38px;
		box-sizing: border-box;
		font-size: 16px;
		color: #333;
		border: none;
		border-bottom: .5px solid #e6e6e6;
		outline: none;
	}
	
	.rightmiddle .dierge {
		font-weight: lighter;
		width: 100%;
		height: 38px;
		box-sizing: border-box;
		font-size: 16px;
		color: #333;
		border: none;
		border-bottom: .5px solid #e6e6e6;
		outline: none;
	}
	
	.form-right {
		position: relative;
	}
	
	.updowm {
		font-size: 15px;
		color: #122B40;
		font-weight: 400;
		position: absolute;
		left: 0;
		top: 10px;
		z-index: 2;
		width: 50px;
		height: 38px;
		padding-right: 22px
	}
	
	.updowm:after {
		position: absolute;
		top: 4px;
		left: 50px;
		content: "";
		display: inline-block;
		width: 10px;
		height: 10px;
		background: url(../../assets/sprites.png) no-repeat;
		background-size: 150px 150px;
		background-position: -136px -9px;
		z-index: 2;
	}
	
	.zhuce {
		width: 100%;
		height: 48px;
		line-height: 48px;
		margin-bottom: 16px;
		font-size: 16px;
		color: #fff;
		background-color: #02b389;
		text-align: center;
		text-decoration: none;
		border-radius: 3px;
	}
	
	.xieyi {
		text-align: center;
		font-size: 14px;
		color: #999;
	}
	
	.xieyi>a {
		font-size: 14px;
		color: #00b38a;
		text-decoration: none;
	}
	
	.yiyouzhanhao {
		text-align: center;
		margin-top: 44px;
	}
	
	.yiyouzhanhao>a {
		font-size: 14px;
		color: #00b38a;
		text-decoration: underline;
	}
	
	.footerlist img {
		margin: 0px 8px 0px;
		width: 43px;
		height: 43px;
	}
	
	.footerlist {
		padding-bottom: 40px;
		margin: 0 auto;
		width: 1014px;
		display: flex;
		justify-content: space-between;
	}
	
	.footerlist li {
		display: flex;
		list-style: none;
	}
	
	.foottitle {
		font-size: 18px;
		color: #333;
		height: 20px;
		line-height: 20px;
	}
	
	.footcontent {
		font-weight: 400;
		font-size: 13px;
		color: #666;
		height: 32px;
		line-height: 32px;
	}
	
	.footer {
		padding-top: 50px;
		padding-bottom: 30px;
	}
	
	.footbottom img {
		width: 175px;
		height: 18px;
	}
	
	.footbottom-info {
		margin: 0 auto;
		color: #999;
		font-size: 12px;
		width: 1014px;
		text-align: center;
		line-height: 22px;
	}
	
	.footimg {
		height: 26px;
		padding-top: 25px;
		width: 1014px;
		border-top: 0.6px solid #d5dadf;
		margin: 0 auto;
		text-align: center;
	}
	
	.footerline {
		display: inline-block;
		width: 1px;
		height: 10px;
		margin: 0 5px;
		background: #ccc;
		overflow: hidden;
	}
	
	.aa {
		position: absolute;
		z-index: 3;
	}
</style>