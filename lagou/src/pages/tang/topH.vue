<template>
	<div>
		<div class="top_info">
			<div class="c-wrap">
				<div class="company_info">
					<!--<img src="../../assets/img/CgoB5lojcfiAOshMAAC7b4mVlww357.pngg"/>-->
					<img src="../../assets/img/company/Cgp3O1dQFiaAelOPAAF1O_dbrx8557.jpg" />
					<div class="company_main">
						<h1><a href="#">微盟  <i></i></a> <span><i></i> 拉勾认证</span></h1>
						<p class="company_word">人性化的管理， 年轻充满活力的团队， 广阔的发展前景 </p>
						<div class="databox">
							<div class="company_data">
								<a href="#">
									<span>191个</span>
									<p>招聘职位<i class="tips"></i></p>
								</a>
								<a href="#">
									<span>32%</span>
									<p>简历处理及时率<i class="tips"></i></p>
								</a>
								<a href="#">
									<span>1天</span>
									<p>简历处理用时<i class="tips"></i></p>
								</a>
								<a href="#">
									<span>262个</span>
									<p>面试评价<i class="tips"></i></p>
								</a>
								<a href="#">
									<span>今天</span>
									<p>企业最近登录<i class="tips"></i></p>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="company_nav">
					<!--<ul>
							<li>
								<a href="#">公司主页</a>
							</li>
							<li>
								<a href="#">招聘职位（181）</a>
							</li>
							<li>
								<a href="#">校招职位（10）</a>
							</li>
							<li>
								<a href="#">公司问答</a>
							</li>
						</ul>-->

					<!--<el-tabs v-model="activeName" @tab-click="handleClick">
						    <el-tab-pane label="公司主页" name="first">
						    	<slot name='first'></slot>
						    </el-tab-pane>
						    <el-tab-pane label="招聘职位（181）" name="second">222</el-tab-pane>
						    <el-tab-pane label="校招职位（10）" name="third"></el-tab-pane>
						    <el-tab-pane label="公司问答" name="fourth"></el-tab-pane>
						  </el-tabs>-->
					<div class="company_share">
						分享&nbsp;
						<a href="#" class="weibo"></a>
						<a href="#" class="wechat"></a>
						<a href="#" class="routerline"></a>
					</div>
				</div>
				<el-tabs v-model="activeName">
					<el-tab-pane label="公司主页" name="first">
						<slot name='first'></slot>
					</el-tab-pane>
					<el-tab-pane label="招聘职位（181）" name="second">
						<slot name='second'></slot>
					</el-tab-pane>
					<el-tab-pane label="校招职位（10）" name="third">
						<slot name='third'></slot>
					</el-tab-pane>
					<el-tab-pane label="公司问答" name="fourth">
						<slot name='fourth'></slot>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'first'
			};
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">			
	.top_info {
		width: 100%;
		background: #f2f5f4;
		color: #555;
		padding-top: 30px;
	}
	
	.top_info .company_info {
		background: #ffffff;
		display: flex;
		border: 1px solid #eaeaea;
		box-sizing: border-box;
		height: 165px;
		overflow: hidden;
	}
	
	.top_info .company_info img {
		height: 165px;
	}
	
	.top_info .company_info .company_main {
		padding-top: 17px;
		width: 100%;
	}
	
	.top_info .company_info .company_main h1 {
		padding-left: 20px;
		display: flex;
	}
	
	.top_info .company_info .company_main h1 a {
		color: #555;
		position: relative;
	}
	
	.top_info .company_info .company_main h1 a i {
		display: inline-block;
		width: 14px;
		height: 12px;
		position: absolute;
		top: 6px;
		right: -20px;
		background: url(../../assets/img/company/icons1_b3ea05c.png) no-repeat 0 0;
	}
	
	.top_info .company_info .company_main h1 span {
		color: white;
		background: #00b38a;
		display: inline-block;
		padding: 10px 8px;
		cursor: pointer;
		border-radius: 20px;
		font-size: 12px;
		font-weight: normal;
		margin-left: 27px;
	}
	
	.top_info .company_info .company_main h1 span i {
		display: inline-block;
		position: relative;
		top: -1px;
		width: 16px;
		height: 18px;
		vertical-align: middle;
		background: url(../../assets/img/company/approve_ad3ed9a.png) no-repeat 0 0;
	}
	
	.top_info .company_info .company_main .company_word {
		padding-left: 20px;
		text-align: left;
		padding-bottom: 10px;
	}
	
	.top_info .company_info .company_main p {
		padding-top: 8px;
	}
	
	.top_info .company_info .company_main .databox {
		padding: 10px 0;
		background: #fafafa;
	}
	
	.top_info .company_info .company_main .databox .company_data {
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		width: 56%;
	}
	
	.top_info .company_info .company_main .databox .company_data a {
		position: relative;
		color: #555;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 18%;
	}
	
	.top_info .company_info .company_main .databox .company_data a span {
		font-size: 17px;
	}
	
	.top_info .company_info .company_main .databox .company_data a p {
		margin-top: 4px;
		font-size: 12px;
		color: #999;
	}
	
	.top_info .company_info .company_main .databox .company_data a p .tips {
		display: inline-block;
		width: 20px;
		height: 15px;
		margin-left: -6px;
		vertical-align: -4px;
		background: url(../../assets/img/company/publisher_data_tip_af42c15.png) right center no-repeat;
	}
	
	.top_info .company_info .company_main .databox .company_data a:after {
		position: absolute;
		top: 6px;
		right: -2px;
		content: "";
		height: 41px;
		width: 1px;
		background: #EDEDED;
	}
	
	.top_info .company_nav {
		overflow: hidden;
	}
	/*.top_info .company_nav ul {
		overflow: hidden;
	}
	
	.top_info .company_nav ul li {
		float: left;
		margin-right: 35px;
		line-height: 54px;
	}*/
	
	.top_info .company_nav .company_share {
		display: flex;
		line-height: 30px;
		color: #999;
		margin-top: 17px;
		margin-bottom: 7px;
		float: right;
		/*z-index: 10;*/
	}
	
	.top_info .company_nav .company_share a {
		display: block;
		width: 28px;
		height: 28px;
		background-image: url(../../assets/img/company/css_sprites_c518bff.png);
		background-repeat: no-repeat;
		background-position: -203px -14px;
		background-color: #fafafa;
		border: 1px solid #eaeaea;
		&:hover {
			background-position: -242px -14px;
		}
	}
	
	.top_info .company_nav .company_share .wechat {
		background-position: -203px -49px;
		&:hover {
			background-position: -242px -49px;
		}
	}
	
	.top_info .company_nav .company_share .routerline {
		background-position: -280px -14px;
		&:hover {
			background-position: -280px -50px;
		}
	}
</style>
<style>
	a {
		text-decoration: none;
		color: #555;
	}
	
	.c-wrap {
		width: 1200px;
		max-width: 1200px;
		margin: 0 auto;
	}
	.top_info{
		position: relative;
	}
	.el-tabs {
		position: absolute;
		top: 204px;		
		width: 88%;
	}
	
	.el-tabs .el-tabs__header {
		margin: 0;
	}
	
	.el-tabs__nav-wrap::after {
		display: none;
	}
	
	.el-tabs .el-tabs__item {
		color: #999;
		font-size: 18px;
	}
	
	.el-tabs .el-tabs__item.is-active {
		color: #333;
	}
	
	.el-tabs__nav {
		padding-bottom: 5px;
	}
	
	.el-tabs__active-bar {
		background-color: #00b38a;
	}
	
	.el-tab-pane {
		text-align: left;
	}
	
</style>