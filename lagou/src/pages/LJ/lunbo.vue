<template>
	<div>
		<div class="swiper-container">
			<div class="swiper-wrapper" @mouseover="fn()" @mouseout="fn1()">
				<div class="swiper-slide">
					<img src="../../assets/banner1.jpg" />
				</div>
				<div class="swiper-slide">
					<img src="../../assets/banner2.jpg" />
				</div>
				<div class="swiper-slide">
					<img src="../../assets/banner3.jpg" />
				</div>
			</div>
			<!--如果需要分页器-->
			<div class="swiper-pagination active"></div>

			<!--如果需要导航按钮-->
			<div class="swiper-button-prev" v-show="isShow" @mouseover="fn()"></div>
			<div class="swiper-button-next" v-show="isShow" @mouseover="fn()"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.css'
	export default {
		mounted() {
			var mySwiper = new Swiper('.swiper-container', {
				loop: true, // 循环模式选项
				autoplay: true,
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				},
				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},

			})
		},
		data(){
			return{
				isShow:false
			}
		},
		methods:{
			fn(){
				this.isShow=true;
			},
			fn1(){
				this.isShow=false;
			}
		}
	}
</script>

<style lang="less" scoped>
	.swiper-container {
		width: 90%;
		height: 400px;
		margin-bottom: 30px;
		margin-top: 50px;
		text-align: center;
	}
	.swiper-button-prev {
		width: 34px;
		height: 64px;
		background: url(../../assets/img/company/icons1_b3ea05c.png) no-repeat 0 -136px;
	}
	img{
		width: 100%;
		height: 450px;
	}
	.swiper-button-next {
		width: 34px;
		height: 64px;
		background: url(../../assets/img/company/icons1_b3ea05c.png) no-repeat -42px -136px;
	}
	
	.swiper-pagination-bullet {
		width: 6px;
		height: 6px;
		background: #00b38a;
	}
</style>