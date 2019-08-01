<template>
  <div>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<img src="../../assets/img/company/Cgp3O1g2lISAF7StAAHMTtPFAEc666.jpg" />
			</div>
			<div class="swiper-slide">
				<img src="../../assets/img/company/Cgp3O1g2lJ6AZtzLAAFKXRU2q2c528.jpg" />
			</div>
			<div class="swiper-slide">
				<img src="../../assets/img/company/CgpFT1mpMZ-APvajAALLU3vnoSc683.jpg" />
			</div>
			<div class="swiper-slide">
				<img src="https://www.lgstatic.com/thumbnail_1000x0/i/image/M00/85/95/CgqKkVhh2BKAIY6qAAJQw1cQ178094.jpg" />
			</div>
			<div class="swiper-slide">
				<img src="https://www.lgstatic.com/thumbnail_1000x0/i/image/M00/85/95/CgqKkVhh2AeAGja1AAMW74kG0BU600.jpg" />
			</div>
			<div class="swiper-slide">
				<img src="https://www.lgstatic.com/thumbnail_1000x0/i/image/M00/85/95/CgqKkVhh2BaAaGurAAIDAw-ZjcM408.jpg" />
			</div>
			<div class="swiper-slide">
				<img src="https://www.lgstatic.com/thumbnail_1000x0/i/image/M00/85/95/CgqKkVhh2K-ATMPfAAKaIpDCwP4733.jpg" />
			</div>
			
		</div>
		 <!--如果需要分页器--> 
		<div class="swiper-pagination"></div>

		 <!--如果需要导航按钮--> 
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
</div>
	</div>
</template>

<script> 
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default{
components: {
  
  },
	mounted(){
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
	}
}
</script>

<style>
.swiper-container {
  width: 600px;
  height: 400px;
  margin-bottom: 30px;
  text-align: center;
}
.swiper-container .swiper-wrapper img {
  height: 80%;
}
.swiper-button-prev {
  width: 34px;
  height: 64px;
  background: url(../../assets/img/company/icons1_b3ea05c.png) no-repeat 0 -136px;
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