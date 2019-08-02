<template>
    <div class="item_container">
					<span class="item_title">
						{{item_title}}
					</span>
					<div class="item_content">
					<slot name='product_content'></slot>
					</div>
  </div>
</template>

<script>
export default {
	props:['item_title'],
  components:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.item_title {
  position: absolute;
  position: relative;
  background: white;
  color: #000000;
  top: -14px;
  padding-right: 8px;
  font-size: 19px;
}
.item_container {
  position: relative;
  display: inline-block;
  border-top: 1px solid #e5e5e5;
  color: #555;
  width: 93%;
}
.product_content {
  position: relative;
  padding: 30px 0;
  display: inline-block;
  width: 100%;
  border-bottom: 1px dashed #e5e5e5;
  &:last-child{
  	border-bottom:none;
  }
}
.product_content .product_picture {
  width: 35%;
  float: left;
}
.product_content .product_details {
  width: 60%;
  float: right;
}
.product_content .product_details a {
  color: #555;
  position: relative;
}
.product_content .product_details a i {
  display: inline-block;
  width: 14px;
  height: 12px;
  position: absolute;
  top: 6px;
  right: -20px;
  background: url(../../assets/img/company/icons1_b3ea05c.png) no-repeat 0 0;
}
.product_content .product_details span {
  display: inline-block;
  padding: 0 3px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 12px;
  color: #777;
  margin-right: 5px;
  margin-top: 10px;
}
.product_content .product_details .textbox {
  margin-top: 10px;
  font-size: 14px;
  color: #555;
  height: 90px;
  overflow: auto;
}
</style>
