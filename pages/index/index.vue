<template>
	<view class="content">
		<u-button type="primary" @click="getList">获取数据</u-button>
		<u-loading mode="circle" :show="loading"></u-loading>
		<u-avatar v-for="item in dataList" :key="item.id" :src="item.face"></u-avatar>
		<view class="text">
			{{name}}
		</view>
	</view>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	data() {
		return {
			title: 'Hello',
			dataList: [],
			loading: false
		};
	},
	computed: {
		...mapGetters('home', ['name'])
	},
	onLoad() {
		uni.setStorageSync(
			'token',
			'mOUzkL+fhyo4W9fjtn1h3Uv7LFI1EEFx3j0UQGFdakHTRzGxE5kWHj2XjjkJHU/aD20dle76WqdpL2lemYNbi13uYJQRki90//zWDCSKezoSZkS/iYVcdjj9eThdtOeCs8uS2SjnjXBkO3iPxXCywvVP6f27IByOSjrfywrSobdjX87qOZdC8HEe0c7ylxFg'
		);
	},
	methods: {
		async getList() {
			this.loading = true
			const { result, status } = await this.$u.api.test.getListByPage({
				pageIndex: 1,
				pageSize: 10
			});
			this.loading = false
			this.dataList = result.list;
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 40rpx;
	.text {
		font-size: 20rpx;
		color: #2B85E4;
	}
}
</style>
