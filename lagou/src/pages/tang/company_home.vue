<template>
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
  </div>
</template>

<script>
import topH from './topH'
import Contents from './Contents'
export default {
  components:{
  	topH,Contents
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
