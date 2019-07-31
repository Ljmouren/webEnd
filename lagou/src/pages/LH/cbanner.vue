<template>
  <div>
    <div class="block">
      <el-carousel trigger="click" height="398px" indicator-position='none' >
        <el-carousel-item v-for="(item,index) in 4" :key="index">
              <h3 class="small"> 什么值得投 </h3>
			  <div class="company_banner" v-if='index==0'>
				<ul class="it_content">
					<li >
						<img src="//www.lgstatic.com/thumbnail_240x240/i/image/M00/C3/CB/Cgp3O1jcvUOATXv_AABZ6zpEAKk174.jpg" alt="" />
						<p>微盟</p>
						<div class="time">
							07/02
							<span class="ic-before">
							</span>
							<span>
							</span>
						</div>
					</li>
					<li>
						<img src="../../assets/img/company/CgotOVxmWR6AHajrAAAPTaxGj4w370.jpg" alt="" />
						<p>车好多</p>
						<div class="time">
							07/01
							<span>
							</span>
						</div>
					</li>
					<li>
						<img src="../../assets/img/company/CgqKkVf8uQeAOqJ2AAArfl5skXY149.png" alt="" />
						<p>有鱼金融科技</p>
						<div class="time">
							06/30
							<span>
							</span>
						</div>
					</li>
					<li>
						<img src="../../assets/img/company/CgoB5lwHi-2ADLSxAACEBWVZGpw497.png" alt="" />
						<p>作业帮</p>
						<div class="time">
							06/29
							<span>
							</span>
						</div>
					</li>
					<li>
						<img src="../../assets/img/company/CgotOVvycNiAAe8OAABhrmY_47k309.png" alt="" />
						<p>贝壳</p>
						<div class="time">
							06/28
							<span>
							</span>
						</div>
					</li>
				</ul>
    </div>
		  <div class="company_banner" v-if='index==1'>
				<ul class="it_content">
					<li>
							<img src="../../assets/img/company/Cgp3O1dQFiaAelOPAAF1O_dbrx8557.jpg" alt="" />
						<p>微盟2</p>
						<div class="time">
							07/02
							<span class="ic-before">
							</span>
							<span>
							</span>
						</div>
					</li>
					<li>
						<img src="../../assets/img/company/CgotOVxmWR6AHajrAAAPTaxGj4w370.jpg" alt="" />
						<p>车好多2</p>
						<div class="time">
							07/01
							<span>
							</span>
						</div>
					</li>
					<li>
						<img src="../../assets/img/company/CgqKkVf8uQeAOqJ2AAArfl5skXY149.png" alt="" />
						<p>有鱼金融科技2</p>
						<div class="time">
							06/30
							<span>
							</span>
						</div>
					</li>
					<li>
						<img src="../../assets/img/company/CgoB5lwHi-2ADLSxAACEBWVZGpw497.png" alt="" />
						<p>作业帮2</p>
						<div class="time">
							06/29
							<span>
							</span>
						</div>
					</li>
					<li>
						<img src="../../assets/img/company/CgotOVvycNiAAe8OAABhrmY_47k309.png" alt="" />
						<p>贝壳2</p>
						<div class="time">
							06/28
							<span>
							</span>
						</div>
					</li>
				</ul>
    </div>
	<div class="company_banner" v-if='index==2'>
				<ul class="it_content">
					<li>
							<img src="../../assets/img/company/Cgp3O1dQFiaAelOPAAF1O_dbrx8557.jpg" alt="" />
						<p>微盟3</p>
						<div class="time">
							07/02
							<span class="ic-before">
							</span>
							<span>
							</span>
						</div>
					</li>
					<li>
						<img src="../../assets/img/company/CgotOVxmWR6AHajrAAAPTaxGj4w370.jpg" alt="" />
						<p>车好多3</p>
						<div class="time">
							07/01
							<span>
							</span>
						</div>
					</li>
					<li>
						<img src="../../assets/img/company/CgqKkVf8uQeAOqJ2AAArfl5skXY149.png" alt="" />
						<p>有鱼金融科技3</p>
						<div class="time">
							06/30
							<span>
							</span>
						</div>
					</li>
					<li>
						<img src="../../assets/img/company/CgoB5lwHi-2ADLSxAACEBWVZGpw497.png" alt="" />
						<p>作业帮3</p>
						<div class="time">
							06/29
							<span>
							</span>
						</div>
					</li>
					<li>
						<img src="../../assets/img/company/CgotOVvycNiAAe8OAABhrmY_47k309.png" alt="" />
						<p>贝壳3</p>
						<div class="time">
							06/28
							<span>
							</span>
						</div>
					</li>
				</ul>
    </div>
	<div class="company_banner" v-if='index==3'>
				<ul class="it_content">
					<li>
							<img src="../../assets/img/company/Cgp3O1dQFiaAelOPAAF1O_dbrx8557.jpg" alt="" />
						<p>微盟4</p>
						<div class="time">
							07/02
							<span class="ic-before">
							</span>
							<span>
							</span>
						</div>
					</li>
					<li>
						<img src="../../assets/img/company/CgotOVxmWR6AHajrAAAPTaxGj4w370.jpg" alt="" />
						<p>车好多4</p>
						<div class="time">
							07/01
							<span>
							</span>
						</div>
					</li>
					<li>
						<img src="../../assets/img/company/CgqKkVf8uQeAOqJ2AAArfl5skXY149.png" alt="" />
						<p>有鱼金融科技4</p>
						<div class="time">
							06/30
							<span>
							</span>
						</div>
					</li>
					<li>
						<img src="../../assets/img/company/CgoB5lwHi-2ADLSxAACEBWVZGpw497.png" alt="" />
						<p>作业帮4</p>
						<div class="time">
							06/29
							<span>
							</span>
						</div>
					</li>
					<li>
						<img src="../../assets/img/company/CgotOVvycNiAAe8OAABhrmY_47k309.png" alt="" />
						<p>贝壳4</p>
						<div class="time">
							06/28
							<span>
							</span>
						</div>
					</li>
				</ul>
    </div>
	
        </el-carousel-item>
      </el-carousel>
    </div>
   
  </div>
</template>

<script>
export default {



};
</script>

<style lang="less">
  .el-carousel__item h3 {
	color: white;
	text-align: center;
	padding: 20px 0 30px;
	font-size: 30px;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #00b38b;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color:#00b38b;
  }

</style>