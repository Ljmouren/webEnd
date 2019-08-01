<template>
	<div>
	<top></top>
	<logo></logo>
	<search></search>
	<itemjob></itemjob>
	<company></company>
	<foot></foot>
	</div>
</template>

<script>
import logo from './logo'
import search from './search'
import itemjob from './itemJob'
import company from './company'
import top from '../../components/publictop'
import foot from '../../components/publicfooter'
export default{
	components:{
		logo,search,itemjob,company,top,foot
		}
}
</script>

<style>
</style>