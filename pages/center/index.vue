<template>
	<view class="content">
		<u-keyboard ref="uKeyboard" mode="car" v-model="show"></u-keyboard>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx;
	}
</style>
