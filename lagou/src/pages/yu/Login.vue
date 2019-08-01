<template>
	<div class="login">
		<div class="header">
			<div class="bglogo"></div>
		</div>
		<div class="section">
			<div class="leftsec">
<<<<<<< HEAD
				<div class="bg-slogo" @click="changel='saomiao'">
					<div class="leftimg"></div>
					<div class="weichat-login"></div>
				</div>
				<div class="bg-spc" @click="changel='zhanghao'">
					<div class="pc-img"></div>
					<div class="pc-login"></div>
				</div>
				<div class="change" v-if="changel=='saomiao'">
					<img src="../../assets/timg.gif" >
					<p>微信扫一扫，快速登录</p>
				</div>
			</div>
				<form v-if="changel=='zhanghao'">
					<p class="login-style">
					<a class="password" @click="layout='password'" :class="{act:layout=='password'}">密码登录</a>
					<a class="yanzhengma" @click="layout='yanzhengma'" :class="{act:layout=='yanzhengma'}">验证码登录</a>
				</p>
				<p class="passlogin" v-if="layout=='password'">
					<Form>	
						<input type="text" placeholder="请输入常用手机号/邮箱" slot="ainput" class="input1" v-model="phone" @blur="ckph">
						<p class="tishi" slot="tishik1" :class="{xian:tiShi!=''}">{{tiShi}}</p>
						<input type="password" placeholder="请输入密码" slot="binput" class="input2" v-model="pwd"  @blur="chpw">
					    <p class="tishi" slot="tishik2">{{tiShi3}}</p>
=======
				<div class="bg-slogo">
					<div class="leftimg"></div>
					<div class="weichat-login"></div>
				</div>
				<form>
					<p class="login-style">
					<a class="password" @click="layout='password'" :class="{active:xiahuaxian}">密码登录</a>
					<a class="yanzhengma" @click="layout='yanzhengma'">验证码登录</a>
				</p>
				<p class="passlogin" v-if="layout=='password'">
					<Form>	
						<input type="text" placeholder="请输入常用手机号/邮箱" slot="ainput" class="input1">
						<input type="text" placeholder="请输入密码" slot="binput" class="input2">
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
						<a href="#" slot="wangjimima" class="wangjimima">忘记密码？</a>
						<input type="submit" value="登录" slot="btn" class="btn"></input>
					</Form>
				</p>
					<p class="yzmlogin" v-if="layout=='yanzhengma'">
					<Form>
						<span slot="phonenum" class="phonenum">0086</span>
<<<<<<< HEAD
						<input type="text" placeholder="请输入常用手机号" slot="ainput" class="input1-1" v-model="phone" @blur="ckph">
						  <p class="tishi" slot="tishik1" :class="{xian:tiShi!=''}">{{tiShi}}</p>
						<input type="text" placeholder="请输入验证码" slot="binput" class="input2-2" v-model="phoneyz" @blur="ckyzm">
							<p class="tishi" slot="tishik2">{{tiShi2}}</p>
						<a class="huoquyzm" slot="wangjimima" :disabled="disabled" @click="sendcode">{{btntxt}}</a>
						<input type="submit" value="登录" slot="btn" class="btn" @click="goshouye"></input>	
					</Form>
				</p>
				</form>
			
=======
						<input type="text" placeholder="请输入常用手机号" slot="ainput" class="input1-1" v-model="phone">
						<input type="text" placeholder="请输入验证码" slot="binput" class="input2">
						<a class="huoquyzm" slot="wangjimima" :disabled="disabled" @click="sendcode">{{btntxt}}</a>
						<input type="submit" value="登录" slot="btn" class="btn" @click="goshouye"></input>
					</Form>
				</p>
				</form>
			<div class="change">
					<img src="img/timg.gif">
					<p>微信扫一扫，快速登录</p>
				</div>
			</div>
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
			<div class="rightsec">
				<div class="total">
					<h5>还没有账号：</h5>
					<a @click="goreg">立即注册</a>
					<h5 class="dierh">使用以下账号直接登录:</h5>
					<p class="logo">
						<span></span><span></span>
						<span></span><span></span>
					</p>
				</div>
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
				layout: 'password',
<<<<<<< HEAD
				  tiShi:'',         // 获取验证码部分
                  tiShi2:'',  // 获取验证码部分
                  tiShi3:'', 
                phoneyz:this.phoneyz,  // 获取验证码部分
				   phone:this.phone,
				   disabled:false,
				   time:0, 
				   pwd:this.pwd,
				   btntxt:"获取验证码",
				   xiahuaxian:true ,//登录方式的绿色下划线
				   changel:'zhanghao',
=======
				   phone:this.phone,
				   disabled:false,
				   time:0,    
				   btntxt:"获取验证码",
				   xiahuaxian:true
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
			    }	
		    },
		components: {
			Form
		},
		methods:{
			
			 goshouye(){ 
          	  this.$router.push('/index')
          },
			goreg(){
  		     this.$router.push('/Register')
         },
<<<<<<< HEAD
         lost(){
					this.tiShi='';
               },
             ckph(){
				var reg=11&& /^[1][3,4,5,6,7,8][0-9]{9}$/;
				if(this.phone==''){
					this.tiShi="请输入手机号码"
				}else if(!reg.test(this.phone)){
					this.tiShi="手机格式不正确"
				}
				else{
					this.tiShi='';
				}
			},
         sendcode(){
				var reg=11&& /^[1][3,4,5,6,7,8][0-9]{9}$/;
				if(this.phone==''){
					this.tiShi="请输入手机号码"
				}else if(!reg.test(this.phone)){
					this.tiShi="手机格式不正确"
				}else if(this.phoneyz.length!=6){
					this.tiShi2="请输入正确的验证码"
				}
				else{
					this.time=60;
					this.disabled=true;
					this.timer();
					this.tiShi='';
					this.tiShi2='';
				}
			      },
=======
         sendcode(){
         	var reg=11&& /^[1][3,4,5,6,7,8][0-9]{9}$/;
         	if(this.phone==''){
         		alert("请输入手机号码");
         	}else if(!reg.test(this.phone)){
         		alert("手机格式不正确");
         	}else{
         		this.time=60;
         		this.timer();
         		this.disabled=true;
         		
         	}
         },
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
         timer(){
         	if(this.time>0){
         		this.time--;
         		this.btntxt=this.time+"s后重新获取";
         		setTimeout(this.timer,1000);
         	}else{
         		this.time=0;
         		this.btntxt="获取验证码";
         		this.disabled=false;
<<<<<<< HEAD
         		this.tiShi='';
				this.tiShi2='';
         	}
         },
         // 验证密码部分
			chpw(){
				var patrn=/^(\w){6,20}$/;
				if(this.pwd==''){
					this.tiShi3="密码不能为空！"
				}
				else if(!patrn.test(this.pwd)){
						this.tiShi3="密码不正确"		
			}else{
				this.tiShi3='';
			}
         },
         //验证码部分
         ckyzm(){
         	var regg=/^\d{6}$/;
         	if(this.phoneyz==''){
					this.tiShi2="验证码不能为空"
				}
				else if(!regg.test(this.phoneyz)){
						this.tiShi2="请输入正确的验证码"		
			}else{
				this.tiShi2='';
			}
		}
	}
		}
=======
         	}
         }
		}
	}
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
<<<<<<< HEAD
	*{	padding: 0;
		margin:0;
	}
.tishi{
	text-align: left;
	width: 100%;
	font-size: 13px;
	color:#fd5f39;
	display: inline-block;
	}
=======
	*{		padding: 0;
		margin:0;
		}
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
.header{
		height: 360px;
		position: relative;
		z-index: 1;
		background-color:#00b38a;
	}
	.bglogo{
		position: absolute;
		top: 80px;
        left: 50%;
        transform: translate(-50%);
        z-index: 10;
        width: 685px;
        height: 42px;
		background:url(//www.lgstatic.com/passport/static/pc/modules/common/img/logo_e420e46.png) no-repeat;
		background-size:112px 42px;
	}
	.section{
		padding: 7px;
		background-color: white;
		width: 685px;
		height: 405px;
		display: flex;	
		position: absolute;
		z-index: 5;
		margin-top:-200px;
		left:50%;
		transform: translate(-50%);
		border:0.1px solid gainsboro;
		
		
		}
	.leftimg{
		width: 52px;
        height: 52px;
        background:url(//www.lgstatic.com/passport/static/common/static/img/qrcode-normal_bb3ab97.svg) no-repeat;
		}
	.weichat-login{
		width: 106px;
	    height: 34px;
	    position: absolute;
	    top:5px;
	    left: 55px;
	    background: url(//www.lgstatic.com/passport/static/common/static/img/wx-login_c936a5c.svg) left center no-repeat;
		}
	form{
		position: relative;
		margin:0 30px 60px 60px;
		width: 290px;
		height: 273px;
		text-align: center;
	}
	.huoquyzm{
		display: inline-block;
		color:#00b3a7;
		font-size: 14px;
		position: absolute;
		right:15px;
<<<<<<< HEAD
		top:115px;
=======
		top:120px;
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
		
	}
	.phonenum{
		position: absolute;
		left:0px;
		top:59px;
	}
	.phonenum:after{
 	position: absolute;
 	top:4px;
 	left:50px;
 	content: "";
	display: inline-block;
    width: 10px;
    height: 10px;
    background:url(../../assets/sprites.png) no-repeat;
    background-size:150px 150px;
    background-position:-136px -9px;
    z-index:2;
}
	.change{
		width: 290px;
		height: 240px;
	}
	.input1-1{
<<<<<<< HEAD
		text-indent:4.5rem;
	}
	input{
		width: 290px;
		height:38px;
         outline: 0;
         font-size: 15px;
=======
		text-indent:4rem;
	}
	input{
		margin-top:15px;
		width: 290px;
		height: 47px;
         outline: 0;
         font-size: 14px;
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
        border:none;
        border-bottom: 1px solid #ebebeb;
	}
.login-style a{
<<<<<<< HEAD
	  cursor:pointer;
=======
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
	  font-weight: bolder;
	   font-size: 18px;
	   color:#666;
       line-height: 24px;
       border-bottom: 1px solid #ebebeb;  
       padding:0px 30px 10px 30px;
}
	.login-style{
<<<<<<< HEAD
		margin-bottom:26px;
=======
		margin-bottom:5px;
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
	}
.wangjimima{
	text-decoration: none;
	color:#00b3a7;
	position: absolute;
	right: 0px;
	margin: 10px 0;
}	
form .btn{
<<<<<<< HEAD
	height: 45px;
=======
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
	font-size: 20px;
	position: absolute;
	bottom: 0px;
	right: 0px;
	color: #fff;
    border-color: #00b38a;
    background-color: #00b38a;
    border-radius: 3px;
}
.total a{
	text-align: left;
	display: inline-block;
	text-decoration: none;
	color:#00b3a7;
	width:90px;
	background: url(//www.lgstatic.com/passport/static/pc/modules/common/img/icon-arrow-right_ea91505.png) right center no-repeat;
}
.rightsec .total{
	text-align: left;
	width: 150px;
	height: 111px;
	border-left:1px dashed gainsboro;
	margin-top:70px;
	margin-left:30px;
	padding:50px;
}
.total h5{
	line-height: 35px;
	color:#666;
}
.rightsec span:nth-of-type(1){
	display: inline-block;
	width: 23%;
	height: 16px;
	background: url(//www.lgstatic.com/passport/static/pc/modules/common/img/icon-sina_e161002.png) no-repeat;
}
.rightsec span:nth-of-type(2){
	display: inline-block;
	width: 23%;
	height: 16px;
	background:url(//www.lgstatic.com/passport/static/pc/modules/common/img/icon-wechat_823d4eb.png) no-repeat;
}
.rightsec span:nth-of-type(3){
	display: inline-block;
	width: 23%;
	height: 16px;
	background:url(//www.lgstatic.com/passport/static/pc/modules/common/img/icon-tencent_c85c20a.png) no-repeat;
}	
.rightsec span:nth-of-type(4){
	display: inline-block;
	width: 23%;
	height: 16px;
	background:url(//www.lgstatic.com/passport/static/pc/modules/common/img/icon-baidu_d1ad2b6.png) no-repeat;
}
.rightsec .logo{
	line-height: 30px;
}
.dierh{
	margin-top: 20px;
}
.change{
	display: none;
	 width: 380px;
	 height: 240px;
	  font-size: 14px;
     color: #999;
	 text-align: center;
}
.change img{
	width: 200px;
	height: 200px;
<<<<<<< HEAD
} 
.pc-img{
	    width: 52px;
        height: 52px;
	background: url(//www.lgstatic.com/passport/static/common/static/img/pc-normal_98450bc.svg) left center no-repeat;
}
.pc-login{
	    width: 106px;
	    height: 34px;
	    position: absolute;
	    top:5px;
	    left: 55px;
	background: url(//www.lgstatic.com/passport/static/common/static/img/mobile-login_438f9b2.svg) left center no-repeat;
}
.act{
	color:#00b3a7 !important;
	border-bottom: 1px #00b3a7 solid!important;
}






=======
}
.pc-img{
	background: url(//www.lgstatic.com/passport/static/common/static/img/pc-normal_98450bc.svg) left center no-repeat;
}
.pc-login{
	background: url(//www.lgstatic.com/passport/static/common/static/img/mobile-login_438f9b2.svg) left center no-repeat;
}
.active{
	border-bottom: 1px orange solid;
}

>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
</style>