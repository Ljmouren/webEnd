<template>
	<div class="companybox">
		<ul class="module-tabs">
			<li class="current">互联网热门公司榜</li>
		</ul>
		<div class="company">
			<div class="hot_tips" v-show="isshow">
				<span class="icon"><i>?</i></span>
				<div>互联网行业实力热门企业</div>
				<span class="know" @click="change()">我知道了</span>
			</div>
			<ul class="company-list">
				<li v-for="(item,index) in arr">
					<div class="companyt">
						<img :src="item.cover_url" />
						<h3>{{item.companyName}}</h3>
						<span>{{item.type}}</span>
						<p>{{item.desc}}</p>
					</div>
					<div class="companyb">
						<a href="#">
							<p class="green">{{item.ping}}</p>
							<p class="gray">面试评价</p>
						</a>
						<a href="#">
							<p class="green">{{item.nowNum}}</p>
							<p class="gray">在招职位</p>
						</a>
						<a href="#">
							<p class="green">{{item.chuli}}</p>
							<p class="gray">简历处理率</p>
						</a>
					</div>
				</li>
			</ul>
			<div class="a">
				<button class="list-more" :class="{showgreen:isS}" @mousemove="yiru" @mouseout="yichu">查看更多</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isshow: true,
				arr: [],
				isS: false

			}
		},
		mounted() {
			this.company();
		},
		methods: {
			change() {
				this.isshow = !this.isshow;
			},
			company() {
				this.$axios.get('../../static/data/indexcompany.json').then(res => {
					console.log(res.data.recommend_two)
					this.arr = res.data.recommend_two
				})
			},
			yiru() {
				this.isS = true;
			},
			yichu() {
				this.isS = false;
			}
		}
	}
</script>

<style lang="less" scoped>
	.a {
		margin-top: 10px;
		width: 100%;
		text-align: center;
		transform: translateX(-1.5%);
		.list-more {
			width: 31%;
			height: 42px;
			line-height: 42px;
			margin: 20px auto 0;
			background: #FFF;
			border: 1px solid #00B38A;
			font-size: 16px;
			color: #00b38a;
			text-align: center;
			outline: none;
		}
		.showgreen {
			background: #00B38A;
			color: white;
		}
	}
	
	.hot_tips {
		font-size: 14px;
		display: flex;
		margin-top: 30px;
		.icon {
			width: 18px;
			height: 18px;
			border-radius: 50%;
			background-color: #e6e6e6;
			text-align: center;
			color: #fff;
			margin-right: 10px;
		}
		.know {
			color: #13ca86;
			padding-left: 40px;
			cursor: pointer;
		}
	}
	
	.module-tabs {
		width: 97%;
		font-size: 0;
		border-bottom: 1px solid #E8E8E8;
		li {
			border-bottom: 2px solid #333;
			background: #fff;
			color: #333;
			display: inline-block;
			padding: 14px 0;
			margin-right: 58px;
			font-size: 16px;
		}
	}
	
	.companybox {
		width: 90%;
		margin: 0 auto;
		.company {
			.company-list {
				margin-top: 10px;
				overflow: hidden;
				width: 100%;
				img {
					width: 80px;
					height: 80px;
				}
				li {
					box-sizing: border-box;
					float: left;
					width: 23%;
					height: 270px;
					margin-top: 19px;
					margin-right: 21px;
					border: 1px solid #EEE;
					.companyt {
						margin: 0 13px;
						padding: 20px 0 14px;
						text-align: center;
						border-bottom: 1px dashed #E0E0E0;
						position: relative;
						line-height: 24px;
						span {
							color: #999;
							font-size: 14px;
						}
						p {
							text-overflow: ellipsis;
							white-space: nowrap;
							overflow: hidden;
							font-size: 15px;
						}
					}
					.companyb {
						overflow: hidden;
						a {
							float: left;
							position: relative;
							display: block;
							margin-top: 17px;
							text-align: center;
							width: 90px;
							.green {
								color: #00b38a;
							}
							.gray {
								margin-top: 4px;
								font-size: 12px;
								color: #999;
							}
						}
					}
				}
			}
		}
	}
</style>