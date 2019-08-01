<template>
  <div class="top">
     <!--底部-->
			<footer class="public-footer modify">
				<div class="inner_wrapper">
					      <div class="footer_module_column">
		                <a class="footer_app bjgreen" href="#" > <i class="el-icon-mobile-phone"></i>下载拉勾APP </a>
		                <a class="footer_mina bjgreen" href="javascript:;" @mouseenter="show" @mouseleave="gbi"><i class="el-icon-connection"></i> 微信小程序</a><img v-show="currxcx" src="//www.lgstatic.com/www/static/common/widgets/footer_c/layout/img/lagou-mina-code_d70848a.png">
		                <div class="footer_module_item">		       
		                    <a class="footer_wechat green" href="#"  @mouseenter="showlg" @mouseleave="gbi"><i class="footer_wechat_icon"></i> 拉勾微信  <img v-show="currlg" src="//www.lgstatic.com/www/static/common/widgets/footer_c/layout/img/lg_pic_weixin@2x_c372698.png" width="160" height="160"></a>
		                    <a class="footer_webo green" href="#"><i class="footer_webo_icon"></i>拉勾微博</a>                            
		                </div>
		            </div>
				
								<div class="footer_module_right">
						                <div class="footer_module_business">
						                    <p class="footer_module_title">企业服务</p>
						                    <a href="#" class="green">招聘抢人宝典</a>
						                    <a href="#" class="green">公司搜索</a>
						                    <a href="#" class="green">拉勾APP</a>
						                </div>
						                <div class="footer_module_business">
						                    <p class="footer_module_title">用户帮助</p>
						                    <a href="#" class="green">帮助中心</a>
						                    <a href="#" class="green">用户服务协议</a>
						                    <a href="#" class="green">隐私政策</a>
						                    <a href="#" class="green">在线提问</a>
						                </div>
						                <div class="footer_module_business">
						                    <p class="footer_module_title">联系方式</p>
						                    <span class="tel">服务热线：4006 2828 35 (9:00 -18:00)</span> 
						                    <a class="tel-2 green" href="#">企业服务邮箱：cc@lagou.com</a> 
						                    <a href="#" target="_blank" class="green">联系我们</a>
						                </div> 
				        </div>
                </div>
                
                <div class="copyright">
		            <div class="copyright_main">
		                <div class="copyright_main_left">
		                    <span class="copyright_title"><em>&copy;</em>2018 拉勾网</span>
		                    <a target="_blank">京ICP备14023790号-2</a>
		                    <a target="_blank" class="footer_gongan"><span class="footer_lagou_gongan"></span>京公网安备 11010802024043号</a>
		                    <div class="footer_lagou_jubao">
		                        <i class="lagou_jubao"></i>
		                        <p>
		                        <span>违法和不良信息举报</span>
		                        <span>电话: 4006 2828 35</span>
		                        <span>邮箱: cc@lagou.com</span>
		                        </p>
		                    </div>
		                </div>
		                <i class="footer_lagou_icon"></i>
		            </div>
		        </div>
			</footer>
		
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
 data(){
		return {
		   currxcx:false,
		   currlg:false
		}
	},
	methods:{
		show(){
			console.log(123)
			this.currxcx=true
		},
		showlg(){
			this.currlg=true
		},
		gbi(){
			this.currxcx=false,
			this.currlg=false
		}
	},
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modify{
	margin-left: -94px;
}
a{
 text-decoration: none;		
}
.public-footer {
  width: 100%;
  border-top: 1px solid #ebebeb;
}
.public-footer .inner_wrapper {
  display: flex;
  flex-wrap: nowrap;
}
.public-footer .footer_module_column {
  border-right: 1px solid #E8E8E8;
  width: 375px ;
  text-align: center;
  margin-top: 50px;
}
.public-footer .footer_module_column .footer_app {
  padding: 10px 0 8px;
  width: 180px;
  border: 1px solid #00B38A;
  color: #00B38A;
  margin-bottom: 16px;
  text-align: center;
  display: flex;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.public-footer .footer_module_column .footer_mina {
  padding: 10px 0 8px;
  width: 180px;
  border: 1px solid #00B38A;
  color: #00B38A;
  margin-bottom: 16px;
  display: flex;
  display: inline-block;
  text-align: center;
 
}

.public-footer .footer_module_column a {
  justify-content: center;
  align-items: center;
}
.public-footer .footer_module_column .footer_module_item a {
  padding: 15px;
  font-size: 10px;
  color: #555555;
}
.public-footer .footer_module_column .footer_module_item .footer_wechat_icon {
  display: inline-block;
  height: 16px;
  width: 16px;
  margin-right: 5px;
  background: url(//www.lgstatic.com/www/static/common/widgets/footer_c/modules/img/sprite_9dd5c92.png) -114px -184px no-repeat;
}
.public-footer .footer_module_column .footer_module_item .footer_webo_icon {
  display: inline-block;
  height: 14px;
  width: 16px;
  margin-right: 5px;
  background: url(//www.lgstatic.com/www/static/common/widgets/footer_c/modules/img/sprite_9dd5c92.png) -214px -20px no-repeat;
}
.public-footer .footer_module_right {
  margin-left: 130px;
  margin-top: 40px;
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.public-footer .footer_module_right .footer_module_business {
  margin-right: 100px;
}
.public-footer .footer_module_right .footer_module_business .footer_module_title {
  font-size: 18px;
  font-weight: 600;
  color: #555;
  margin-bottom: 30px;
}
.public-footer .footer_module_right .footer_module_business a,
.public-footer .footer_module_right .footer_module_business span {
  display: block;
  margin-bottom: 10px;
}
.public-footer .footer_module_right a {
  color: #555555;
}

.public-footer .copyright {
  clear: both;
  margin: 60px auto;
  color: #999;
  font-size: 14px;
  line-height: 12px;
  text-align: center;
  background: #FAFAFA;
  overflow: hidden;
}
.public-footer .copyright a {
  padding-right: 0;
  font-size: 14px;
  color: #999;
}
.public-footer .copyright .copyright_main {
  width: 1200px;
  max-width: 1200px;
  margin: 28px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.public-footer .copyright .copyright_main .footer_gongan {
  margin: 0 0 0 20px;
  display: flex;
  align-items: center;
}
.public-footer .copyright .copyright_main .footer_lagou_gongan {
  display: inline-block;
  width: 16px;
  height: 16px;
  background:url(//www.lgstatic.com/www/static/common/widgets/footer_c/modules/img/sprite_9dd5c92.png) -150px -184px no-repeat;
  margin: 0 5px 0 0;
}
.public-footer .copyright .copyright_main_left {
  display: flex;
  align-items: center;
}
.public-footer .copyright .copyright_main_left .footer_lagou_jubao {
  margin: 0 0 0 20px;
  border: 1px solid #D5DADF;
  display: flex;
  align-items: center;
  padding: 8px 20px;
  width: 185px;
  height: 50px;
  line-height: 20px;
}
.public-footer .copyright .copyright_main_left .footer_lagou_jubao p {
  display: flex;
  flex-flow: wrap;
}
.public-footer .copyright .copyright_main_left .footer_lagou_jubao .lagou_jubao {
  display: inline-block;
  width: 50px;
  height: 24px;
     background: url(//www.lgstatic.com/www/static/common/widgets/footer_c/modules/img/sprite_9dd5c92.png) -132px -20px no-repeat;
  margin: 0 10px 0 0;
}
.public-footer .copyright .copyright_title {
  margin-right: 5px;
}
.public-footer .copyright .footer_lagou_icon {
  display: inline-block;
  width: 198px;
  height: 19px;
  background: url(//www.lgstatic.com/www/static/common/widgets/footer_c/modules/img/footer_lagou_icon_75f0ebc.png) 0 0 no-repeat;
}
.footer_module_column img{
	width: 150px;
	height: 150px;
	position: absolute;
	top: 20%;
}
.footer_module_item img{
	position: absolute;
	top: 35%;
	left:5%;
}
/* 移入背景变绿色*/
.green:hover{
	color: #00b399 !important;
}

/* 移入字体变绿色*/
.bjgreen:hover{
	background-color:#00b38a !important;
	color: white !important;
}

</style>
