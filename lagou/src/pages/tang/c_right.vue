<template>
	<div class="c_right">
		<!--公司基本信息-->
		<item item_title='公司基本信息'>
			<div class="product_content" slot='product_content'>
				<ul class="basic_info">
					<li>
						<i class="el-icon-menu"></i>
						<span>企业服务</span>
					</li>
					<li>
						<i class="el-icon-s-marketing"></i>
						<span>上市公司</span>
					</li>
					<li>
						<i class="el-icon-user"></i>
						<span>2000人以上</span>
					</li>
					<li>
						<i class="el-icon-location-outline"></i>
						<span>上海</span>
					</li>
				</ul>
			</div>
		</item>
		<!--管理团队-->
		<item item_title='管理团队'>
			<div class="product_content" slot='product_content'>
				<ul class="manager_team">
					<li>
						<img class="manger_photo" src="//www.lgstatic.com/thumbnail_200x200/image1/M00/00/BF/Cgo8PFTUYFiAMKTDAAJR-BpPS7Q715.jpg" alt="创始人头像" >
						<p class="manager_name">
							<strong>孙涛勇</strong>
							<a href="http://weibo.com/suntaoyong" target="_blank" rel="nofollow" title="新浪微博" class=""></a>
						</p>
						<p class="manager_position">CEO</p>
								<div class="CEO_info" >
									<p>典型的80后创业者，公司成立一年就有200人团队的规模，创立微盟前曾任上海万度集团运营总监，负责集团市场运作和经营管理，精通网络营销和新媒体营销，加入万度前系百度商务搜索部高级研发工程师，参与了凤巢相关产品的研发；坚定的创业者，大学时就创办过校园网上商城，毕业后一直寻求创业方向。良好的沟通和协调能力，坚决、果断的执行能力。有管理200人团队的管理经验。毕业于北京理工大学，获得工程硕士学位</p>
								</div>

					</li>
				</ul>
			</div>
		</item>
	
	<!--公司标签-->
	<item item_title='公司标签'>
			<div class="product_content" slot='product_content'>
				<ul class="company_tags">
							<li class="con_ul_li">
								绩效奖金
							</li>
							<li class="con_ul_li">
								年底双薪
							</li>
							<li class="con_ul_li">
								五险一金
							</li>
							<li class="con_ul_li">
								带薪年假
							</li>
							<li class="con_ul_li">
								节日礼物
							</li>
							<li class="con_ul_li">
								年度旅游
							</li>
							<li class="con_ul_li">
								弹性工作
							</li>
							<li class="con_ul_li">
								定期体检
							</li>
							<li class="con_ul_li">
								午餐补助
							</li>
						</ul>
			</div>
		</item>
	<!--工商信息-->
	<item item_title='工商信息' class='bold'>
			<div class="product_content" slot='product_content'>
				<ul class="business_info">
					<li>
						<i class="el-icon-s-check"></i>
						<span>工商信息</span>
						<p>上海微盟企业发展有限公司</p>
					</li>
					<li>
						<i class="el-icon-timer"></i>
						<span>成立时间</span>
						<p>2014-09-10</p>
					</li>
					<li>
						<i class="el-icon-money"></i>
						<span>注册资本</span>
						<p>92935.2237万人民币</p>
					</li>
					<li>
						<i class="el-icon-coordinate"></i>
						<span>法人代表</span>
						<p>孙涛勇</p>
					</li>
				</ul>
				<div class="info-more">
					<img src="//www.lgstatic.com/www/static/company-c/modules/common/img/eye_6053086.png" alt="天眼查" class="info-more-logo">
					<a href="https://www.tianyancha.com/company/502438547" class="info-more-link" target="_blank">查看更多</a>
				</div>
			</div>
		</item>
	<!--点击跳转-->
	
	<navigator></navigator>
	</div>
</template>

<script>
	import item from './item'
	import navigator from './navigator'
	export default {
		components: {
			item,navigator
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.c_right {
		width: 30%;
		margin-left: 50px;
		.basic_info {
			padding-left: 30px;
			li {
				padding: 20px 0;
				line-height: 20px;
				height: 20px;
				i {
					font-size: 20px;
				}
				span {
					margin-left: 15px;
				}
			}
		}
		.manager_team{
			text-align: center;
			.manger_photo{
				width:118px;
				height:118px;
				border-radius: 50%;
				overflow: hidden;
			}
			.manager_name{
				display: flex;
				justify-content: center;
				height: 40px;
				line-height: 40px;
				strong{
					color: #333;
					font-size: 18px;
				}
				a{
					display: inline-block;
					width: 28px;
					height: 28px;
					background-image: url(../../assets/img/company/css_sprites_c518bff.png);
					background-repeat: no-repeat;
					background-position: -242px -14px;
				}
			}
			.manager_position{
				color: #999;
				height: 30px;
			}
			.CEO_info{
				height: 154px;
				overflow: auto;
				font-size: 14px;
				text-align: left;
			}
		}
		.company_tags{
			li{
				float: left;
				margin-right: 20px;
				font-size: 14px;
				border: 1px solid #ccc;
				border-radius:15px ;
				padding: 5px;
				margin-bottom: 20px;
			}
		}
		.bold{
			font-weight: 900;
		}
		.business_info{
			font-weight:normal;
			li{
				font-size:15px;
				margin-bottom: 30px;
				i{
					font-size:20px ;
				}
				p{
					text-indent: 1.5em;
				}
			}
		}
		.info-more{
			display: flex;
			justify-content: flex-start;
			margin-bottom: 20px;
		}
		.info-more-link{
			font-weight: normal;
			text-decoration: underline;
			font-size:15px;
			margin-left: 8px;
		}
	}
</style>
<style>

</style>