<template>
	<div class="main_left">
		<!--公司产品-->
		<item item_title='公司产品'>
			<div class="product_content" slot='product_content'>
				<img class="product_picture" src="../../assets/img/company/Cgp3O1bPulmAMI98AACem7xeTSM951.jpg" />
				<div class="product_details">
					<a href="">微盟<i></i></a>
					<p><span class="">网站</span><span>移动app</span></p>
					<div class="textbox">
						<p>
							微盟，国内领先的微信开发服务商。凭借着丰富的产品功能、全新的 产品设计、快速的产品创新、超出用户期待的产品价值，基于微信为 企业提供开发、运营、培训、推广一体化解决方案。
						</p>
						<p>微盟软件——提供SAAS互联网解决方案：商业云，营销云，销售云</p>
						<p>微盟盟聚——基于移动社交的精准营销解决方案</p>
						<p>还有更多的业务孵化ing....</p>
					</div>
				</div>
			</div>

			<div class="product_content" slot='product_content'>
				<img class="product_picture" src="../../assets/img/company/Cgp3O1bPunmAGfl0AADCr2v3O_w424.jpg" />
				<div class="product_details">
					<a href="">o2o智慧餐厅</a>
					<p><span class="">网站</span><span>移动app</span></p>
					<div class="textbox">
						<p>
							智慧餐厅，由微盟推出的专注服务于线下餐厅的O2O解决方案,它包含订餐、 点菜、支付、会员管理、营销在内的一站式服务,将线下餐厅和线上公众号无缝对接。
						</p>
					</div>
				</div>
			</div>
		</item>
		<!--公司介绍-->
		<item item_title='公司介绍'>
			<div class="product_content company_intro" slot='product_content'>
				<video width="480" height="270" controls="controls">
					<source src="http://xiaoyuanstatic.lagou.com/activity/shengzhiji/video/14229-1.mp4" type="video/mp4"></source>
				</video>
				<div class="company_intro_text">
					<div class="shortTxt" v-show="isShow">
						<p>&nbsp; &nbsp; 微盟，香港主板上市企业（股票代码：2013.HK），成立于2013年4月，现有员工超2000人，渠道代理商超1500家，注册商户超270万。<br>&nbsp;&nbsp;&nbsp;&nbsp;微盟是中国领军的中小企业云端商业及营销解决方案提供商，同时也是中国领军的腾讯社交网络服务平台中小企业精准营销服务提供商。微盟围绕商业云、营销云、销售云打造智慧云端生态体系，通过去中心化的智慧商业解決方案赋能中小企业实现数字化转型。目前旗下拥有:微商城、智慧零售、智慧餐厅、客来店、智慧<br></p>
						<p><strong>...</strong></p>
					</div>
					<div class="longTxt" v-show="!isShow">
						<span class="company_content"><p>&nbsp; &nbsp; 微盟，香港主板上市企业（股票代码：2013.HK），成立于2013年4月，现有员工超2000人，渠道代理商超1500家，注册商户超270万。<br>&nbsp;&nbsp;&nbsp;&nbsp;微盟是中国领军的中小企业云端商业及营销解决方案提供商，同时也是中国领军的腾讯社交网络服务平台中小企业精准营销服务提供商。微盟围绕商业云、营销云、销售云打造智慧云端生态体系，通过去中心化的智慧商业解決方案赋能中小企业实现数字化转型。目前旗下拥有:微商城、智慧零售、智慧餐厅、客来店、智慧酒店、智慧休娱、智慧美业、销售推、微站、广告助手等解决方案，帮助客户在新零售时代提高运营效率和盈利能力。微盟精准营销业务以大数据、智能算法、营销自动化等技术及优质媒体源，为广告主提供一站式精准营销投放服务。同时微盟旗下微盟云平台通过开放微盟核心产品技术能力，吸引第三方开发者，打造云端生态体系，为商户提供更多应用选择和更好服务。<br>&nbsp;&nbsp;&nbsp;&nbsp;微盟致力于通过产品和服务，助力中小企业向数字化转型，通过科技驱动商业革新，让商业变得更智慧！</p>
							<p>&nbsp;</p>
							<p><strong>【</strong><strong>牛哄哄的福利</strong><strong>】</strong><strong></strong></p>
							<p>l&nbsp;<strong>办公环境：</strong>宽敞舒适的办公环境，单纯的人际关系，自由平等，无障碍的沟通方式</p>
							<p>l&nbsp;<strong>旅</strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>游：</strong>每年都会组织2次旅游，等你来了，就会越走越远哦</p>
							<p>l&nbsp;<strong>工作时间：</strong>弹性工作制，给你更多自由可控的时间</p>
							<p>l&nbsp;<strong>年</strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>假：</strong>一年10天的带薪年假，会生活又会工作的员工才是好员工哦</p>
							<p>l&nbsp;<strong>带薪病假：</strong>6天呢在魔都打拼的有志青年们，再不用担心生病休息还要被扣工资了</p>
							<p>l&nbsp;<strong>新鲜水果：</strong>免费全天供应，补充员工每天所需维生素和微量元素</p>
							<p>l&nbsp;<strong>五险一金：</strong>那是必须滴</p>
							<p>l&nbsp;<strong>健康体检：</strong>身体是革命的本钱，有了健康的体魄，才能实现伟大的梦想</p>
							<p>l&nbsp;<strong>节日福利：</strong>&nbsp;妇女节，六一儿童节，端午节，中秋节，春节都有惊喜等着你</p>
							<p>l&nbsp;<strong>娱乐活动：</strong>定期的员工娱乐活动，桌游，台球，桌球，各种运动，保证在员工娱乐室都能找到志趣相投的小伙伴</p>
							<p>l&nbsp;<strong>培</strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>训：</strong>内部分享机制，每个员工都要分享ta自己最擅长的知识</p>
							<p>l&nbsp;<strong>薪</strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>水：</strong>有市场竞争力的薪水</p>
							<p>l&nbsp;<strong>生活补贴：</strong>房补，餐补令你食宿无忧</p>
							<p>l&nbsp;<strong>奖励机制：</strong>优秀员工，super&nbsp;star，季度明星.&nbsp;说不定下一个就是你哦</p>
							<p>l&nbsp;<strong>年底双薪：</strong>世界上最快乐的事，莫过于数钱数到手软吧</p>
						</span>
					</div>
					<a class="showTxt" v-show="isShow" @click="change">展开<i class="el-icon-arrow-down"></i></a>
					<a class="showTxt" v-show="!isShow" @click="change">收起<i class="el-icon-arrow-up"></i></a>
				</div>
			</div>
		</item>
		<!--轮播图-->
		<lunbo></lunbo>
		<!--发展历程-->
		<item item_title='发展历程'>
			<div class="product_content" slot='product_content'>
			<history></history>
			</div>			
		</item>
		<item item_title='面试评价'>
			<div class="product_content" slot='product_content'>
			<comments></comments>
			</div>			
		</item>
	</div>
</template>

<script>
	import item from './item'
	import lunbo from './lunbo'
	import history from './history'
	import comments from './comments'
	export default {
		components: {
			item,lunbo,history,comments
		},
		data(){
			return{
				isShow:true,
				showTxt:'展开'
			}
		},
		methods:{
			change(){
				this.isShow=!this.isShow;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.main_left {
		box-shadow: 8px 0 4px -4px #f5f5f5;
		margin-top: 50px;
		width: 64%;
		padding-right: 20px;
	}
	
	.company_intro {
		text-align: center;
		width: 100%;
	}
	
	.company_intro .company_intro_text {
		margin: 20px 0;
		text-align: left;
		color: #555555;
		font-size: 14px;
	}
	
	.showTxt {
		color: #00b38a;
		cursor: pointer;
	}
	
</style>