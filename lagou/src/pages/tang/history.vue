<template>

    <ul class="development">
							<li>
								<div class="time">
									<p>15</p>
									<p class="year">2019 Jan</p>
								</div>
								<i></i>
								<div class="development_desc">
									<p>香港上市，股票代码2013.HK</p>
								</div>

							</li>
						<li>
								<div class="time">
									<p>20</p>
									<p class="year">2018&nbsp;Apr</p>
								</div>
								<i class="i-dollar"></i>
								<div class="development_desc">
									<p>获得10.09亿元D轮及以上融资</p>
									<p class="desc_detail">
										融资机构：上海自贸区基金、国和投资、一村资本、天堂硅谷领投；融资金额：10.09亿元
									</p>
								</div>

							</li>
							<li>
								<div class="time">
									<p>09</p>
									<p class="year">2015&nbsp;Nov</p>
								</div>
								<i class="i-dollar"></i>
								<div class="development_desc">
									<p>获得5亿元C轮融资</p>
									<p class="desc_detail">
										融资机构：海航集团；融资金额：5亿元
									</p>
								</div>
							</li>
							<li>
								<div class="time">
									<p>14</p>
									<p class="year">2015&nbsp;May</p>
								</div>
								<i></i>
								<div class="development_desc">
									<p>上海市委副书记应勇参访微盟 赞微盟有速度有活力</p>
								</div>
							</li>
							<li>
								<div class="time">
									<p>15</p>
									<p class="year">2019 Jan</p>
								</div>
								<i></i>
								<div class="development_desc">
									<p>香港上市，股票代码2013.HK</p>
								</div>
							</li>

							<li>
								<div class="time">
									<p>20</p>
									<p class="year">2018&nbsp;Apr</p>
								</div>
								<i class="i-dollar"></i>
								<div class="development_desc">
									<p>获得10.09亿元D轮及以上融资</p>
									<p class="desc_detail">
										融资机构：上海自贸区基金、国和投资、一村资本、天堂硅谷领投；融资金额：10.09亿元
									</p>
								</div>
							</li>

							<li>
								<div class="time">
									<p>09</p>
									<p class="year">2015&nbsp;Nov</p>
								</div>
								<i class="i-dollar"></i>
								<div class="development_desc">
									<p>获得5亿元C轮融资</p>
									<p class="desc_detail">
										融资机构：海航集团；融资金额：5亿元
									</p>
								</div>
							</li>
							<li>
								<div class="time">
									<p>14</p>
									<p class="year">2015&nbsp;May</p>
								</div>
								<i></i>
								<div class="development_desc">
									<p>上海市委副书记应勇参访微盟 赞微盟有速度有活力</p>
								</div>
							</li>
							<li>
								<div class="time">
									<p>09</p>
									<p class="year">2015&nbsp;Nov</p>
								</div>
								<i class="i-dollar"></i>
								<div class="development_desc">
									<p>获得5亿元C轮融资</p>
									<p class="desc_detail">
										融资机构：海航集团；融资金额：5亿元
									</p>
								</div>
							</li>
							<li>
								<div class="time">
									<p>14</p>
									<p class="year">2015&nbsp;May</p>
								</div>
								<i></i>
								<div class="development_desc">
									<p>上海市委副书记应勇参访微盟 赞微盟有速度有活力</p>
								</div>
							</li>

</ul>

</template>

<script>
export default {
  components:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.development {
  padding-left: 50px;
  width: 100%;
}
.development li {
  display: flex;
  margin-bottom: 26px;
  position: relative;
}
.development li .time {
  text-align: right;
  padding-left: 3px;
}
.development li .time p {
  font-size: 18px ;
}
.development li .time .year {
  font-size: 14px;
}
.development li i {
  background-color: white;
  overflow: hidden;
  display: inline-block;
  width: 55px;
  height: 55px;
  margin: 0 10px;
  z-index: 20;
  background: url(../../assets/img/company/his_icons_bb9597a.png) no-repeat -5px -339px;
}
.development li .i-dollar {
  background-position: -5px -99px;
}
.development li .development_desc {
  text-align: left;
}
.development li .development_desc p {
  font-size: 16px;
}
.development li .development_desc .desc_detail {
  font-size: 12px;
  color: #999;
}
.development li:after {
  display: block;
  content: '';
  position: absolute;
  left: 100px;
  top: 53px;
  background: #ededed;
  height: 30px;
  width: 1px;
}
.development li:last-child:after {
  background: white;
}
</style>
