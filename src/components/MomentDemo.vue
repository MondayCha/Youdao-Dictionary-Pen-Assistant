<template>
	<div>
		<div class="headbar" align="left">
			<a-space>
				<a-icon type="snippets" class="icon" />
				<h1 class="h1">有道词典笔打卡助手</h1>
			</a-space>
		</div>
		<!-- 主体区域 -->
		<div align="left" class="button">
			<a-date-picker v-model=msg type="date" />
		</div>
		<div class="pbsb">
			<div class="pbyyds">
				<a-textarea v-model="inputValue" autofocus="autofocus" autocomplete="off" placeholder="请输入今日日记" class="pbsg"
				@change="test" />
			</div>
			<div class="pbyyds">
				<a-textarea :disabled="true" v-model="outputValue" class="pbsg"></a-textarea>
			</div>
		</div>
		<div align="left" class="button">
			<a-space>
				<a-button type="primary" :disabled="this.inputValue.length == 0" @click="check">字数检查</a-button>
				<a-button :disabled="this.inputValue.length == 0" v-clipboard:copy="this.outputValue" v-clipboard:success="onCopy"
				v-clipboard:error="onError">复制到剪贴板</a-button>
				<a-button type="danger" :disabled="this.inputValue.length == 0" @click="jump" v-clipboard:copy="this.outputValue">复制并查询敏感词</a-button>
			</a-space>
		</div>
		<br>
		<br>
		<div class="foot">Powered by <a href="https://www.zhihu.com/people/Dlee-01">MondayCha</a></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "2020-08-07",
				inputValue: "",
				outputValue: undefined
			}
		},
		methods: {
			check() {
				const str_length = this.inputValue.replace(
					/[0-9a-zA-Z| |~|`|!|@|#|$|%|^|&|*|(|)|\-|_|+|=|{|}|;|:|"|'|,|<|.|>|?|，|。|？|：|；|‘|’|”|“|、|·|！|（|）|》|《|『|』|\s]/g,
					"").length
				if (str_length >= 100) {
					this.$message.success('字数已满足要求~');
				} else {
					this.$message.warning('再写一点吧~');
				}
			},
			test() {
				// 获取当前时间输出
				console.log(this.$moment().toDate())
				// 获取当前时间，并格式化输出
				console.log(this.$moment().format('YYYY-MM-DD'))
				const data_min = this.$moment(this.msg)
				const data_max = this.$moment()
				const your_day = data_max.diff(data_min, 'days') + 1
				const str_length = this.inputValue.replace(
					/[0-9a-zA-Z| |~|`|!|@|#|$|%|^|&|*|(|)|\-|_|+|=|{|}|;|:|"|'|,|<|.|>|?|，|。|？|：|；|‘|’|”|“|、|·|！|（|）|》|《|『|』|\s]/g,
					"").length
				this.outputValue = "有道打卡 | Day" + your_day + "\n" +
					this.inputValue + "\n" +
					"（约" + str_length + "个汉字）" + "\n" +
					"@有道" + "\n" +
					this.$moment().format('YYYY' + "年" + 'MM' + "月" + 'DD' + "日") + "\n" +
					"和有道词典笔的第" + your_day + "天"
			},
			onCopy() {
				this.$message.info('复制成功~');
			},
			onError() {
				console.log("复制失败");
			},
			jump() {
				window.location.href = "http://ci.lingke.pro/";
			}
		}
	}
</script>

<style lang="css" scoped>
	.headbar {
		padding: 20px;
		margin: 0 0 20px 0;
		background: #1890ff;
		position: relative;
		-webkit-box-shadow: 0 2px 10px rgba(18, 18, 18, .1);
		box-shadow: 0 2px 10px rgba(18, 18, 18, .1);
		z-index: 10;
		max-width: 100%;
	}

	.icon {
		margin: 0 0px 0px 10px;
		color: #fff;
		font-size: 26px;
	}

	.h1 {
		color: #fff;
		margin-bottom: 0.1em !important;
		font-weight: 400;

	}

	.pbsb {
		margin: 0px 15px;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}

	.button {
		margin: 15px 30px;
	}

	.pbyyds {
		margin: 0px 15px 15px;
		flex-grow: 1;
		min-width: 350px;
	}

	.pbsg {
		height: 400px;
	}

	.foot {
		height: 40px;
		line-height: 40px;
		position: fixed;
		bottom: 0;
		width: 100%;
		text-align: center;
		background: #333;
		color: #fff;
		font-family: Arial;
		font-size: 12px;
		letter-spacing: 1px;
	}
</style>
