<template>
	<div class="loginwrap">
		<form>
			<slot name="phonenum"></slot>
			<slot name="ainput"></slot>
			<slot name="tishik1"></slot>
			<slot name="binput"></slot>
			<slot name="tishik2"></slot>
			<slot name="btn"></slot>
			<slot name="wangjimima"></slot>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>