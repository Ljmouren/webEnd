<template>
  <div>
    <div class="c-wrap">
					<!--筛选-->
				<ul class="filter">
						<li><strong>公司地点：</strong>
							<a href="#" class="active">全国</a>
							<a href="#">北京</a>
							<a href="#">上海</a>
							<a href="#">广州</a>
							<a href="#">深圳</a>
							<a href="#">成都</a>
							<a href="#">南京</a>
							<a href="#">武汉</a>
							<a href="#" class="more">更多&nbsp;<i></i></a>
						</li>
						<li><strong>融资阶段：</strong>
							<a href="#" class="active">不限</a>
							<a href="#">未融资</a>
							<a href="#">天使轮</a>
							<a href="#">A轮</a>
							<a href="#">B轮</a>
							<a href="#">C轮</a>
							<a href="#">D轮</a>
							<a href="#">D轮以上</a>
						</li>
						<li><strong>公司规模：</strong>
							<a href="#" class="active">不限</a>
							<a href="#">少于15人</a>
							<a href="#">15-50人</a>
							<a href="#">50-150人</a>
							<a href="#">150-500人</a>
							<a href="#">500-2000人</a>
							<a href="#">2000人以上</a>
						</li>
						<li><strong>行业领域：</strong>
							<a href="#" class="active">不限</a>
							<a href="#">移动互联网</a>
							<a href="#">电商</a>
							<a href="#">金融</a>
							<a href="#">企业服务</a>
							<a href="#">教育</a>
							<a href="#">文娱</a>
							<a href="#">游戏</a>
							<a href="#" class="more">更多&nbsp;<i></i></a>
						</li>
					</ul>
					<!--排序方式-->
					<ul class="filter">
						<li><strong>排序方式：</strong>
							<a href="#" class="active">默认排序</a>
							<a href="#">职位数量↓</a>
							<a href="#">面试评价数↓</a>
							<a href="#">简历处理率↓</a>
							<span class="check"><i></i>有面试评价</span>
						</li>
					</ul>	
				</div>
   
  </div>
</template>


<script>
export default {};
</script>

<style lang="less">
.c-wrap {
  width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
}

 .filter {
  background: #fafafa;
  border: 1px solid #ededed;
  padding: 5px 15px;
  margin: 20px 0px;
}
.filter li {
  margin: 5px 0px;
}
.filter li a {
  margin-right:5px;
  display: inline-block;
  padding: 4px 8px;
  color: #555;
}
.filter li a.active {
  color: white;
  background: #00b38a;
}
.filter li .more {
  float: right;
  margin: 0 16px;
  position: relative;
}
.content .filter li .more i {
  position: absolute;
  top: 9px;
  right: -3px;
  font-size: 0;
  height: 0;
  width: 0;
  border-width: 6px 6px 0;
  border-style: solid dashed;
  border-color: #00b38a transparent transparent;
  overflow: hidden;
}
 .filter li .check {
  float: right;
  margin: 0 16px;
  position: relative;
  color: #555;
}
 .filter li .check i {
  display: inline-block;
  vertical-align: middle;
  margin: -3px 3px 0;
  width: 18px;
  height: 15px;
  background: url(../../assets/img/company/check_f5603cd.png) no-repeat;
}
</style>


