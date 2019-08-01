<template>
  <nav class="navigator">
		<ul>
			<li><i class="line"></i><a href="#product">公司产品</a></li>
			<li><i class="line"></i><a href="#company_intro">公司介绍</a></li>
			<li><i class="line"></i><a href="#history">发展历程</a></li>
			<li><i class="line"></i><a href="#comments">面试评价</a></li>
			<li><i class="line"></i><a href="#location">公司位置</a></li>
		</ul>				
	</nav>
</template>

<script>
export default {
  components:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.navigator{
		ul{
			li{
				position: relative;
				line-height: 40px;
				height: 40px;
				display: flex;
				justify-content: flex-start;
				&:first-of-type{
					a{	
						color: 	#00b38a;
						margin-left:-2px; 			
					&:before{
					height: 8px;
					width: 8px;
					border: 2px solid #00b38a;
					background: white;
					margin-bottom: 0px;
				}
				}
				}
				&:last-of-type{
					.line{
						display: none;
					}
				}
				a{					
					&:before{
					margin-right: 15px;
					content:'';
					display: inline-block;
					height: 7px;
					width: 7px;
					border-radius:50% ;
					background: gainsboro;
					margin-bottom: 2px;
				}
				}
				.line{
					display: inline-block;
					height: 26px;
					width: 2px;
					background: gainsboro;
					position: absolute;
					left: 3px;
					top: 27px;
				}
			}
		}
	}
</style>
