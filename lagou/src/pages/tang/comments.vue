<template>
	<div class="hello">
		<!--<el-rate v-model="score1" disabled show-score text-color="#ff9900" score-template="{value}">
		</el-rate>-->
		<div class="comment_top">
			<p class="overall"> 综合评分：<el-rate v-model="score1" disabled show-score text-color="#ff9900" score-template="{value}">
		</el-rate></p>
			<div class="other_comment">
				<p>
					描述相符&nbsp;<el-rate v-model="score2" disabled show-score text-color="#ff9900" score-template="{value}">
		</el-rate><span class="line"></span>
				</p>

				<p>
					面试官&nbsp;<el-rate v-model="score3" disabled show-score text-color="#ff9900" score-template="{value}">
		</el-rate><span class="line"></span>
				</p>
				<p>
					公司环境&nbsp;<el-rate v-model="score4" disabled show-score text-color="#ff9900" score-template="{value}">
		</el-rate></p>
			</div>
		</div>
		<div class="comment_item" v-for="item in commentArr">
			<div class="avater">
				<img :src="item.avater" />
			</div>
			<div class="item_right">
				<p class="review-stars">
					<span>{{item.name}}</span>
					<span class="zonghe"><span class="light">综合评分:</span><el-rate v-model="item.score" disabled show-score text-color="#ff9900" score-template="{value}">
		</el-rate>
					</span>
					<span><span class="light">面试职位：</span>{{item.jobname}} </span>
					<span class="light">{{item.review_date}}</span>
				</p>
				<p class="review-tags">
					<span v-for="item2 in item.tags">{{item2}}</span>
				</p>
				<p>
					<span class="light">[面试过程]</span>{{item.interview_process}}
				</p>
				<p>
					<span class="light">企业回复&nbsp;</span>
					<span class="review-action">有用（{{item.useful}}）</span>
				</p>
				<div class="review-reply">
					<div class="triangleOut"></div>
					<div class="triangleIn"></div>
					<div class="reply-area" >
						<img src="../../assets/img/company/CgotOVtpVEWAc5gqAAF9qlpglcY871.jpg" />
						<div>
							<span class="light">微盟&nbsp;&nbsp;·HR&nbsp;&nbsp;·人事</span>
							<br /> 加油，你就是下一个牛人！
						</div>
						<span class="reply_time light">{{item.review_date}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="view_more"><a href="#">查看更多</a></div>
	</div>
</template>

<script>
export default {
	data() {
      return {
        score1: 4.4,
        score2: 4.3,
        score3: 4.5,
        score4: 4.6,
        commentArr:[]
      }
    },
	mounted(){
		this.$axios('https://www.easy-mock.com/mock/5d40e4c33ef5b46c529f3f79/comments/comments').
		then(res=>{
			this.commentArr=res.data.data;
//			console.log(res.data.data)
		})
	}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.comment_top {
		border-bottom: 1px dashed #ccc;
		padding-bottom: 20px;
	}
	
	.comment_top p {
		display: flex;
		flex-wrap: nowrap;
	}
	
	.comment_top p .come {
		color: #555555;
		font-size: 12px;
	}
	
	.comment_top .overall {
		color: #000000;
		line-height: 35px;
		margin-bottom: 5px;
		.el-icon-star-on:before{
			font-size: 30px;
		}
		.el-rate__text{
			font-size: 20px;
		}
	}
	
	.comment_top .overall .score {
		font-size: 22px;
		color: red;
	}
	
	.comment_top .little {
		color: red;
	}
	
	.comment_top .other_comment {
		display: flex;
		
		.el-icon-star-on:before{
			font-size: 22px;
		}
	}
	
	.comment_top .other_comment p {
		flex: 1;
		position: relative;
		font-size: 14px;
	}
	
	.comment_top .other_comment p .line {
		width: 2px;
		height: 12px;
		right: 15px;
		top: 5px;
		background: gainsboro;
		position: absolute;
	}
	
	.comment_item {
		display: flex;
		padding: 30px 0;
		border-bottom: 1px dashed #ccc;
		text-align: left;
		font-size: 15px;
	}
	
	
	.comment_item .avater img {
		width: 50px;
		height: 50px;
		border-radius: 50px;
	}
	
	.comment_item .item_right {
		width: 100%;
		p{
			padding: 5px 0;
		}
	}
	
	.comment_item .item_right .light {
		color: #999999;
	}
	
	.comment_item .item_right .review-stars {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		padding-left: 15px;
		position: relative;
	}
	
	.comment_item .item_right .review-stars .zonghe {
		display: flex;
	}
	
	.comment_item .item_right .review-tags {
		text-align: left;
	}
	
	.comment_item .item_right .review-tags span {
		border: 1px solid #dce4e6;
		border-radius: 15px;
		font-size: 12px;
		padding: 1px 10px;
		display: inline-block;
	}
	
	.comment_item .item_right .review-action {
		color: #00b38a;
		display: inline-block;
		border-left: 1px solid #ccc;
		padding-left: 10px;
	}
	
	.comment_item .item_right .review-reply {
		margin-top: 10px;
		position: relative;
	}
	
	.comment_item .item_right .review-reply .triangleOut {
		position: absolute;
		top: -10px;
		left: 16px;
		width: 0;
		height: 0;
		border-right: 10px solid transparent;
		border-bottom: 10px solid #dce4e6;
	}
	
	.comment_item .item_right .review-reply .triangleIn {
		position: absolute;
		top: -8px;
		left: 17px;
		width: 0;
		height: 0;
		border-right: 9px solid transparent;
		border-bottom: 9px solid #fafafa;
	}
	
	.comment_item .item_right .review-reply .reply-area {
		padding: 14px 10px 20px;
		margin-top: 10px;
		border: 1px solid #dce4e6;
		border-radius: 3px;
		background-color: #fafafa;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
	}
	
	.comment_item .item_right .review-reply .reply-area img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	
	.comment_item .item_right .review-reply .reply-area div {
		width: 78%;
	}	
	.view_more{
		width: 100%;
		text-align: center;
		a{
		display: inline-block;
		margin: 30px auto 0;
		padding: 8px 15px;
		line-height: 14px;
		text-align: center;
		border-radius: 4px;
		color: #00b38a;
		border: 1px solid #00b38a;
		&:hover {
		color: white;
		background: #00b38a;
	}
	}
		
	}
	
	.none{
		display: none;
	}
</style>
<style >
	.el-rate__icon{
			margin-right: 0;
		}
</style>