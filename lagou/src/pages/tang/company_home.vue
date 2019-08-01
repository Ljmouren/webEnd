<template>
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
   
  </div>
</template>

<script>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.commen{
	margin-top: 50px;
}

</style>
