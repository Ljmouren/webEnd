<template>
	<div class="curbox">
		<div class="currentbox">
			<ul class="module-tabs">
				<li>友情链接</li>
			</ul>
			<dl>
				<dd>
					<a>拉勾网</a>
					<a>教师网</a>
					<a>招聘</a>
					<a>app下载</a>
					<a>java课</a>
					<a>架构课</a>
					<a>中大网校</a>
					<a>教师招聘</a>
					<a>人人都是产品经理</a>
					<a>新疆人才网</a>
					<a>研究报告</a>
					<a>互联网的一些事</a>
					<a>人才招聘</a>
					<div v-show="is">
						<a>架构课</a>
						<a>中大网校</a>
						<a>教师招聘</a>
						<a>人人都是产品经理</a>
						<a>新疆人才网</a>
						<a>研究报告</a>
						<a>互联网的一些事</a>
						<a>人才招聘</a>
						<a>架构课</a>
						<a>中大网校</a>
						<a>教师招聘</a>
						<a>人人都是产品经理</a>
						<a>新疆人才网</a>
						<a>研究报告</a>
						<a>互联网的一些事</a>
						<a>人才招聘</a>
						<a>架构课</a>
						<a>中大网校</a>
						<a>教师招聘</a>
						<a>人人都是产品经理</a>
						<a>新疆人才网</a>
						<a>研究报告</a>
						<a>互联网的一些事</a>
						<a>人才招聘</a>
						<a>架构课</a>
						<a>中大网校</a>
						<a>教师招聘</a>
						<a>人人都是产品经理</a>
						<a>新疆人才网</a>
						<a>研究报告</a>
						<a>互联网的一些事</a>
						<a>人才招聘</a>
						<a>架构课</a>
						<a>中大网校</a>
						<a>教师招聘</a>
						<a>人人都是产品经理</a>
						<a>新疆人才网</a>
						<a>研究报告</a>
						<a>互联网的一些事</a>
						<a>人才招聘</a>
						<a>架构课</a>
						<a>中大网校</a>
						<a>教师招聘</a>
						<a>人人都是产品经理</a>
						<a>新疆人才网</a>
						<a>研究报告</a>
						<a>互联网的一些事</a>
						<a>人才招聘</a>
						<a class="more">更多</a>
					</div>
				</dd>
				<span class="expansion" @click="fn()">{{isS}}<i :class="{bian:is}"></i></span>
			</dl>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isS: '展开',
				is: false
			}
		},
		methods: {
			fn() {
				if(this.isS == '展开') {
					this.isS = '收起';
					this.is = true;
				} else if(this.isS == '收起') {
					this.isS = '展开';
					this.is = false;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.module-tabs {
		width: 97%;
		border-bottom: 1px solid #E8E8E8;
		margin: 2px 0px 14px;
		li {
			border-bottom: 2px solid #333!important;
			background: #fff;
			color: #333;
			display: inline-block;
			font-size: 16px;
			padding: 10px 0;
		}
	}
	
	.curbox {
		width: 90%;
		margin: 0 auto;
	}
	
	dl {
		width: 97%;
		position: relative;
		.expansion {
			height: 22px;
			position: absolute;
			right: 3px;
			cursor: pointer;
			color: #999;
			font-size: 14px;
			top: 0px;
			i {
				display: inline-block;
				width: 12px;
				height: 12px;
				margin-left: 5px;
				background-image: url(//www.lgstatic.com/www/static/index/modules/friendlink/img/arrow_down2_eea7e54.png);
				background-repeat: no-repeat;
				background-position: 0 3px;
				background-size: 12px 6px;
				&.bian {
					transform: rotate(180deg);
				}
			}
		}
		dd {
			position: relative;
			width: 97%;
			color: #555;
			font-size: 15px;
			overflow: hidden;
			margin-bottom: 60px;
			a {
				color: #555;
				line-height: 26px;
				padding: 0px 8px;
				&:hover {
					color: #00b38a;
					text-decoration: underline;
				}
				&.more {
					text-decoration: underline;
				}
			}
		}
	}
</style>