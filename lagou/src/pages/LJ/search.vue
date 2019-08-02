<template>
	<div class="searchwork">
		<div class="box">
			<div class="form">
				<input type="text" placeholder="搜索职位、公司或地点" @blur="isshow=false" @focus="isshow=true" :class="{foc:isshow}" />
				<button class="search-btn">搜索</button>
			</div>
			<div class="list">
				<span>热门搜索：</span>
				<a href="#">有赞</a>
				<a href="#">java面试</a>
				<a href="#">架构设计</a>
				<a href="#">数量分析</a>
				<a href="#">php</a>
				<a href="#">C++</a>
				</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				isshow: false
			}
		},
	}
</script>

<style lang="less" scoped>
	.foc {
		border: 1px solid #00b38a!important;
	}
	.searchwork {
		width: 100%;
		height: 132px;
		background-color: #f2f5f4;
		position: relative;
		.box {
			width: 80%;
			margin: 0 auto;
			.form {

				width: 938px;
				height: 46px;
				margin: 0 auto;
				overflow: hidden;
				padding-top: 28px;
				input {
					width: 795px;
					height: 46px;
					border: none;
					float: left;
					font-size: 16px;
					padding-left: 15px;
					box-sizing: border-box;
					outline: none;
				}
				.search-btn {
					height: 46px;
					line-height: 46px;
					text-align: center;
					width: 142px;
					border: none;
					background-color: #00b38a;
					color: #fff;
					font-size: 20px;
				}
			}
			.list {
				width: 938px;
				height: 22px;
				margin: 8px auto;
				font-size: 14px;
				color: #999;
				a {
					color: #00b38a;
					padding: 0 8px;
					text-decoration: none;
					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}
</style>