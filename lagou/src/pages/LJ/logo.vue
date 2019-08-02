<template>
	<div class="logo">
		<img class="logoimg" src="https://www.lgstatic.com/i/image2/M01/22/3C/CgoB5ly_5LeABgLIAADWGM9TJQU214.PNG" />
		<div class="login-from">
			<div class="from-tel">

				<input type="text" placeholder="输入手机号" v-model="tel" @blur="pan()"/>
				<p v-if="show1"><img src="../../assets/icon_85a17fe.png" />请输入手机号</p>
				<p v-if="show2"><img src="../../assets/icon_85a17fe.png" />请输入正确手机号</p>
				<p v-if="show3"><img src="../../assets/icon_85a17fe.png" />请输入手机号&nbsp;|&nbsp;请输入验证码</p>
			</div>
			<div class="from-yzm">
				<input type="text" placeholder="验证码" v-model="num"/>
				<div class="yz-btn" @click="obt">获取</div>
			</div>

			<div class="login-btn" @click="login">
				登录/注册
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				show1: false,
				show2: false,

				show3:false,
				tel: '',
				num:'',
				send:false
			}
		},
		methods: {
			obt() {
				if(this.tel.length == 0) {
					this.show2 = false;
					this.show1 = true;

					this.show3=false;
				} else if(this.tel.length > 0 && this.tel.length < 11) {
					this.show1=false;
					this.show2 = true;
					this.show3=false;
				} else if(this.tel.length == 11){
					var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
					if(myreg.test(this.tel)){
						this.show2=false;
						this.show1=false;
						this.show3=false;
						var num=parseInt((Math.random()*9+1)*100000);
						this.num=num;
						this.send=true;
					}else{
						this.show2=true;
					}
				}
			},
			pan(){
				if(this.tel.length == 0){
					this.show2=false;
					this.show1=false;
					this.show3=false;	
				}else if(this.tel.length<11){
					this.show2 = true;
				}
			},
			login(){
				if(this.send){
					this.$router.push('/Login')
				}else{
					this.show1=false;
					this.show2=false;
					this.show3=true;
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.logo {
		width: 100%;
		height: 120px;
		background-color: #00b38a;
		position: relative;
		overflow: hidden;
		.logoimg {
			height: 120px;
			position: absolute;
			left: 60px;
		}
		.login-from {
			float: right;
			.from-tel {
				position: absolute;
				right: 390px;
				top: 50%;
				transform: translateY(-50%);
				p {

					width: 200px;
					img {
						width: 14px;
						vertical-align: middle;
						padding-right: 4px;
					}
					color: white;
					font-size: 14px;
					position: absolute;
					bottom: -80%;
				}
				input {
					width: 163px;
					height: 35px;
					text-indent: 6px;
					border: none;
					outline: none;
				}
			}
			.from-yzm {
				position: absolute;
				right: 215px;
				top: 50%;
				transform: translateY(-50%);
				.yz-btn {
					float: right;
					display: inline-block;
					width: 52px;
					background-color: #fff;
					color: #00b38a;
					line-height: 35px;
					text-align: center;
					border: none;
					border-left: 1px solid #ccc;
				}
				input {
					width: 94px;
					height: 35px;
					text-indent: 6px;
					border: none;
					outline: none;
				}
			}
			.login-btn {
				border: 1px solid #fff;
				position: absolute;
				right: 100px;
				top: 50%;
				transform: translateY(-50%);
				height: 35px;
				line-height: 35px;
				font-size: 14px;
				color: #ccf0e8;
				padding: 0 20px;
				box-sizing: border-box;
				&:hover {
					background-color: #33c2a1;
				}
			}
		}
	}
</style>