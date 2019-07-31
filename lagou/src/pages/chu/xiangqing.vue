<template>
  <div class="xiangqing">
   <xiangTop></xiangTop>
   <xiangMiddle></xiangMiddle>
   <xiangBottom></xiangBottom>
  </div>
</template>

<script>
import xiangTop from '../../components/xiangTop'
import xiangMiddle from '../../components/xiangMiddle'
import xiangBottom from '../../components/xiangBottom'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	xiangTop,xiangMiddle,xiangBottom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
