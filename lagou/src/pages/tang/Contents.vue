<template>
	<div>
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

	</div>
</template>

<script>
	import item from './item'
export default {
  components:{
  	item
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	
</style>
