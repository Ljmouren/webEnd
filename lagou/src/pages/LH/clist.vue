<template>
    <div id="clist">
        <div class="company_list">
					<div class="c-wrap">
					<ul id="clist1">
						<li class="company_item" v-for="(item,index) in clistArr">
							<div class="item_top">
								<img :src="item.imgsrc"/>
								<p><a href="#">{{item.coporate}}</a></p>
								<p class="scale">{{item.desc}}</p>
								<p class="brief">{{item.brief}}</p>
							</div>
							<div class="item_bottom">
								<a href="#">
									<span>{{item.num1}}</span>
									<p>面试评价</p>
								</a>
								<a href="#" >
									<span>{{item.num2}}</span>
									<p>在招职位</p>
								</a>
								<a href="#">
									<span>{{item.num3}}</span>
									<p>简历处理率</p>
								</a>
							</div>
						</li>
						
					</ul>
					
					</div>
				</div>

    </div>
</template>

<script>
export default {
	el:"#clist",
	data:{
		clistArr:[
		{imgsrc:'img/company/clist01.png',coporate:'车轮',desc:'移动互联网/C轮/150-500人',brief:'车轮，让有车生活更美好！',num1:84,num2:30,num3:'100%'},
		{imgsrc:'img/company/clist02.jpg',coporate:'亲宝宝',desc:'社交/C轮/150-500人',brief:'陪伴宝宝一起成长',num1:209,num2:71,num3:'100%'},
		{imgsrc:'img/company/clist03.png',coporate:'玩吧',desc:'社交/B轮/150-500人',brief:'让社交更轻松',num1:27,num2:96,num3:'100%'},
		{imgsrc:'img/company/clist04.png',coporate:'CareeFrog',desc:'教育/B轮/150-500人',brief:'大学生求职服务领导者，做中国最有态度的雇主',num1:136,num2:34,num3:'97%'},
		{imgsrc:'img/company/clist05.png',coporate:'航班管家',desc:'移动互联网/C轮/500-2000人',brief:'为用户体验而生',num1:92,num2:49,num3:'100%'},
		{imgsrc:'img/company/clist06.png',coporate:'摩儿妈妈',desc:'移动互联网/C轮/15-50人',brief:'摩尔妈妈是"共享育儿"模式开创者，首个社区共享育儿平台。由携程董事长梁建章和大鱼创始人姚娜共同创立。',num1:53,num2:18,num3:'100%'},
		{imgsrc:'img/company/clist07.png',coporate:'夜神数娱',desc:'移动互联网/C轮/150-500人',brief:'全球领先智能分发网络平台',num1:18,num2:24,num3:'100%'},
		{imgsrc:'img/company/clist08.png',coporate:'果壳网',desc:'移动互联网,社交/C轮/150-500人',brief:'国内知名科学文化品牌，以及在线教育、知识付费产品等多个知名子品牌。'
		,num1:144,num2:34,num3:'100%'},
		{imgsrc:'img/company/clist09.jpg',coporate:'妙计旅行',desc:'旅游/B轮/150-500人',brief:'技术实力派，境外自由行智能搜索引擎。',num1:521,num2:8,num3:'100%'},
		{imgsrc:'img/company/clist10.png',coporate:'企鹅杏仁',desc:'移动互联网,消费生活/B轮/500-2000人',brief:'成为人们一生信任的健康伙伴',num1:83,num2:28,num3:'100%'},
		{imgsrc:'img/company/clist11.png',coporate:'学霸君',desc:'移动互联网,教育/C轮/2000人以上',brief:'让每个家庭为自己的孩子感到骄傲',num1:127,num2:18,num3:'100%'},
		{imgsrc:'img/company/clist12.png',coporate:'达观数据',desc:'人工智能/B轮/150-500人',brief:'文本智能处理专家',num1:62,num2:48,num3:'100%'},
		{imgsrc:'img/company/clist13.jpg',coporate:'假面科技',desc:'社交/B轮/150-500人',brief:'我们不自夸是家伟大的公司，但能承诺你高于行业水平的薪酬，不设限的发展空间，上手就是千万级用户的产品',num1:85,num2:6,num3:'100%'},
		{imgsrc:'img/company/clist14.jpg',coporate:'E签包',desc:'企业服务/B轮/150-500人',brief:'全国领先的第三方电子签名平台',num1:53,num2:18,num3:'100%'},
		{imgsrc:'img/company/clist15.png',coporate:'APUS Group',desc:'移动互联网/C轮/150-500人',brief:'为全球手机用户提供最好的移动互联网体验和服务。',num1:92,num2:30,num3:'100%'},
		{imgsrc:'img/company/clist16.png',coporate:'斗象科技',desc:'信息安全/B轮/150-500人',brief:'互联网安全领导者（www.tophant.com - FreeBuf，漏洞盒子，网藤风险感知）',num1:169,num2:70,num3:'100%'}
		]
	}
}

</script>
<style lang="less">

</style>
