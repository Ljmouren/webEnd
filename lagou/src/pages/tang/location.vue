<template>
	<div>

		<!--百度地图容器-->
		<div class="mapBox">
			<baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler">
				<bm-marker :position="center" :dragging="true" :icon='{url:"https://webapi.amap.com/theme/v1.3/markers/n/mark_bs.png",size: {width: 19, height: 33}}'>
				</bm-marker>
				<bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
			</baidu-map>
			<div class="box_rigth">
				<div class="right_top">
					<div class="address">
						<span class="number">1</span>
						<strong>上海市，宝山区</strong>
						<i></i>
					</div>
					<p><span>吴淞</span></p>
					<p>上海宝山区长江路258号中成智谷创意园区B1栋微盟大厦</p>
				</div>
				<p class="total_address">
					该公司有<span>1</span>个地址
				</p>
			</div>
		</div>
		<div class="recomand">
			<div class="rec_job">
				<span>推荐职位:</span>
				<span class="rec_item">
							<a href="https://www.lagou.com/zhaopin/PHP/">php招聘</a>
                            <a href="https://www.lagou.com/zhaopin/chanpinjingli/">产品经理招聘</a>
                            <a href="https://www.lagou.com/zhaopin/Android/">Android招聘</a>
                            <a href="https://www.lagou.com/zhaopin/HTML5/">HTML5招聘</a>
                            <a href="https://www.lagou.com/zhaopin/iOS/">iOS招聘</a>
                            <a href="https://www.lagou.com/zhaopin/UI/">UI招聘</a>
							</span>
				<span class="show"  v-show="!isShow" @click="show()">展开<i class="el-icon-arrow-down"></i></span>
				<span class="show" v-show="isShow" @click="show()">收起<i class="el-icon-arrow-up"></i></span>
			</div>
			<div class="rec_job" v-show="isShow">
				<span>推荐城市:</span>
				<span class="rec_item" >
							<a href="https://www.lagou.com/beijing/">北京招聘</a>
                    <a href="https://www.lagou.com/shanghai/">上海找工作</a>
                    <a href="https://www.lagou.com/shanghai/">上海招聘</a>
                    <a href="https://www.lagou.com/hangzhou/">杭州找工作</a>
                    <a href="https://www.lagou.com/hangzhou/">杭州招聘</a>
                    <a href="https://www.lagou.com/guangzhou/">广州找工作</a>
                    <a href="https://www.lagou.com/guangzhou/">广州招聘</a>
                    <a href="https://www.lagou.com/shenzhen/">深圳找工作</a>
                    <a href="https://www.lagou.com/shenzhen/">深圳招聘</a>
                    <a href="https://www.lagou.com/chengdu/">成都找工作</a>
                    <a href="https://www.lagou.com/chengdu/">成都招聘</a>
							</span>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				center: {
					lng: 0,
					lat: 0
				},
				zoom: 3,
				isShow:false,
				text:'展开'
			}
		},
		methods: {
			handler({BMap,map}) {
//				console.log(BMap, map)
				this.center.lng = 121.50501;
				this.center.lat = 31.35446;
				this.zoom = 15;
			},
			show(){
				this.isShow=!this.isShow
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.mapBox {
		display: flex;
		flex-wrap: nowrap;
	}
	
	.mapBox .box_rigth {
		border: 1px solid #eee;
		padding: 20px 15px;
		font-size: 14px;
	}
	
	.mapBox .box_rigth .right_top {
		display: flex;
		flex-direction: column;
		text-align: left;
		padding-bottom: 15px;
		border-bottom: 1px dashed #eee;
	}
	
	.mapBox .box_rigth .right_top .number {
		display: inline-block;
		background: #00b38a;
		color: white;
		padding: 0 5px;
	}
	
	.mapBox .box_rigth .right_top i {
		display: inline-block;
		position: relative;
		top: 1px;
		float: right;
		width: 15px;
		height: 15px;
		cursor: pointer;
		background: url(../../assets/img/company/icons3_9c9b960.png) no-repeat 1px 2px;
	}
	
	.mapBox .box_rigth .right_top p {
		padding-left: 20px;
		margin: 0;
		color: #777;
	}
	
	.mapBox .box_rigth .right_top p span {
		width: 60px;
		height: 20px;
		border-radius: 13px;
		border: 1px solid #e7e7e7;
		text-align: center;
		line-height: 30px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		margin-top: 10px;
		padding: 2px 10px;
	}
	
	.mapBox .box_rigth .total_address {
		text-align: center;
		color: #777;
		margin-top: 20px;
	}
	
	.mapBox .box_rigth .total_address span {
		color: #00b38a;
	}
	
	.bm-view {
		width: 400px;
		height: 250px;
		border: #ccc solid 1px;
	}
	.recomand{
		margin-top: 20px;
		width: 100%;
	}
	.rec_job {	
		box-sizing: border-box;	
		display: flex;
		margin-bottom: 10px;
		span {
			font-size: 14px;
			color: #bebebe;
			width: 10%;
			a {
				margin-left: 25px;
				text-decoration: underline;
				color: #999;
			}
		}
		.rec_item {
			display: block;
			width: 80%;
		}
	}
</style>
<style scoped>
	.show{
		cursor: pointer;
	}
</style>