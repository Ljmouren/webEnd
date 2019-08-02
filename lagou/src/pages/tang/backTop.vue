<template>
	<div class="hello">
		<!--回顶部-->
		<a id="backtop" title="回到顶部" rel="nofollow" @click="backTop" v-show="toTopIsShow"></a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				toTopIsShow: false //控制回到顶部按钮是否显示
			}
		},
		mounted() {
				window.addEventListener('scroll', this.scrollTop);
			},
			methods: {
				backTop() {
					 var cancelScroll  = false;
            var timer = null;
            if( cancelScroll === false ){
                timer = setInterval(function(){
                    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
                    //console.log(document.documentElement.scrollTop,document.body.scrollTop)
                    var ispeed = Math.floor(osTop-20);
                    document.documentElement.scrollTop = document.body.scrollTop = ispeed;
                    if( osTop === 0 ){
                        clearInterval(timer);
                    }
                },10)
            }else{
                clearInterval(timer);
                cancelScroll = true
            }
				},
			
			//返回顶部
			scrollTop() {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				let browserHeight = window.outerHeight;
				if(scrollTop > browserHeight) {
											this.toTopIsShow=true;
				} else {
											this.toTopIsShow=false;
				}

			}
	}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	#backtop {
		background: url(../../assets/img/company/backtop-new_0e4bcbc.png) left top no-repeat;
		width: 28px;
		height: 46px;
		position: fixed;
		left: 50%;
		bottom: 88px;
		margin-left: 548px;
		cursor: pointer;
		z-index: 1002;
		display: block;
		background-position-x: 0px;
		&:hover{
			background-position-x: -38px;
		}
	}
</style>