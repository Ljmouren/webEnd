<template>
	<div class="itemjob">
		<div class="itemBig">
			<ul class="jobTab">
				<li @click="layout='hot'" :class="{active:layout=='hot'}">24Hour热门</li>
				<li  @click="layout='now'" :class="{active:layout=='now'}">最新职位</li>
			</ul>
			<div class="hot_tips" :class="{show:isshow}">
				<span class="icon"><i>?</i></span>
				<div>过去24小时，最多人看过的岗位在这里</div>
				<span class="know" @click="change()">我知道了</span>
			</div>
			<div class="itembox">
				<ul class="items" v-for="item in arr" v-show="layout=='hot'">
					<li class="itemsli">
						<div class="itemt">
							<p>
								<span>{{item.title}}</span>
								<em>[{{item.date}}发布]</em>
								<i></i>
								<strong>{{item.wage}}</strong>
							</p>
							<p class="jy">经验{{item.workdate}}</p>
							<a>{{item.type}}</a>
						</div>
						<div class="itemb">
							<img :src="item.cover_url" />
							<div>
								<p>{{item.jobName}}</p>
								<span>{{item.desc}}</span>
							</div>
						</div>
					</li>
				</ul>
				<ul class="items" v-for="item in arr" v-show="layout=='now'">
					<li class="itemsli">
						<div class="itemt">
							<p>
								<span>{{item.title}}</span>
								<em>[{{item.date}}发布]</em>
								<i></i>
								<strong>{{item.wage}}</strong>
							</p>
							<p class="jy">经验{{item.workdate}}</p>
							<a>{{item.type}}</a>
						</div>
						<div class="itemb">
							<img :src="item.cover_url" />
							<div>
								<p>{{item.jobName}}</p>
								<span>{{item.desc}}</span>
							</div>
						</div>
					</li>
				</ul>
				<div class="a">
					<button class="list-more" @click="fn()" :class="{showgreen:isS}" @mousemove="yiru" @mouseout="yichu">查看更多</button>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [],
				isshow: false,
				isS: false,
				layout:'hot'
			}
		},
		mounted() {
			this.itemjob()
		},
		methods: {
			itemjob() {
				this.$axios.get('../../static/data/indexJob.json').then(res => {
					this.arr = res.data.recommend_one
				})
			},
			change() {
				this.isshow = !this.isshow;
			},
			yiru() {
				this.isS = true;
			},
			yichu() {
				this.isS = false;
			},
			fn(){
				this.$router.push('/jobHome');
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
	.show {
		display: none;
	}
	.itemjob {
		width: 90%;
		margin: 0 auto;
		.itemBig{
			width: 100%;
		}
		.jobTab {
			width: 97%;
			box-sizing: border-box;
			margin-top: 30px;
			border-bottom: 1px solid #ccc;
			overflow: hidden;
			li {
				float: left;
				line-height: 60px;
				margin-right: 45px;
				color: #999999;
				&.active {
					border-bottom: 2px solid #333333;
					color: black;
				}
			}
		}
		.itembox {
			.items {
				width: 100%;
				font-size: 15px;
				.itemsli {
					width: 31%;
					height: 200px;
					padding: 15px;
					border: 1px solid #EAEEED;
					background-color: #fff;
					box-sizing: border-box;
					float: left;
					margin: 20px 24px 0 0;
					overflow: hidden;
					.itemt {
						position: relative;
						line-height: 30px;
						a {
							display: inline-block;
							width: 61px;
							height: 26px;
							padding: 0 5px;
							font-size: 12px;
							line-height: 26px;
							color: #999;
							border: 1px solid #F0F0F0;
							border-radius: 3px;
							text-align: center;
						}
						.jy {
							color: #999;
						}
						span {
							font-size: 16px;
						}
						i {
							display: inline-block;
							position: relative;
							width: 16px;
							height: 16px;
							background: url(//www.lgstatic.com/www/static/index/modules/job_list/img/icon_chat2_d162651.png) no-repeat 0 0;
							cursor: pointer;
							top: 2px;
							margin-left: 6px;
						}
						em {
							color: #999;
							margin-left: 6px;
						}
						strong {
							float: right;
							color: red;
						}
					}
					.itemb {
						overflow: hidden;
						margin-top: 18px;
						padding-top: 18px;
						border-top: 1px dashed #E0E0E0;
						div {
							margin-left: 54px;
							span {
								display: inline-block;
								color: #999;
							}
						}
						img {
							width: 40px;
							height: 40px;
							float: left;
						}
					}
				}
			}
		}
	}
</style>