<template>
	<div class="itemjob">
		<div class="itembox">
			<ul class="items" v-for="item in arr">
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
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [],
			}
		},
		mounted(){
			this.itemjob()
		},
		methods: {
			itemjob() {
				this.$axios.get('../../static/data/indexJob.json').then(res => {
					this.arr=res.data.recommend_one
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.itemjob {
		width: 90%;
		margin: 0 auto;
		.itembox{
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