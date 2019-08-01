<template>
<<<<<<< HEAD
  <div class="hello">
    <topH>
    <div slot='first'>
    	<Contents></Contents>
    </div>
    <div slot='second'>
    	222
    </div>
    <div slot='third'>
    	3333
    </div>
    <div slot='fourth'>
    	444
    </div>
    </topH>
=======
  <div>
  	<publictop></publictop>
    <topH>
    <div slot='first'>
    	<Contents></Contents>
    	<cfooter></cfooter> 
    </div>
    <div slot='second' class="main">
    	招聘职位
    	<publicfooter></publicfooter> 
    </div>
    <div slot='third'>
    	校招职位
    	<publicfooter></publicfooter> 
    </div>
    <div slot='fourth'>
    	公司问答
    	<publicfooter class='modify'></publicfooter> 
    </div>
    </topH>
   <backtop></backtop>
   
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
  </div>
</template>

<script>
<<<<<<< HEAD
import topH from './topH'
import Contents from './Contents'
export default {
  components:{
  	topH,Contents
=======
	import publictop from '../../components/publictop'
	import publicfooter from '../../components/publicfooter'
import cfooter from './cfooter'
import topH from './topH'
import Contents from './Contents'
import c_right from './c_right'
import backtop from './backTop'
export default {
  components:{
  	publictop,publicfooter,topH,Contents,c_right,backtop,cfooter
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
<<<<<<< HEAD
=======
.commen{
	margin-top: 50px;
}
>>>>>>> e485f0fb49e92e2f3bf4de80aceebd220c400faf

</style>
