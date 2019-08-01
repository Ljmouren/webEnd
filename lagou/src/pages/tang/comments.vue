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
<<<<<<< HEAD
		<div class="comment_item">
			<div class="avater">
				<img src="../../assets/img/company/CgotOVzCdtaAQpusAADMgbffW5w82.jpeg" />
			</div>
			<div class="item_right">
				<p class="review-stars">
					<span>王*杰</span>
					<span class="zonghe"><span class="light">综合评分:</span><input class="rating" data-size="xs" value="4.6" data-show-caption="false" data-show-clear='false' readonly>
					</span>
					<span><span class="light">面试职位：</span>Java(NSD)J10026 </span>
					<span class="light">2019-06-21</span>
				</p>
				<p class="review-tags">
					<span>面试官是大牛</span>
					<span>面试官很nice</span>
				</p>
				<div>
					<span class="light">[面试过程]</span>面试官很牛，受虐了！
				</div>
				<div>
					<span class="light">企业回复&nbsp;</span>
					<span class="review-action">有用（1）</span>
				</div>
				<div class="review-reply">
					<div class="triangleOut"></div>
					<div class="triangleIn"></div>
					<div class="reply-area">
						<img src="../../assets/img/company/CgotOVtpVEWAc5gqAAF9qlpglcY871.jpg" />
						<div>
							<span class="light">微盟&nbsp;&nbsp;·HR&nbsp;&nbsp;·人事</span>
							<br /> 加油，你就是下一个牛人！
						</div>
						<span class="reply_time light">2019-06-27</span>
					</div>
				</div>
			</div>
		</div>

		<div class="comment_item">
			<div class="avater">
				<img src="../../assets/img/company/CgotOVzCdtaAQpusAADMgbffW5w82.jpeg" />
			</div>
			<div class="item_right">
				<p class="review-stars">
					<span>王*杰</span>
					<span class="zonghe"><span class="light">综合评分:</span><input class="rating" data-size="xs" value="4.6" data-show-caption="false" data-show-clear='false' readonly>
					</span>
					<span><span class="light">面试职位：</span>Java(NSD)J10026 </span>
					<span class="light">2019-06-21</span>
				</p>
				<p class="review-tags">
					<span>面试官是大牛</span>
					<span>面试官很nice</span>
				</p>
				<div>
					<span class="light">[面试过程]</span>面试官很牛，受虐了！
				</div>
				<div>
					<span class="light">企业回复&nbsp;</span>
					<span class="review-action">有用（1）</span>
				</div>
				<div class="review-reply">
					<div class="triangleOut"></div>
					<div class="triangleIn"></div>
					<div class="reply-area">
						<img src="../../assets/img/company/CgotOVtpVEWAc5gqAAF9qlpglcY871.jpg" />
						<div>
							<span class="light">微盟&nbsp;&nbsp;·HR&nbsp;&nbsp;·人事</span>
							<br /> 加油，你就是下一个牛人！
						</div>
						<span class="reply_time light">2019-06-27</span>
					</div>
				</div>
			</div>
		</div>
		<div class="comment_item">
			<div class="avater">
				<img src="../../assets/img/company/CgotOVzCdtaAQpusAADMgbffW5w82.jpeg" />
			</div>
			<div class="item_right">
				<p class="review-stars">
					<span>王*杰</span>
					<span class="zonghe"><span class="light">综合评分:</span><input class="rating" data-size="xs" value="4.6" data-show-caption="false" data-show-clear='false' readonly>
					</span>
					<span><span class="light">面试职位：</span>Java(NSD)J10026 </span>
					<span class="light">2019-06-21</span>
				</p>
				<p class="review-tags">
					<span>面试官是大牛</span>
					<span>面试官很nice</span>
				</p>
				<div>
					<span class="light">[面试过程]</span>面试官很牛，受虐了！
				</div>
				<div>
					<span class="light">企业回复&nbsp;</span>
					<span class="review-action">有用（1）</span>
				</div>
				<div class="review-reply">
					<div class="triangleOut"></div>
					<div class="triangleIn"></div>
					<div class="reply-area">
						<img src="../../assets/img/company/CgotOVtpVEWAc5gqAAF9qlpglcY871.jpg" />
						<div>
							<span class="light">微盟&nbsp;&nbsp;·HR&nbsp;&nbsp;·人事</span>
							<br /> 加油，你就是下一个牛人！
						</div>
						<span class="reply_time light">2019-06-27</span>
					</div>
				</div>
			</div>
		</div>
		<div class="comment_item">
			<div class="avater">
				<img src="../../assets/img/company/CgotOVzCdtaAQpusAADMgbffW5w82.jpeg" />
			</div>
			<div class="item_right">
				<p class="review-stars">
					<span>王*杰</span>
					<span class="zonghe"><span class="light">综合评分:</span><input class="rating" data-size="xs" value="4.6" data-show-caption="false" data-show-clear='false' readonly>
					</span>
					<span><span class="light">面试职位：</span>Java(NSD)J10026 </span>
					<span class="light">2019-06-21</span>
				</p>
				<p class="review-tags">
					<span>面试官是大牛</span>
					<span>面试官很nice</span>
				</p>
				<div>
					<span class="light">[面试过程]</span>面试官很牛，受虐了！
				</div>
				<div>
					<span class="light">企业回复&nbsp;</span>
					<span class="review-action">有用（1）</span>
				</div>
				<div class="review-reply">
					<div class="triangleOut"></div>
					<div class="triangleIn"></div>
					<div class="reply-area">
						<img src="../../assets/img/company/CgotOVtpVEWAc5gqAAF9qlpglcY871.jpg" />
						<div>
							<span class="light">微盟&nbsp;&nbsp;·HR&nbsp;&nbsp;·人事</span>
							<br /> 加油，你就是下一个牛人！
						</div>
						<span class="reply_time light">2019-06-27</span>
					</div>
				</div>
			</div>
		</div>
		<div class="comment_item">
			<div class="avater">
				<img src="../../assets/img/company/CgotOVzCdtaAQpusAADMgbffW5w82.jpeg" />
			</div>
			<div class="item_right">
				<p class="review-stars">
					<span>王*杰</span>
					<span class="zonghe"><span class="light">综合评分:</span><input class="rating" data-size="xs" value="4.6" data-show-caption="false" data-show-clear='false' readonly>
					</span>
					<span><span class="light">面试职位：</span>Java(NSD)J10026 </span>
					<span class="light">2019-06-21</span>
				</p>
				<p class="review-tags">
					<span>面试官是大牛</span>
					<span>面试官很nice</span>
				</p>
				<div>
					<span class="light">[面试过程]</span>面试官很牛，受虐了！
				</div>
				<div>
					<span class="light">企业回复&nbsp;</span>
					<span class="review-action">有用（1）</span>
				</div>
				<div class="review-reply">
					<div class="triangleOut"></div>
					<div class="triangleIn"></div>
					<div class="reply-area">
=======
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
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
						<img src="../../assets/img/company/CgotOVtpVEWAc5gqAAF9qlpglcY871.jpg" />
						<div>
							<span class="light">微盟&nbsp;&nbsp;·HR&nbsp;&nbsp;·人事</span>
							<br /> 加油，你就是下一个牛人！
						</div>
<<<<<<< HEAD
						<span class="reply_time light">2019-06-27</span>
=======
						<span class="reply_time light">{{item.review_date}}</span>
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
					</div>
				</div>
			</div>
		</div>
<<<<<<< HEAD
		<a class="view_more" href="#">查看更多</a>
=======
		<div class="view_more"><a href="#">查看更多</a></div>
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
	</div>
</template>

<script>
<<<<<<< HEAD
	export default {
		 data() {
=======
export default {
	data() {
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
      return {
        score1: 4.4,
        score2: 4.3,
        score3: 4.5,
        score4: 4.6,
<<<<<<< HEAD
      }
    },
		components: {

		}
=======
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
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
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
<<<<<<< HEAD
		line-height: 50px;
=======
		line-height: 35px;
		margin-bottom: 5px;
		.el-icon-star-on:before{
			font-size: 30px;
		}
		.el-rate__text{
			font-size: 20px;
		}
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
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
<<<<<<< HEAD
=======
		
		.el-icon-star-on:before{
			font-size: 22px;
		}
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
	}
	
	.comment_top .other_comment p {
		flex: 1;
		position: relative;
<<<<<<< HEAD
=======
		font-size: 14px;
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
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
<<<<<<< HEAD
	}
	
=======
		font-size: 15px;
	}
	
	
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
	.comment_item .avater img {
		width: 50px;
		height: 50px;
		border-radius: 50px;
	}
	
	.comment_item .item_right {
		width: 100%;
<<<<<<< HEAD
=======
		p{
			padding: 5px 0;
		}
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
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
<<<<<<< HEAD
	}
	
	.view_more {
=======
	}	
	.view_more{
		width: 100%;
		text-align: center;
		a{
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
		display: inline-block;
		margin: 30px auto 0;
		padding: 8px 15px;
		line-height: 14px;
		text-align: center;
		border-radius: 4px;
		color: #00b38a;
		border: 1px solid #00b38a;
<<<<<<< HEAD
	}
	
	.view_more:hover {
		color: white;
		background: #00b38a;
	}
	
</style>
<style >
	.el-rate{
		font-size:20px ;
	}
=======
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
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
</style>